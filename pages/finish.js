import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout';
import { useSearchParams } from 'next/navigation'

export default function Finish() {
    const searchParams = useSearchParams()
    const answer1 = searchParams.get('answer1')
    const answer2 = searchParams.get('answer2')
    const answer3 = searchParams.get('answer3')
    const answer4 = searchParams.get('answer4')
    const answer5 = searchParams.get('answer5')
    const answer6 = searchParams.get('answer6')
    const answer7 = searchParams.get('answer7')
    const answer8 = searchParams.get('answer8')
    const answer9 = searchParams.get('answer9')
    const answer10 = searchParams.get('answer10')
    const array = [answer1, answer2, answer3, answer4, answer5, answer6, answer7, answer8, answer9, answer10];

    const frequencyMap = {};
    let maxCount = 0;
    let mostCommonNumber;
    let quark = "";

    array.forEach(num => {
        frequencyMap[num] = (frequencyMap[num] || 0) + 1;
        if (frequencyMap[num] > maxCount) {
            maxCount = frequencyMap[num];
            mostCommonNumber = num;
        }
    });

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