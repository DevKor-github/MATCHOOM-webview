import { atom } from 'jotai';

interface TokenType {
  accessToken: string;
  refreshToken: string;
}

const tokenAtom = atom<TokenType>({
  accessToken: '',
  refreshToken: '',
});

export const refreshTokenAtom = atom(
  (get) => get(tokenAtom).refreshToken,
  (get, set, arg: string) => {
    set(tokenAtom, { ...get(tokenAtom), refreshToken: arg });
  },
);

export const accessTokenAtom = atom(
  (get) => get(tokenAtom).accessToken,
  (get, set, arg: string) => {
    set(tokenAtom, { ...get(tokenAtom), accessToken: arg });
  },
);
