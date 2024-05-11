'use client'
import Head from "next/head";
import { useEffect, useState } from 'react'

export const Wrapper = (props) => {
    const [og_url, setog_url] = useState("")

    useEffect(() => {
        setog_url(window.location.href)
    }, [])
    return (
        <>
            <Head>

                <meta property="og:url" content={og_url ? og_url : "https://www.explorem.net"} />

            </Head>
            {props.children}
        </>
    )
}