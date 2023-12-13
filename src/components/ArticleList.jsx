import { useState, useEffect} from "react"
import { Link } from "react-router-dom"
import { getArticles } from "../api"
import ArticleFilter from "./ArticleFilter"
import ArticleItem from "./ArticleItem"
import SortArticles from "./SortArticles"

const ArticleList = () => {
    // const [filter, setFilter] = useState("")
    const [articles, setArticles] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)
    const [sortBy, setSortBy] = useState("")
    const [order, setOrder] = useState("")
    
    console.log(order)
    useEffect(() => {
        getArticles( sortBy, order)
        .then(({articles}) => {   
            const commentCountAsNumber = articles.map((article) =>{
                        const countToNum = Number(article.comment_count)
                        return ({...article, comment_count : countToNum })
                    } )
            setArticles(commentCountAsNumber)
            setIsLoading(false)
        })
        .catch((err) => {
            console.log(err)
            setIsError(true)
            setIsLoading(false)
        })
    }, [sortBy, order])

    if(isLoading){
        return <h2> Loading... </h2>
    }
    if(isError) {
        return <p> Woopsie, there's been an error! </p>
    }
    return (
        <div className="article-list-container">
           <ArticleFilter />
           <SortArticles setSortBy={setSortBy} setOrder={setOrder}/>
            {articles.map((article) => {
                return (
                <Link key={article.article_id} to={`/articles/${article.article_id}`}>
                    <ArticleItem key={article.article_id} article={article} /> 
                </Link>
                )
           })}
        </div>
    )
    
}
export default ArticleList