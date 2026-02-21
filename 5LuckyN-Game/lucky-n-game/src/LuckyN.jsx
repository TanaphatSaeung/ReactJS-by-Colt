import { useState } from "react";
import {getRolls } from './utils'
import Dice from './Dice'
import Button from './Button'


export default function LuckyN({title='Dice Game', numDice=2, winCheck }) {
    const [dice,setDice] = useState(getRolls(numDice))
    const won = winCheck(dice)

    function roll() {
        setDice(getRolls(2))
    }

    return (
        <main>
            <h1>{title} {won && 'You won!'} </h1>
            <Dice dice={dice} />
            <Button clickFunc={roll} buttonName='Roll Again' />
        </main>
    )

}