import axios from 'axios'

const api = axios.create({baseURL: `https://northcoder-news.onrender.com/api` })

export function getArticles(sort_by, order) {
    // console.log(sort_by, "<<< sortby")
    // console.log(order, "<< order")
    // if(sort_by && order) {
        return api
        .get(`/articles`, {
            params:{
                sort_by: sort_by || "created_at",
                order: order || "desc"
            }}
        )
        .then((res) => {
            return res.data
        })
    // }
    // else if(sort_by){
    //     return api
    //     .get(`/articles`, {
    //         params:{
    //             sort_by: sort_by
    //         }}
    //     )
    //     .then((res) => {
    //         return res.data
    //     })
    // }
    // else {
    //     return api
    //     .get(`/articles`)
    //     .then((res) => {
    //         return res.data
    //     })
    // }
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
export function postComment(id, newCommentText) {
    const postBody = {
        body: newCommentText,
        username: "jessjelly"
    }
    return api
    .post(`/articles/${id}/comments`, postBody)
    .then((res) => {
        return res.data.comment
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