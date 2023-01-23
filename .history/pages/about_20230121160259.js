import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import data from '../data/characters.json'
import { useState } from 'react'
import Card from '../components/Card'
import Link from 'next/link'
import { IMAGES_MANIFEST } from 'next/dist/shared/lib/constants'

const inter = Inter({ subsets: ['latin'] })

export default function about() {

    const [ character, setCharacter ] = useState ([...data])
    console.log(data);
    
    return (
        <>
            <Head>
            <title>About </title>
            <meta name="description" content="Generated by create next app" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>
                <div className={styles.description}>
                    <p>
                    <Link href='/'>Back to Home</Link>
                    </p>
                    <div>
                    
                        <a
                            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            By{' Daniella '}
                            <Image
                            src="/vercel.svg"
                            alt="Vercel Logo"
                            className={styles.vercelLogo}
                            width={100}
                            height={24}
                            priority
                            />
                        </a>
                    </div>
                
                    <div className={styles.center}>
                        <h1>Meet the San Rio Characters (some)</h1>
                    </div>
                        
                    <div className={styles.grid}><div>
                    <div className={styles.character}>
                        {character && character.map((character,index) => {
                            return (
                                <characterCard 
                                key={index} name={character.name} type={character.type} 
                                gender={character.gender}
                                /> 
                            )
                        })}
                    </div>

                </div>
            </main>
        </>
    )
}
  