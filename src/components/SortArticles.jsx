const SortArticles = ({setSortBy}) => {
    // const [order, setOrder] = useState("")
    // console.log(articles)
    const handleSortBy = (sort) => {
        if(sort){
            setSortBy(sort)
        }
        else {setSortBy("")}
    }

    return (
        <div>
            <p> Sort by: </p>
            <button onClick={() => {handleSortBy("created_at")}}> Date </button>
            <button onClick={() => {handleSortBy("votes")}}> Votes </button>
            <button onClick={() => {handleSortBy("")}}> Comments </button>
            {/* <input id="descendingOrder" type="checkbox" /> 
            <label htmlFor="descendingOrder"> High to Low </label> 
            <input id="ascendingOrder" type="checkbox" />    
            <label htmlFor="ascendingOrder"> Low to High </label>    */}
        </div>
    )
}
export default SortArticles;