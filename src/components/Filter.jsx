import { useEffect, useState } from "react";
import { getTopics } from "../api"
import { Link } from "react-router-dom";

const Filter = ({searchParams, setFilter}) => {
    const [topics, setTopics] = useState([])
    
    useEffect(() => {
        getTopics()
        .then((data) => {
            const topicList = data.map((topic) => {
                return (topic.slug)
            })
            setTopics(topicList)
        })
    }, [])

    const handleTopicSelect = (topic) => {
            setFilter(topic)
            searchParams.set("topic", topic)
    }
    

    return (
        <div className="filter-bar">
            <ul>
            {topics.map((topic) => 
            <Link key={topic} to={`/articles?topic=${topic}`}> <li className="filter-bar-item" key={topic} > <button className="filter-button" onClick={(() => handleTopicSelect(topic))}> {topic} </button> </li> </Link>
                
                )}
            <Link to={`/articles`}><li className="filter-bar-item" > <button className="filter-button" onClick={(() => handleTopicSelect())}> No Filter </button> </li>
            </Link>
    

            </ul>
        </div>
    )
}
export default Filter;