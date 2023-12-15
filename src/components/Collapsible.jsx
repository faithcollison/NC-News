import { useState } from "react"
import { Button } from "react-bootstrap"

const Collapsible = ({children, descriptor, comments}) => {
    const [isHidden, setIsHidden] = useState(true)
    
    function hidden () {
        setIsHidden(!isHidden)
    }
    
    return (
        <div>
            
            {comments.length === 0 ? ("No comments for this article") : (
            <>
             <Button variant="secondary" onClick={hidden}>{isHidden? "Show" : "Hide"} {descriptor}</Button>{' '}
            {isHidden? null : children}
            </> 
            )}
        </div>
    )

}
export default Collapsible