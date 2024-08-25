import PlayerCard from "./PlayerCard.jsx"


const CardContainer = ({dataA}) => {
    // console.log(data);
    return (
        <div className="playerList">
            {
                dataA.map((item,i) => {
                return    <PlayerCard key={item.name} {...item}/>
                })
            }
        </div>
        
    )
}

export default CardContainer