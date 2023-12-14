import { useState } from "react"
import { useNavigate} from "react-router-dom"

const SortArticles = ({articles, setOrder, setSortBy, searchParams}) => {
    const [input, setInput] = useState("")
    let navigate = useNavigate()

    const handleSortBy = (sort) => {
            setSortBy(sort)
            searchParams.set("sort_by", sort)
            navigate(`/articles?${searchParams.toString()}`)
    }
    const handleChange = (event) => {
       setInput(event.target.value)     
    }
    const handleOrder = () => {
        setOrder(input)
        searchParams.set("order", input)
        navigate(`/articles?${searchParams.toString()}`)
    }

    return (
        <div>
            <div>
            <p> Sort</p>
            <button className="sort-button" onClick={() => {handleSortBy("created_at")}}> Date </button>
            <button className="sort-button" onClick={() => {handleSortBy("votes")}}> Votes </button>
            <button className="sort-button" onClick={() => {handleSortBy("author")}}> Author </button>
            </div>
            <label htmlFor="descendingOrder"> Order results:  </label> 
            <select className="order-bar" name="order" id="order-results" onChange={handleChange}>
                <option> </option>
                <option value="desc" > High to Low  </option>
                <option value="asc" > Low to High </option>
            </select>
            <button onClick={handleOrder}> Order! </button>
            
        </div>
    )
}
export default SortArticles;
// const sortedArticles = [...articles].sort((a, b) => a.comment_count - b.comment_count)
// console.log(sortedArticles)