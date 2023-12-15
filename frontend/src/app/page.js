"use client";
import React, { useState } from "react";

import NavBar from '../components/NavBar.jsx'
import Body from '../components/Body.jsx';
import Footer from '../components/Footer.jsx'

export default function Home() {

  const [searchTerm, setSearchTerm] = useState('');

  return (
    <main className='w-full h-screen bg-gray-100'>
      <NavBar searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
      <Body/>
      {/* <div  className="px-8 py-4 h-4/5">
                <h1 className="text-3xl font-bold text-indigo-700">Hello, Tailwind CSS!</h1>
                <div className='flex flex-wrap gap-1'>
                    <div>Hello</div>
                    <div>I</div>
                    <div>Am</div>
                    <div>Vineet</div>
                    <div>{searchTerm}</div>
                </div>
            </div> */}
      <Footer />
    </main>
  )
}
