import { useState } from "react"

const Collapsible = ({children, descriptor, comments}) => {
    const [isHidden, setIsHidden] = useState(true)
    
    function hidden () {
        setIsHidden(!isHidden)
    }
    
    return (
        <div>
            
            {comments.length === 0 ? ("No comments for this article") : (
            <>
            <button onClick={hidden}> {isHidden? "Show" : "Hide"} {descriptor} </button> 
            {isHidden? null : children}
            </> 
            )}
        </div>
    )

}
export default Collapsible