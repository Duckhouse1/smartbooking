import { useContext } from "react"
import { TextContext } from "./headerSection"



export const GrandComp : React.FC = () => {
    const {text,setText} = useContext(TextContext)

    return (
        <div>
            <p>{text}</p>
            <input type="text" onChange={(e) => setText(e.target.value)} />
        </div>
    )
}