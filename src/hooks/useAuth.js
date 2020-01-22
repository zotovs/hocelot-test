import { useState, useEffect } from 'react';
import axios from 'axios';

import setToken from '../utils/setToken';

function useAuth() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const authInfo = localStorage.getItem('authInfo');

    if (!authInfo) {
      setIsLoggedIn(false);
    } else {
      localStorage.setItem('authInfo', authInfo);
      const parsedAuthInfo = JSON.parse(authInfo);

      const currentTime = Date.now();

      if (currentTime > parsedAuthInfo.exp) {
        setIsLoggedIn(false);
      } else {
        setIsLoggedIn(true);
        setToken(parsedAuthInfo.token);
      }
    }
  }, []);

  const handleLogIn = async () => {
    const formData = new FormData();
    formData.append('grant_type', 'client_credentials');

    const { data } = await axios.post(
      `https://dev.hocelot.com/token`,
      formData,
      {
        headers: {
          Authorization: `Basic a3NVaG81NCs2ZXIwSy9uRlBsR2hLbHowT0h1QTp4NVdxeDFCTThKMUVqeTNWRWI2QnZaeDB3cHRl`,
        },
      },
    );

    setIsLoggedIn(true);
    localStorage.setItem(
      'authInfo',
      JSON.stringify({
        token: data.access_token,
        exp: Date.now() + data.expires_in * 1000,
      }),
    );
    setToken(data.access_token);
  };

  return { isLoggedIn, handleLogIn };
}

export default useAuth;
