import { useState } from "react"

const Collapsible = ({children, descriptor}) => {
    const [isHidden, setIsHidden] = useState(true)
    function hidden () {
        setIsHidden(!isHidden)
    }

    return (
        <div>
            <button onClick={hidden}> {isHidden? "Show" : "Hide"} {descriptor} </button>
            {isHidden? null : children}
        </div>
    )

}
export default Collapsible