const express = require('express')

const router = express.Router()

router.get('/', (_, res) => {
  res.render('index', {
    title: 'My Cool App',
    user: 'Nerd'
  })
})

module.exports = router
