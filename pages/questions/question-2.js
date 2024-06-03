import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '../../components/layout';
import RadioSelector from '../../components/RadioSelector';
import { useSearchParams } from 'next/navigation'

export default function Question2() {
  const questions = ["Competitive sports or games",
  "Puzzles and brain teasers",
  "Creative arts or crafts",
  "Reading or quiet hobbies",
  "Socializing with friends",
  "Solo adventures or exploring new places"];
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
      <h1>What is your favorite type of activity?</h1>
      <RadioSelector options={questions} onOptionChange={handleOptionChange} />
      <br />
      <Link
        href={{
          pathname: '/questions/question-3',
          query: {
            answer1: answer1,
            answer2: selectedOption
          }
        }}
        style={{ position: 'relative', top: '-10px', visibility: selectedOption === "" ? 'hidden' : 'visible' }}
      >
        Next Question
      </Link>

    </Layout>
  );
}