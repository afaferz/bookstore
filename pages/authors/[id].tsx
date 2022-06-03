import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { detailAsync, selectAuthor } from '../../features/authors/authorSlice';

const AuthorId: NextPage = () => {
    const router = useRouter();
    const { id } = router.query;
    const dispatch = useAppDispatch();
    const author = useAppSelector(selectAuthor);

    React.useEffect(() => {
        const authorId = Number(id);
        if (authorId) dispatch(detailAsync(authorId));
    }, [id]);

    return (
        <div>
            <Head>
                <title>Bookstore | Authors</title>
                <meta name="description" content="Bookstore | Authors" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <p>AuthorId: {id}</p>
            <p>{author.name}</p>
        </div>
    );
};

export default AuthorId;
