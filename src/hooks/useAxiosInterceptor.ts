import { AxiosError } from 'axios';
import { useAtomValue } from 'jotai';
import { useLayoutEffect } from 'react';
import { accessTokenAtom } from 'store/tokenAtom';
import { authInstance } from 'services/config';
import useWebViewListener from './useWebViewListener';

const useAxiosInterceptor = () => {
  useWebViewListener();
  const accessToken = useAtomValue(accessTokenAtom);

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
          // TODO: access token 재발급 로직 구현하기
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
