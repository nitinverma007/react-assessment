export default function (...params) {
  const API = params[0];

  let data = '?';

  if (params[1]) {
    for (const key in params[1]) {
      data = `${data}${key}=${params[1][key]}&`;
    }
  }

  return fetch(`${API}${data}`);
}
