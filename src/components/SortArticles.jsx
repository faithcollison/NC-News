import { useState } from "react"
import { useNavigate} from "react-router-dom"

const SortArticles = ({articles, setOrder, setSortBy, searchParams}) => {
    const [orderInput, setOrderInput] = useState("")
    const [sortInput, setSortInput] = useState("")
    let navigate = useNavigate()

    const handleOrderChange = (event) => {
       setOrderInput(event.target.value)     
    }
    const handleOrder = () => {
        setOrder(orderInput)
        searchParams.set("order", orderInput)
        navigate(`/articles?${searchParams.toString()}`)
    }
    const handleSortChange = (event) => {
        setSortInput(event.target.value)     
     }
     const handleSort = () => {
         setSortBy(sortInput)
         searchParams.set("sort_by", sortInput)
         navigate(`/articles?${searchParams.toString()}`)
     }
 
    return (
        <div>
            <div>
            <p> Sort</p>
            <label htmlFor="sort-results"> Sort results:  </label> 
            <select className="order-bar" name="sort" id="sort-results" onChange={handleSortChange}>
                <option value="created_at" > Date  </option>
                <option value="votes" > Votes </option>
                <option value="author" > Author </option>
            </select>
            <button onClick={handleSort}> Sort! </button>
            </div>
            <label htmlFor="order-results"> Order results:  </label> 
            <select className="order-bar" name="order" id="order-results" onChange={handleOrderChange}>
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