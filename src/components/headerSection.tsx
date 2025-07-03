import { createContext, Dispatch, SetStateAction, useState } from "react"
import { GrandComp } from "./grandchildComponent"

export interface ITextContext {
    text: string;
    setText: Dispatch<SetStateAction<string>>
}

// Create a default context (can be overwritten by provider)
export const TextContext = createContext<ITextContext>({
  text: "",
  setText: () => {},
});


export const HeaderSection: React.FC = () => {
    const [text, setText] = useState("")

    const textChange = (written: string) => {
        setText(written)
    }

    return (
        <>
            <TextContext.Provider value={{ text, setText }} >
                <div className="headerSection">
                    <div className="left">
                        <h1>SMARTBOOKING</h1>
                    </div>
                    <div className="center" style={{ fontSize: "20px" }}>
                        <p className="Button">HOME</p>
                        <p className="Button">ABOUT</p>
                        <p className="Button">PRIZES</p>
                        <p className="Button">CONTACT</p>
                        <input type="text" onChange={(e) => textChange(e.target.value)} />
                    </div>
                    <div className="right">
                        <button className="Button">LINK</button>

                    </div>
                </div>

                <div className='headline'>
                    <GrandComp></GrandComp>
                </div>
            </TextContext.Provider>
        </>
    )
}