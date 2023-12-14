import { useState } from "react"

const SortArticles = ({setOrder, setSortBy}) => {
    const [input, setInput] = useState("")

    const handleSortBy = (sort) => {
        if(sort){
            // console.log(sort)
            setSortBy(sort)
        }
        else {setSortBy("")}
    }

    const handleChange = (event) => {
       setInput(event.target.value)     
    }
    const handleOrder = () => {
        // console.log(input)
        setOrder(input)
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