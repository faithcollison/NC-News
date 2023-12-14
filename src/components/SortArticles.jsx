import { useState } from "react"
import { useNavigate} from "react-router-dom"

const SortArticles = ({setOrder, setSortBy, searchParams}) => {
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
            <p> Sort by: </p>
            <button onClick={() => {handleSortBy("created_at")}}> Date </button>
            <button onClick={() => {handleSortBy("votes")}}> Votes </button>
            <button onClick={() => {handleSortBy("author")}}> Author </button>
            
            <label htmlFor="descendingOrder"> Order results:  </label> 
            <select name="order" id="order-results" onChange={handleChange}>
                <option> </option>
                <option value="desc" > High to Low  </option>
                <option value="asc" > Low to High </option>
            </select>
            <button onClick={handleOrder}> Order! </button>
            
        </div>
    )
}
export default SortArticles;