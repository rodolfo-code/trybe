const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const multer = require('multer')

const app = express()

app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')))
// app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')))

const storage = multer.diskStorage({
  destination: (_req, _file, callback) => {
    callback(null, 'uploads')
  },
  filename: (req, file, callback) => {
    
    callback(null, `${req.params.id}-${file.originalname}`)
  }
})

// const upload = multer({dest: './uploads'})
const upload = multer({storage})

app.post('/file/uploads',upload.single('file'), (req, res) => {
  // console.log(req)
  res.send( req.file)
})

app.post('/user/:id/avatar',upload.single('avatar'), (req, res) => {
  // console.log(req)
  res.send( req.file)
})

app.listen(3000, () => {
  console.log('server on')
})