export const saveCookie = (key, value) => {
  document.cookie = `${key}=${value};path=/;\n`;
};

export const deleteCookie = (key) => {
  const cookieList = document.cookie.split(' ');
  cookieList.forEach((cookie) => {
    const keyVal = cookie.split('=');
    if (keyVal[0] == key) {
      const dateGen = new Date('01-01-90');
      saveCookie(key, `xxx;path=/;expires=${dateGen.toUTCString()}`);
    }
  });
};

export const getCookie = (key) => {
  const cookieList = document.cookie.split(';');

  let value = null;

  cookieList.forEach((cookie) => {
    const keyVal = cookie.trim().split('=');
    if (keyVal[0] == key) {
      value = keyVal[1];
    }
  });

  return value;
};

export const printCookies = () => {
  console.log(document.cookie);
};
