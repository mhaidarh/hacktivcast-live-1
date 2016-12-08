const express = require('express')
const router = express.Router()

const axios = require('axios')
const params = {
  baseURL: 'https://api.github.com',
  timeout: 10000,
  headers: {'Authorization': `token ${process.env.GITHUB_TOKEN}`}
}
const request = axios.create(params)

// -----------------------------------------------------------------------------

router.get('/', (req, res) => {
  console.log('HELLO FROM GITHUB.JS')

  const url = `/search/users?` +
    `q=location:Indonesia+followers:>=100+repos:>=100` +
    `&sort=followers`

  request
    .get(url)
    .then(response => {
      let arr = response.data.items
      for (let i = 0; i < 10; i++) {
        const userUrl = `/users/${arr[i].login}`
        request
          .get(userUrl)
          .then(response => {
            const user = {
              login: response.data.login,
              photo: response.data.avatar_url,
              location: response.data.location,
              followers: response.data.followers,
              public_repos: response.data.public_repos,
              public_gists: response.data.public_gists
            }
            console.log(i, user)
          })
          .catch((err) => {
            console.error(err)
          })
      }
    })
    .catch(error => {
      console.error(error)
    })

  res.send('OK')
})

module.exports = router
