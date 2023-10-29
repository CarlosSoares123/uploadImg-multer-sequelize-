const express = require('express')
const router = express.Router()
const multer = require('multer')
const path = require('path')
const { createPost, getPosts } = require('../controllers/postController')

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/uploads')
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9)
    cb(null, uniqueSuffix + path.extname(file.originalname))
  }
})

const upload = multer({ storage })

// Rota para criar uma nova postagem
router.post('/posts', upload.single('image'), createPost)
router.get ('/posts', getPosts)

module.exports = router
