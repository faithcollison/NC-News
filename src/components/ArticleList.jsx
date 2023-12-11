import { useState, useEffect} from "react"
import { getArticles } from "../api"
import ArticleFilter from "./ArticleFilter"
import ArticleItem from "./ArticleItem"

const ArticleList = () => {
    // const [filter, setFilter] = useState("")
    const [articles, setArticles] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)

    useEffect(() => {
        getArticles()
        .then(({articles}) => {
            setArticles(articles)
            setIsLoading(false)
        })
        .catch((err) => {
            console.log(err)
            setIsError(true)
            setIsLoading(false)
        })
    }, [])

    if(isLoading){
        return <h2> Loading... </h2>
    }
    if(isError) {
        return <p> Woopsie, there's been an error! </p>
    }
    return (

        <div className="article-list-container">
           <ArticleFilter />
           {articles.map((article) => {
            return (
                <ArticleItem key={article.article_id} article={article} />
            )
           })}
        </div>
    )
    
}
export default ArticleList