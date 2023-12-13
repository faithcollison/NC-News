import { useEffect, useState } from "react";
import { getTopics } from "../api"

const Filter = ({setFilter}) => {
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
        if(topic) {
            setFilter(topic)
        }
        else {setFilter("")}
    }
    

    return (
        <div className="filter-bar">
            <ul>
            {topics.map((topic) => 
                <li className="filter-bar-item" key={topic} > <button className="filter-button" onClick={(() => handleTopicSelect(topic))}> {topic} </button> </li>
                )}
                <li className="filter-bar-item" > <button className="filter-button" onClick={(() => handleTopicSelect())}> No Filter </button> </li>
    

            </ul>
        </div>
    )
}
export default Filter;