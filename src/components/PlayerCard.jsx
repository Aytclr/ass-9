
import "./Player.scss"
import React from 'react'

const PlayerCard = ({name,img}) => {
    // console.log(name);
  return (
    <div className="playerCont">
        <img src={img} alt="" />
        <div className="playerName">
            <h2>{name}</h2>
        </div>
    </div>
  )
}

export default PlayerCard