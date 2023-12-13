import { useState } from "react"

const SortArticles = ({setOrder, setSortBy}) => {
    const [checked, setChecked] = useState(true)

    const handleSortBy = (sort) => {
        if(sort){
            setSortBy(sort)
        }
        else {setSortBy("")}
    }

    const handleSelectDecr = () => {
        // console.log(checked)
        setChecked(!checked)
        if(checked) {
            
            setOrder("desc")
        }
        else {
            setOrder("")
        }
    }
    const handleSelectIncr = () => {
        setChecked(!checked)
        if(checked) {
            setOrder("asc")
        }
        else {
            setOrder("")
        }
    }

    return (
        <div>
            <p> Sort by: </p>
            <button onClick={() => {handleSortBy("created_at")}}> Date </button>
            <button onClick={() => {handleSortBy("votes")}}> Votes </button>
            {/* <button onClick={() => {handleSortBy("comment_count")}}> Comments </button> */}
            <input id="descendingOrder" type="checkbox" onChange={handleSelectDecr}/> 
            <label htmlFor="descendingOrder"> High to Low </label> 
            <input id="ascendingOrder" type="checkbox" onChange={handleSelectIncr}/>    
            <label htmlFor="ascendingOrder"> Low to High </label>   
        </div>
    )
}
export default SortArticles;