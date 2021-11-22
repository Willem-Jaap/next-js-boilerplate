import React from 'react';
import Head from 'next/head';

import Component from '@components/Component';

const Home= () => {
    return (
        <>
            <Head>
                <title>Next.js Boilerplate</title>
            </Head>
            <Component />
        </>
    );
};

export default Home;
