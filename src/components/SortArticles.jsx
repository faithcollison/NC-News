import { useState } from "react"
import { useNavigate} from "react-router-dom"
import Dropdown from 'react-bootstrap/Dropdown';

const SortArticles = ({setOrder, setSortBy, searchParams}) => {
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
        <div className="sort-bar">
            <div >
                    <label htmlFor="sort-results"> Sort :  </label>
                    <select className="order-bar" name="sort" id="sort-results" onChange={handleSortChange}>
                        <option value="created_at" > Date  </option>
                        <option value="votes" > Votes </option>
                        <option value="author" > Author </option>
                    </select>
                    <button type="button" class="btn btn-dark" onClick={handleSort}> Go </button>
                
            </div>
            <div >
                    <label htmlFor="order-results"> Order :  </label>
                    <select className="order-bar" name="order" id="order-results" onChange={handleOrderChange}>
                        <option value="desc" > High to Low  </option>
                        <option value="asc" > Low to High </option>
                    </select>
                    <button type="button" class="btn btn-dark" onClick={handleOrder}> Go </button>
            </div>
        </div>
    )
}
export default SortArticles;
