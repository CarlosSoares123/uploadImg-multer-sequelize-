const { Post } = require('../../models')

const createPost = async (req, res) => {
  try {
    const { title, description } = req.body
    const image = req.file.filename

    const post = await Post.create({ title, description, image })

    res.status(201).json(post)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Erro ao criar a postagem.' })
  }
}
const getPosts = async (req, res) => {
  const posts = await Post.findAll()
  res.json(posts)
}

module.exports = {
  createPost,
  getPosts
}
