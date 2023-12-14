import { useState, useEffect} from "react"
import { Link, useSearchParams} from "react-router-dom"
import { getArticles } from "../api"
import ArticleFilter from "./ArticleFilter"
import ArticleItem from "./ArticleItem"
import SortArticles from "./SortArticles"

const ArticleList = () => {
    const searchParams = new URLSearchParams(window.location.search);

    const [articles, setArticles] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)
    const [sortBy, setSortBy] = useState(searchParams.get("sort_by") || "")
    const [order, setOrder] = useState(searchParams.get("order") || "")
    
    useEffect(() => {
        getArticles( sortBy, order)
        .then(({articles}) => {   
            setArticles(articles)
            setIsLoading(false)
            setIsError(false)
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
           <SortArticles articles={articles} searchParams={searchParams} setSortBy={setSortBy} setOrder={setOrder}/>
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
