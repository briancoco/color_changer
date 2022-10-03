import React from 'react'
import {useState} from 'react';
import ColorInput from './ColorInput';
const Content = () => {
    const [color, setColor] = useState('');
    const [hexValue, setHexValue] = useState('')
    const [isDarkText, setIsDarkText] = useState(true)
  return (
    <div className='Content'>
        <div 
        className='colorBox'
        style={{
            backgroundColor: color,
            color: isDarkText ? "#000" : "#FFF"
        }}
        >
            <p>{color.length ? color : "Empty Value"}</p>
            <p>{hexValue ? hexValue : null}</p>
        </div>

        <ColorInput 
            color={color}
            setColor={setColor}
            setHexValue={setHexValue}
            isDarkText={isDarkText}
            setIsDarkText={setIsDarkText}
        />
    </div>
    
  )
}

export default Content