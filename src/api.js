import axios from 'axios'

const api = axios.create({baseURL: `https://northcoder-news.onrender.com/api` })

export function getTopics() {
    return api
    .get(`/topics`)
    .then((res) => {
        return res.data.topics
    })
}

export function getArticles(filter) {
    return api
    .get(`/articles`,{
        params: {
            topic: filter
        }
    })
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
    .catch(
        function (error) {
            if(error.response) {
                console.log("response")
                console.log(error.response.data)
                console.log(error.response.status);
                console.log(error.response.headers);
            }
            else if (error.request){
                console.log("request")
                console.log(error.request);
            }
            else {
                console.log('Error', error.message);
              }
        }
    )
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

