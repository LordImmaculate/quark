import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '../../components/layout';
import RadioSelector from '../../components/RadioSelector';
import { useSearchParams } from 'next/navigation'

export default function Question4() {
    const questions = ["Action-packed blockbusters",
        "Documentaries or intellectual films",
        "Quirky independent films",
        "Classics or dramas",
        "Thrillers or high-energy movies",
        "Comedies or light-hearted films"];
    const [selectedOption, setSelectedOption] = useState("");
    const searchParams = useSearchParams()
    const answer1 = searchParams.get('answer1')
    const answer2 = searchParams.get('answer2')
    const answer3 = searchParams.get('answer3')
    const answer4 = searchParams.get('answer4')
    const answer5 = searchParams.get('answer5')
    const answer6 = searchParams.get('answer6')
    console.log(answer1)
    console.log(answer2)
    console.log(answer3)
    console.log(answer4)
    console.log(answer5)
    console.log(answer6)

    const handleOptionChange = (newOption) => {
        setSelectedOption(newOption);
    }

    return (
        <Layout>
            <Head>
                <title>Question 2</title>
            </Head>
            <h1>What kind of movies do you enjoy the most?</h1>
            <RadioSelector options={questions} onOptionChange={handleOptionChange} />
            <br />
            <Link
                href={{
                    pathname: '/questions/question-8',
                    query: {
                        answer1: answer1,
                        answer2: answer2,
                        answer3: answer3,
                        answer4: answer4,
                        answer5: answer5,
                        answer6: answer6,
                        answer7: selectedOption
                    }
                }}
                style={{ position: 'relative', top: '-10px', visibility: selectedOption === "" ? 'hidden' : 'visible' }}
            >
                Next Question
            </Link>

        </Layout>
    );
}