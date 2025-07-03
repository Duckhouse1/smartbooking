

export interface ICardProps{
    Title:string,
    Description: string
}


export const Card: React.FC<ICardProps> = ({Title,Description}) => {
    return(
        <div style={{backgroundColor: "gray" , borderRadius:"5px", marginLeft: "10%"}}>
            <h1>{Title}</h1>
            <p>{Description}</p>
        </div>
    )
}