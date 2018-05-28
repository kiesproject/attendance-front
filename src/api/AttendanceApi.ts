const endPoint = 'https://kies-attendance.herokuapp.com';
const headers = {
  'Content-Type': 'application/json',
};

export function postRegister(name: string, password: string) {
  return fetch(`${endPoint}/register`, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      name,
      password,
    }),
    mode: 'cors',
  }).then(res => {
    if (!res.ok) {
      return res.json().then(data => {
        throw new Error(data.message);
      });
    }
    return res.json();
  });
}

export function postLogin(name: string, password: string) {
  return fetch(`${endPoint}/login`, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      name,
      password,
    }),
    mode: 'cors',
  }).then(res => {
    if (!res.ok) {
      return res.json().then(data => {
        throw new Error(data.message);
      });
    }
    return res.json();
  });
}
