const endPoint = 'https://kies-attendance.herokuapp.com';
const headers = {
  'Content-Type': 'application/json',
};

// TODO: put postResister

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
      res.json().then(data => {
        throw new Error(data.message);
      });
    }
    return res.json();
  });
}
