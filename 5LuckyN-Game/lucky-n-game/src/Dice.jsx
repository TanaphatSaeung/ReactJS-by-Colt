import Die from './Die'
import './Die.css'
import './Dice.css'

export default function Dice({ dice, color }) {
    console.log(color);
    
    return (
        <section className="Dice">
            {dice.map((v,i)=>(
                <Die key={i} val={v} color={color} />
            ))}
        </section>
    )
}