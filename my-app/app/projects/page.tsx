import React from 'react'
import Link from 'next/link'
import Particles from '@/components/magicui/particles'

const ProjectsPage = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <Particles
        className="absolute inset-0 z-0"
        quantity={100}
        staticity={50}
        color="#4B0082"
      />
      <div className="relative z-10 container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-6 text-white">My Projects</h1>
        <p className="mb-4 text-white">Here are some of my projects:</p>
        {/* Add your projects list or grid here */}
        <div className="mt-8">
          <Link href="/" className="text-blue-300 hover:underline">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ProjectsPage