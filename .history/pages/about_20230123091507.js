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

export default function About() {

    const [ information, setInformation ] = useState ([...data])
    console.log(data);
    
    return (
      
      <>
        <Head>
          <title>About page</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={styles.main}>
          <div className={styles.description}>
            <p>
              <Link href='about'>Check me out</Link>
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
          </div>
  
          <div className={styles.center}>
            <Image
              className={styles.logo}
              src="/next.svg"
              alt="Next.js Logo"
              width={180}
              height={37}
              priority
            />
            <div className={styles.thirteen}>
              <Image
                src="/thirteen.svg"
                alt="13"
                width={40}
                height={31}
                priority
              />
            </div>
          </div>
  
          <div className={styles.grid}>
            <div className={styles.degreetitle}>Business Degrees</div>
            {information && information.map((info, index) => {
              if (info.department.toLowerCase() === "business"){
                return(
                  <Card key={index} degree={info.degree} colour="#ceb9fb" font="16px"/>
                ) 
              }
            })}
          </div>
          
          <div className={styles.grid}>
          <div className={styles.degreetitle} >Computing Degrees</div>
            {information && information.map((info, index) => {
                {
                return(
                    
                  <Card key={index} degree={info.degree} colour="#bfd0ad" font='16px'/>
                ) 
              }
            })}
          </div>
        </main>
      </>
    )
  }
  