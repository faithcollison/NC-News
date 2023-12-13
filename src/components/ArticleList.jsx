import { useState, useEffect} from "react"
import { Link } from "react-router-dom"
import { getArticles } from "../api"
import Filter from "./Filter"
import ArticleItem from "./ArticleItem"

const ArticleList = () => {
    const [filter, setFilter] = useState("")
    const [articles, setArticles] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)

    useEffect(() => {
        getArticles(filter)
        .then(({articles}) => {
            console.log(articles.length)
            setArticles(articles)
            setIsLoading(false)
        })
        .catch((err) => {
            console.log(err)
            setIsError(true)
            setIsLoading(false)
        })
    }, [filter])

    if(isLoading){
        return <h2> Loading... </h2>
    }
    if(isError) {
        return <p> Woopsie, there's been an error! </p>
    }
  
    return (
        <div className="article-list-container">
           <Filter setFilter={setFilter} />
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