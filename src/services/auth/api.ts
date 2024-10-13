import axios from 'axios';

export const getNewAccessToken = async (refreshToken: string) => {
  const newAccessToken: string = await axios.get('/auth/refresh-token', {
    headers: { Authorization: `Bearer ${refreshToken}` },
  });
  return newAccessToken;
};
