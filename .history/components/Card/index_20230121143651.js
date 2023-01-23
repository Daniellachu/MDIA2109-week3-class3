export default function Card ({
    degree = "none",
    colour = "purple",
    font = "0",
    image = "icon/personThree.png"
}){
    return (
        <div style={{backgroundColor: colour, fontSize: font, }}>
            {
                colour === "black" ? <img src={'icon/personThree.png'} width="50"/> : 
                colour === "" ? <img src={'icon/personT.png'} width="50"></img> :
                                    <img src={image} width="50"></img>
            }
            {degree}
        </div>

    )
}