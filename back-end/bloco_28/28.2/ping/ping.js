const axios = require('axios')

axios
  .get('http://localhost:3000/ping/')
  .then((res) => {
    console.log(res.data);
    console.log(res.status);
  })
  .catch((err) => {
    console.log(err)
  })

  // Existem outras formas de se fazer requisições HTTP através do axios:

  //GET

  // axios.get('/user', {
  //   params: {
  //     ID: 12345
  //   }
  // })
  // .then((response) => {
  //   console.log(response);
  // })
  // .catch((error) => {
  //   console.log(error);
  // })

  // // ou

  // const getUser = async () => {
  //   try {
  //     const response = await axios.get('/user?ID=12345');
  //     console.log(response);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  // // POST

  // const body = {
  //   firstName: 'Fred',
  //   lastName: 'Flintstone'
  // };
  
  // axios.post('/user', body)
  //   .then((response) => {
  //     console.log(response);
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });
