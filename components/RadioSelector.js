import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const RadioSelector = ({ options, nextpage }) => {
    const [selectedOption, setSelectedOption] = useState(options[0]);
    const router = useRouter();
    const answers = router.query;

    const handleChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const dataToSend = answers.toString() + selectedOption.toString();

    return (
        <div>
            {options.map((option, index) => (
                <div key={index}>
                    <input
                        type="radio"
                        id={option}
                        name="radioGroup"
                        value={option}
                        checked={selectedOption === option}
                        onChange={handleChange}
                    />
                    <label htmlFor={option}>{option}</label>
                </div>
            ))}

<div style={{ margin: '20px' }}>
    <Link
        href={{
            pathname: `/questions/question-${nextpage}`,
            query: { data: dataToSend },
        }}
    >
        Next
    </Link>
</div>
        </div>
    );
};

export default RadioSelector;
