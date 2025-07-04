import { createContext, Dispatch, SetStateAction, useContext} from "react"

export interface ICurrentSite {
    overskrift: string
    setOverskrift: Dispatch<SetStateAction<string>>
}

// Create a default context (can be overwritten by provider)

export const CurrentSite = createContext<ICurrentSite>({
    overskrift: "HOME",
    setOverskrift: () => {},
});


export const HeaderSection: React.FC = () => {


    const {setOverskrift} = useContext(CurrentSite)



    return (
        <>
                <div className="headerSection">
                    <div className="left">
                        <button onClick={() => setOverskrift("HOME")} style={{fontSize:"30px"}} className="Button">SMARTBOOKING</button>
                        {/* <h1>SMARTBOOKING</h1> */}
                    </div>
                    <div className="center" style={{ fontSize: "20px" }}>
                        <button onClick={() => setOverskrift("HOME")} className="Button">HOME</button>
                        <button onClick={() => setOverskrift("ABOUT")}className="Button">ABOUT</button>
                        <button onClick={() => setOverskrift("PRIZE")} className="Button">PRIZES</button>
                        <button onClick={() => setOverskrift("CONTACT")}className="Button">CONTACT</button>
                    </div>
                    <div className="right">
                        <button className="Button">LINK</button>
                    </div>
                </div>
                <div className='headline'>
                </div>

        </>
    )
}