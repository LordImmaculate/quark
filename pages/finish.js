import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout';
import { useSearchParams } from 'next/navigation'

export default function Finish() {
    const searchParams = useSearchParams();
    const results = searchParams.get('results');
    let quark = "";

    const frequencyMap = {};
    for (let i = 0; i < results.length; i++) {
        const number = results[i];
        if (frequencyMap[number] === undefined) {
            frequencyMap[number] = 1;
        } else {
            frequencyMap[number]++;
        }
    }

    let mostCommonNumber = null;
    let maxCount = 0;
    for (const number in frequencyMap) {
        if (frequencyMap[number] > maxCount) {
            mostCommonNumber = number;
            maxCount = frequencyMap[number];
        }
    }



    console.log(`The most common number is ${mostCommonNumber} with ${maxCount} occurrences.`);

    if (mostCommonNumber === "0") quark = "an Up Quark";
    if (mostCommonNumber === "1") quark = "a Down Quark";
    if (mostCommonNumber === "2") quark = "a Strange Quark";
    if (mostCommonNumber === "3") quark = "a Charm Quark";
    if (mostCommonNumber === "4") quark = "a Top Quark";
    if (mostCommonNumber === "5") quark = "a Bottom Quark";


        return (
            <Layout>
                <Head>
                    <title>Finish</title>
                </Head>
                <h1>Finish</h1>
                <h2>Results:</h2>
                <h2>You are {quark}!</h2>


            </Layout>
        );
    };