import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '../../components/layout';
import RadioSelector from '../../components/RadioSelector';

export default function Question2() {
  const questions = ['page2test1', 'test2', 'test3'];
  let choice = "";

  const handleSelectionChange = (selectedOption) => {
    setChoice(selectedOption);
  };

  return (
    <Layout>
      <Head>
        <title>Question 2</title>
      </Head>
      <h1>Question 2</h1>
      <RadioSelector options={questions} onChange={handleSelectionChange} nextpage={3} />
      
    </Layout>
  );
}