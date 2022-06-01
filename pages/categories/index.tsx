import type { NextPage } from 'next';
import Head from 'next/head';

const AllAuthors: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Bookstore | Authors</title>
                <meta name="description" content="Bookstore | New author" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <p>AllAuthors</p>;
        </div>
    );
};

export default AllAuthors;
