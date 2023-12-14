import React, { useState } from "react";
import NavBar from "./Components/NavBar"
import Footer from "./Components/Footer";

function App() {
    const [searchTerm, setSearchTerm] = useState('');

    return (
        <div className="w-full h-screen bg-gray-100">
            <NavBar/>
            <div className="px-8 py-4 h-4/5">
                <h1 className="text-3xl font-bold text-indigo-700">Hello, Tailwind CSS!</h1>
                <div className='flex flex-wrap gap-1'>
                    <div>Hello</div>
                    <div>I</div>
                    <div>Am</div>
                    <div>Vineet</div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default App;
