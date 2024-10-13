import { useSetAtom } from 'jotai';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { accessTokenAtom, refreshTokenAtom } from 'store/tokenAtom';

declare global {
  interface Window {
    ReactNativeWebView: any;
  }
}

interface MessageType {
  type: string;
  value?: string;
}

const useWebViewListener = () => {
  // const navigate = useNavigate();
  const setRefreshToken = useSetAtom(refreshTokenAtom);
  const setAccessToken = useSetAtom(accessTokenAtom);

  const handleInit = (value: string | undefined) => {
    if (!value) {
      console.error('Initial token value not given from App.');
      return;
    }

    const [refreshToken, accessToken] = value.split(' ');
    setRefreshToken(refreshToken);
    setAccessToken(accessToken);
  };

  const listener = (event: any) => {
    const message: MessageType = event.data;
    const { type, value } = message;

    switch (type) {
      case 'INIT':
        handleInit(value);
        break;
      case 'REFRESH':
        // TODO: 현재 router context 내부에 있지 않아 동작하지 않음. 추후 해결해야함.
        // navigate(0);
        break;
      default:
        console.error(`Unknown Message from App: ${type}, ${value}`);
    }
  };

  useEffect(() => {
    const receiver = navigator.userAgent.includes('Android')
      ? document
      : window;
    receiver.addEventListener('message', listener);
  }, []);
};

export default useWebViewListener;

export const postMessage = (message: MessageType) => {
  if (!window.ReactNativeWebView) {
    return;
  }
  window.ReactNativeWebView?.postMessage(JSON.stringify(message));
};
