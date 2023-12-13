import axios from 'axios'

const api = axios.create({baseURL: `https://northcoder-news.onrender.com/api` })

export function getArticles() {
    return api
    .get(`/articles`)
    .then((res) => {
        return res.data
    })
}

export function getArticleById(id) {
    return api
    .get(`/articles/${id}`)
    .then((res) => {
        return res.data
    })
}

export function getArticleComments(id) {
    return api
    .get(`/articles/${id}/comments`)
    .then((res) => {
        return res.data
    })
}

export function incrVoteCount(id) {
    const patchBody = {
        inc_votes: 1
    }
    return api
    .patch(`/articles/${id}`, patchBody)
    .then((res) => {
        return res.data.article
    })
}

export function decrVoteCount(id) {
    const patchBody = {
        inc_votes: -1
    }
    return api
    .patch(`/articles/${id}`, patchBody)
    .then((res) => {
        return res.data.article
    })
}

export function getUsers() {
    return api
    .get(`/users`)
    .then((res) => {
        return res.data.users
    })
} 

export function deleteComment (id) {
    return api
    .delete(`/comments/${id}`)
    .then((res) => {
        return res.data.comment
    })
}