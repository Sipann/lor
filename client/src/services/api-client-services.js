export default {

  play: (playerInput) => {
    const fetchOptions = {
      method: 'POST',
      body: JSON.stringify(playerInput),
      headers: { 'Content-Type': 'application/json' }
    };
    return fetchRequest('play', fetchOptions);
  },
}

const fetchRequest = (url = '', fetchOptions = {}) => {
  return fetch(`${process.env.REACT_APP_BASE_URL}/${url}`, fetchOptions)
    .then(res => res.status <= 400 ? res : Promise.reject(res))
    .then(res => res.json())
    .catch((err) => {
      console.log(`${err.message}`);
    });
};