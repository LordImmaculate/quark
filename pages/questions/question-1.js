import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '../../components/layout';
import RadioSelector from '../../components/RadioSelector';

export default function Question1() {
  const questions = ['test1', 'test2', 'test3', 'test4'];
  let choice = "";

  const handleSelectionChange = (selectedOption) => {
    setChoice(selectedOption);
  };

  return (
    <Layout>
      <Head>
        <title>Question 1</title>
      </Head>
      <h1>Question 1</h1>
      <RadioSelector options={questions} onChange={handleSelectionChange} nextpage={2} />
      
    </Layout>
  );
}