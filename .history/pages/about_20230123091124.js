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

