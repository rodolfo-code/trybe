const express = require('express')

const users = require('./routes/routerUser')

const app = express()
app.use(express.json())


app.use('/api', users)

app.listen(3000, () => {
  console.log('app on port 3000')
})