import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { useRouter } from 'next/router';

const AuthorId: NextPage = () => {
    const router = useRouter();
    const { id } = router.query;
    console.log(router);

    return (
        <div>
            <Head>
                <title>Bookstore | Authors</title>
                <meta name="description" content="Bookstore | Authors" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <p>AuthorId: {id}</p>;
        </div>
    );
};

export default AuthorId;
