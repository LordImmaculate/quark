import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '../../components/layout';
import RadioSelector from '../../components/RadioSelector';

export default function Question1() {
  const questions = ['test1', 'test2', 'test3', 'test4'];

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
      <h1>Question 1</h1>
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