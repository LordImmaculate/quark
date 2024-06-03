import { useState } from 'react';

export default function RadioSelector({ options, onOptionChange }) {
    const [selectedOption, setSelectedOption] = useState("");

    const handleChange = (event) => {
        setSelectedOption(event.target.value);
        onOptionChange(event.target.value);
    }

    return (
        <div>
            {options.map((option, index) => (
                <div key={index}>
                    <label style={{ border: '1px solid gray', padding: '5px', display: 'block', margin: '5px', color: selectedOption === option ? 'black' : 'white', backgroundColor: selectedOption === option ? 'white' : 'gray', borderRadius: '200px' }}>
                        <input type="radio" value={option} checked={selectedOption === option} onChange={handleChange} style={{ appearance: 'none', position: 'absolute' }} />
                        {option}
                    </label>
                </div>
            ))}
        </div>
    );
}