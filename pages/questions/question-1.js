import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '../../components/layout';
import RadioSelector from '../../components/RadioSelector';

export default function Question1() {
  const questions = ["I tackle them head-on with confidence.",
  "I carefully analyze and plan my approach.",
  "I look for unconventional solutions.",
  "I prefer to avoid them if possible.",
  "I take them on with a lot of energy.",
  "I deal with them quietly and methodically."];

  //Code ontvangst voorbereiden
  const [selectedOption, setSelectedOption] = useState("");

  //Code ontvangst
  const handleOptionChange = (newOption) => {
    setSelectedOption(newOption);
  }

  return (
    <Layout>
      <Head>
        <title>Question 1</title>
      </Head>
      <h1>How do you usually approach challenges?</h1>
      <RadioSelector options={questions} onOptionChange={handleOptionChange} />
      <br />
      <Link
        href={{
          pathname: '/questions/question-2',
          query: {
            answer1: selectedOption
          }
        }}
        style={{ position: 'relative', top: '-10px', visibility: selectedOption === "" ? 'hidden' : 'visible' }}
      >
        Next Question
      </Link>

    </Layout>
  );
}