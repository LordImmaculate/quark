import RadioSelector from "../components/RadioSelector";
import { useState } from 'react';
import Layout, { siteTitle } from '../components/layout';
import { useRouter } from 'next/router'
import Head from 'next/head'
import { questions } from '../pages/questions.js'
import Link from "next/link.js";

let question = 0;
let answerArray = "";

export default function QuestionMain() {
    const router = useRouter()
    let [selectedOption, setSelectedOption] = useState("");
    const handleOptionChange = (newOption) => {
        setSelectedOption(newOption);
    }

    const NextQuestion = () => {

            question = question + 1;
        handleRefresh();

    }

    function handleRefresh() {
        answerArray = answerArray + selectedOption;
        console.log(answerArray);
        setSelectedOption("");
        // Get the current pathname and query parameters
        const { pathname, query } = router

        // Replace the current route with the same pathname and query parameters
        router.replace({ pathname, query }, undefined, { shallow: true })
    }


    let title = questions[question].question;
    return (
        <Layout>
            <Head>
                <title>Question {question + 1}</title>
            </Head>
            <h1>{title}</h1>
            <div style={{ margin: 'auto' }}>
                <RadioSelector options={questions[question].answers} onOptionChange={handleOptionChange} />
            </div>
            <button onClick={NextQuestion} style={{display: question !== 9 && selectedOption !== "" ? 'inline' : 'none'}}>Next Question</button>
            <Link href={{ pathname: '/finish', query: { results: answerArray } }} style={{display: question === 9 && selectedOption !== "" ? 'inline' : 'none'}}>Finish</Link>
        </Layout>
    );
}