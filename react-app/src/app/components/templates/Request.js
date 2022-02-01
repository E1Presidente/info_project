import {useSelector} from 'react-redux';

const path = 'http://localhost:3500'

const temp = JSON.stringify({
  'temp': '123'
})

export const request = (data, option) => {
  if (!data) {
    return {
      status: 400
    }
  } else if (!option) {

  } else {
    fetch(path, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: temp
    })
    .then(responce => console.log(temp))
  }
};