"use client"
import Head from "next/head";
import { useState } from "react";
import { useEffect } from 'react'

export const Wrapper = () => {
    const [og_url, setog_url] = useState("")

    useEffect(() => {
        setog_url(window.location.href)
    }, [])

    return (
        <>
            <Head>
                <meta property="og:url" content={og_url ? og_url : "https://www.explorem.net/"} />
            </Head>
          
        </>
    )}