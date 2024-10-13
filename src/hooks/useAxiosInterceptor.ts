import axios, { AxiosError } from 'axios';
import { useAtom, useAtomValue } from 'jotai';
import { useLayoutEffect } from 'react';
import { accessTokenAtom, refreshTokenAtom } from 'store/tokenAtom';
import { getNewAccessToken } from 'services/auth/api';
import { authInstance } from 'services/config';
import useWebViewListener, { postMessage } from './useWebViewListener';

const useAxiosInterceptor = () => {
  useWebViewListener();

  const [accessToken, setAccessToken] = useAtom(accessTokenAtom);
  const refreshToken = useAtomValue(refreshTokenAtom);

  useLayoutEffect(() => {
    if (!accessToken) {
      return;
    }

    const requestInterceptor = authInstance.interceptors.request.use(
      (config) => {
        config.headers.Authorization = `Bearer ${accessToken}`;
        return config;
      },
    );

    const responseInterceptor = authInstance.interceptors.response.use(
      (res) => res,
      async (error: AxiosError) => {
        if (error.status !== 401) {
          return Promise.reject(error);
        }

        try {
          const newAccessToken = await getNewAccessToken(refreshToken);
          setAccessToken(newAccessToken);
          const config = error.config;
          const response = await axios({
            ...config,
            headers: { Authorization: `Bearer ${newAccessToken}` },
          });
          return await Promise.resolve(response);
        } catch (e) {
          postMessage({ type: 'LOGOUT' });
        }
      },
    );

    return () => {
      authInstance.interceptors.request.eject(requestInterceptor);
      authInstance.interceptors.response.eject(responseInterceptor);
    };
  }, [accessToken]);
};

export default useAxiosInterceptor;
