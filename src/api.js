import axios from 'axios'

const api = axios.create({baseURL: `https://northcoder-news.onrender.com/api` })

export function getArticles() {
    return api
    .get(`/articles`)
    .then((res) => {
        return res.data
    })
}