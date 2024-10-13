import { AxiosError } from 'axios';
import { useAtom, useAtomValue } from 'jotai';
import { useLayoutEffect } from 'react';
import { accessTokenAtom, refreshTokenAtom } from 'store/tokenAtom';
import { getNewAccessToken } from 'services/auth/api';
import { authInstance } from 'services/config';
import useWebViewListener from './useWebViewListener';

const useAxiosInterceptor = () => {
  useWebViewListener();

  const [accessToken, setAccessToken] = useAtom(accessTokenAtom);
  const refreshToken = useAtomValue(refreshTokenAtom);

  const updateAccessToken = async () => {
    const newAccessToken = await getNewAccessToken(refreshToken);
    if (!newAccessToken) {
      return;
    }
    setAccessToken(newAccessToken);
  };

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
      (error: AxiosError) => {
        console.error(error);

        if (error.status === 401) {
          updateAccessToken();
          console.error('토큰이 만료되었습니다.');
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
