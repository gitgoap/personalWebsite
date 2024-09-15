import React from 'react'
import RetroGrid from '@/components/magicui/retro-grid'
import HyperText from '@/components/magicui/hyper-text'
import ShinyButton from '@/components/magicui/shiny-button'
import Link from 'next/link'

const IndexPage = () => {
  return (
    <div className="relative h-screen overflow-hidden">
      <RetroGrid className="z-0" />
      <div className="relative z-10 flex flex-col justify-center items-center h-full">
        <HyperText 
          text="AMAN PRAKASH"
          className="text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-b from-blue-500 to-purple-500"
          duration={1500}
          animateOnLoad={true}
        />
        <Link href="/projects">
          <ShinyButton text="ABOUT ME" className="mt-6" />
        </Link>
        <Link href="https://github.com/gitgoap/">
          <ShinyButton text="GITHUB" className="mt-4" />
        </Link>
      </div>
    </div>
  )
}

export default IndexPage