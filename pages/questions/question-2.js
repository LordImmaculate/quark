import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '../../components/layout';
import RadioSelector from '../../components/RadioSelector';
import { useSearchParams } from 'next/navigation'

export default function Question1() {
  const questions = ['test1', 'test2', 'test3', 'test4'];
  const [selectedOption, setSelectedOption] = useState("");
  const searchParams = useSearchParams()
  const answer1 = searchParams.get('answer1')
  console.log(answer1)

  const handleOptionChange = (newOption) => {
    setSelectedOption(newOption);
  }

  return (
    <Layout>
      <Head>
        <title>Question 2</title>
      </Head>
      <h1>Question 2</h1>
      <RadioSelector options={questions} onOptionChange={handleOptionChange}/>
      <br />
      <Link
        href={{
          pathname: '/questions/question-3',
          query: {
            answer1: answer1,
            answer2: selectedOption
          }
        }}
        style={{position: 'relative', top: '-10px', visibility: selectedOption === "" ? 'hidden' : 'visible'}}
      >
        Next Question
      </Link>
      
    </Layout>
  );
}