import { useState } from 'react';

export default function RadioSelector({ options, onOptionChange }) {
    const [selectedOption, setSelectedOption] = useState("");
    const [selectedIndex, setSelectedIndex] = useState("");
    console.log(selectedIndex);

    //Stuur code door naar parent
    const handleChange = (event) => {
        setSelectedOption(event.target.value);
        onOptionChange(options.indexOf(event.target.value));
    }

    return (
        <div>
            {options.map((option, index) => (
                <div key={index}>
                    <label style={{ border: '1px solid black', padding: '5px', display: 'block', margin: '5px', color: selectedOption === option ? 'black' : 'white', backgroundColor: selectedOption === option ? 'white' : 'black', borderRadius: '200px' }}>
                        <input type="radio" value={option} checked={selectedIndex === index} onChange={handleChange} style={{ appearance: 'none', position: 'absolute' }} />
                        {index + 1}. {option}
                    </label>
                </div>
            ))}
        </div>
    );
}