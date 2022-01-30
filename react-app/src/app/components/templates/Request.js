const path = 'http://localhost:3500'

export const request = (data, option) => {
  if (!data) {
    return {
      status: 400
    }
  } else if (option) {

  } else {
    fetch(`${path}/`)
    .then(responce => console.log(responce))
  }
};