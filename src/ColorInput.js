import React from 'react'
import colorNames from 'colornames';
const ColorInput = ({color, setColor, setHexValue, isDarkText, setIsDarkText
}) => {
  return (
    <form className='colorInput' onSubmit={(e) => e.preventDefault}>
            <label htmlFor='addColor'></label>
            <input 
                id="addColor"
                type="text"
                placeholder="Add Color Name"
                value={color}
                onChange={(e) => {
                    setColor(e.target.value);
                    setHexValue(colorNames(e.target.value));
                }}
    />
    <button
        type="button"
        onClick={() => setIsDarkText(!isDarkText)}
    >
        Toggle Text Color
    </button>
    </form>
  )
}

export default ColorInput