import { useEffect, useState } from "react";
import { getTopics } from "../api"
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';

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
                    <Link key={topic} to={`/articles?topic=${topic}`}> 
                        <li className="filter-bar-item" key={topic} > 
                            <Button variant="dark" onClick={(() => handleTopicSelect(topic))} >{topic}</Button>{' '} 
                        </li> 
                    </Link>
                )}
                <Link to={`/articles`}>
                    <li className="filter-bar-item" > 
                    <Button variant="dark" onClick={(() => handleTopicSelect())} >none </Button>{' '}
                        {/* <button type="button" class="btn btn-secondary" onClick={(() => handleTopicSelect())}> none </button>  */}
                    </li>
                </Link>
            </ul>
        </div>
    )
}
export default Filter;
// <button type="button" class="btn btn-secondary" onClick={(() => handleTopicSelect(topic))}> {topic} </button>