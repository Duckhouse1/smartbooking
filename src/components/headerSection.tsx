import { createContext, Dispatch, SetStateAction, useContext} from "react"

export interface ICurrentSite {
    overskrift: string
    setOverskrift: Dispatch<SetStateAction<string>>
}

// Create a default context (can be overwritten by provider)

export const CurrentSite = createContext<ICurrentSite>({
    overskrift: "Home",
    setOverskrift: () => {},
});


export const HeaderSection: React.FC = () => {


    const {setOverskrift} = useContext(CurrentSite)



    return (
        <>
                <div className="headerSection">
                    <div className="left">
                        <h1>SMARTBOOKING</h1>
                    </div>
                    <div className="center" style={{ fontSize: "20px" }}>
                        <button onClick={() => setOverskrift("Home")} className="Button">HOME</button>
                        <p className="Button">ABOUT</p>
                        <button onClick={() => setOverskrift("Prize")} className="Button">PRIZES</button>
                        <p className="Button">CONTACT</p>
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