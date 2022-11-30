import React from "react";


const Square = (props) => {
    const { propVar, squares, setSquares, player, setPlayer, squareValue, index } = props

    const clickHandler = (e) => {
        if (!squareValue) {
            if (player) {
                squares.splice(props.index, 1, 'X')
                setSquares(squares)
                setPlayer(!player)
            } else {
                squares.splice(index, 1, 'O')
                setSquares(squares)
                setPlayer(!player)
            }
        } 
    }

    return (
        <div className="square" onClick={clickHandler}>
            {squareValue === "O" ? <img alt="O" src="https://cdn.discordapp.com/attachments/830137099042816080/984895322184634448/devcircle_1.png" /> : squareValue}
            {propVar}
        </div>
    )
}


export default Square