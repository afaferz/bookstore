import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { useRouter } from 'next/router';

const NewAuthor: NextPage = () => {
    const router = useRouter();
    const { id } = router.query;
    console.log(router);

    return (
        <div>
            <Head>
                <title>Bookstore | New author</title>
                <meta name="description" content="Bookstore | New author" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <p>NewAuthor: {id}</p>;
        </div>
    );
};

export default NewAuthor;
