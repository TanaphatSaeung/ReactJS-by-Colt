import './Button.css'

export default function Button({clickFunc, buttonName='Click Meqa '}) {
    return <button onClick={clickFunc} className='Button'>{buttonName}</button>
}