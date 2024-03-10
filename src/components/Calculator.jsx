import { useState, useRef } from 'react'
import './Calculator.css'

export default function Calculator(){
    const [value, setValue] = useState('')
    
    const valueA = useRef(undefined)
    const valueB = useRef(undefined)
    let secondValue = useRef(false)
    let op       = useRef('')

    const updateValue = (e) => {
        const input = document.getElementById("calc-input")
        if(input.value){
            setValue(parseFloat(input.value))
            if(e !== undefined){
                e.target.value = value
            }
            if(!secondValue.current){
                valueA.current = value
            }
            else{
                valueB.current = value
            }
        }
        else{
            setValue('')
        }
    }

    const handleButtons = (e) => {
        e.target.className += " rise_short"
        const input = document.getElementById("calc-input");
        setValue(parseFloat(input.value))
        if(!secondValue.current){ valueA.current = value }
        else                    { valueB.current = value }
        
        switch(e.target.textContent){
            case 'C':
                setValue(0.0);
                valueA.current = undefined;
                valueB.current = undefined;
                secondValue.current = false
                break;
            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
                if(value == ''){
                    setValue(parseFloat(e.target.textContent))                    
                }
                else{
                    setValue(r => parseFloat((''+r)+ e.target.textContent))
                }
                if(!secondValue.current){ valueA.current = value }
                else                    { valueB.current = value }
                break;
            case '=':
                secondValue.current = false
                switch(op.current){ 
                    case '+':
                        setValue(valueA.current + valueB.current); break
                    case '-':
                        setValue(valueA.current - valueB.current); break
                    case '*':
                        setValue(valueA.current * valueB.current); break
                    case '/':
                        setValue(valueA.current / valueB.current); break
                }
                valueA.current = value
                input.value = value
                break;
            default:
                op.current = e.target.textContent;
                secondValue.current = true
                setValue('')
        }
    }   
    return (<>
            <div id="calc-box">
                <div id="result">
                    <input type="number" id="calc-input" value={value} step="0.001" onChange={updateValue}></input>
                </div>
                <div id="calc-grid">
                    <button className='calc-btn' onClick={handleButtons} onAnimationEnd={(e) => e.target.classList.remove('rise_short')}>C</button>
                    <button className='calc-btn' onClick={handleButtons} onAnimationEnd={(e) => e.target.classList.remove('rise_short')}>+</button>
                    <button className='calc-btn' onClick={handleButtons} onAnimationEnd={(e) => e.target.classList.remove('rise_short')}>-</button>
                    <button className='calc-btn' onClick={handleButtons} onAnimationEnd={(e) => e.target.classList.remove('rise_short')}>*</button>
                    <button className='calc-btn' onClick={handleButtons} onAnimationEnd={(e) => e.target.classList.remove('rise_short')}>1</button>
                    <button className='calc-btn' onClick={handleButtons} onAnimationEnd={(e) => e.target.classList.remove('rise_short')}>2</button>
                    <button className='calc-btn' onClick={handleButtons} onAnimationEnd={(e) => e.target.classList.remove('rise_short')}>3</button>
                    <button className='calc-btn' onClick={handleButtons} onAnimationEnd={(e) => e.target.classList.remove('rise_short')}>/</button>
                    <button className='calc-btn' onClick={handleButtons} onAnimationEnd={(e) => e.target.classList.remove('rise_short')}>4</button>
                    <button className='calc-btn' onClick={handleButtons} onAnimationEnd={(e) => e.target.classList.remove('rise_short')}>5</button>
                    <button className='calc-btn' onClick={handleButtons} onAnimationEnd={(e) => e.target.classList.remove('rise_short')}>6</button>
                    <button className='calc-btn' onClick={handleButtons} onAnimationEnd={(e) => e.target.classList.remove('rise_short')}>=</button>
                    <button className='calc-btn' onClick={handleButtons} onAnimationEnd={(e) => e.target.classList.remove('rise_short')}>7</button>
                    <button className='calc-btn' onClick={handleButtons} onAnimationEnd={(e) => e.target.classList.remove('rise_short')}>8</button>
                    <button className='calc-btn' onClick={handleButtons} onAnimationEnd={(e) => e.target.classList.remove('rise_short')}>9</button>
                    <button className='calc-btn' onClick={handleButtons} onAnimationEnd={(e) => e.target.classList.remove('rise_short')}>0</button>
                </div>
            </div>
            </>)
}