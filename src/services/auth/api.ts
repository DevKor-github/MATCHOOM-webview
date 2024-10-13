import axios, { AxiosError } from 'axios';
import { postMessage } from 'hooks/useWebViewListener';

export const getNewAccessToken = async (refreshToken: string) => {
  try {
    const newAccessToken: string = await axios.get('/auth/refresh-token', {
      headers: { Authorization: `Bearer ${refreshToken}` },
    });
    return newAccessToken;
  } catch (e) {
    const error = e as AxiosError;
    if (error.status === 401) {
      postMessage({ type: 'LOGOUT' });
    } else {
      console.error('토큰을 재발급 받지 못했습니다.');
    }
  }
};
