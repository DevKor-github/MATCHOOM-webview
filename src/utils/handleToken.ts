import { Cookies } from 'react-cookie';

const cookies = new Cookies();

const REFRESH_TOKEN = 'refresh-token';
const ACCESS_TOKEN = 'access-token';

const REFRESH_TOKEN_EXPIRATION_TIME = 3600 * 1000 * 24 * 3; // 3일
const ACCESS_TOKEN_EXPIRATION_TIME = 3600 * 1000 * 3; // 3시간

const setCookie = (name: string, value: string, expires: Date) => {
  return cookies.set(name, value, {
    secure: false,
    sameSite: 'lax',
    path: '/',
    expires,
  });
};

export const setRefreshToken = (value: string) => {
  const expiration = new Date(Date.now() + REFRESH_TOKEN_EXPIRATION_TIME);
  setCookie(REFRESH_TOKEN, value, expiration);
};

export const setAccessToken = (value: string) => {
  const expiration = new Date(Date.now() + ACCESS_TOKEN_EXPIRATION_TIME);
  setCookie(ACCESS_TOKEN, value, expiration);
};

export const getRefreshToken = () => {
  return cookies.get(REFRESH_TOKEN);
};

export const getAccessToken = () => {
  return cookies.get(ACCESS_TOKEN);
};

export const deleteRefreshToken = () => {
  cookies.remove(REFRESH_TOKEN);
};

export const deleteAccessToken = () => {
  cookies.remove(ACCESS_TOKEN);
};
