'use client'
import { useState } from "react";
export default function Counter () {

const [counter, setCounter] = useState(10)

const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCounter(counter + 1);
}

const handleSubmit2 = (e: React.FormEvent) => {
    e.preventDefault();
    setCounter(counter - 1);
}

    return (
    <main className="flex flex-col min-h-[calc(100vh-73px)] items-center justify-center">
        <h1 className="text-4xl font bold text-gray-800">{counter}</h1>
        <button className="mt-4 px-4 py-2 border border-black transition-all duration-300 hover:bg-black hover:text-white">
          Click me
        </button>
        <form onSubmit={handleSubmit}>
            <input type="text" />
            <button type="submit">Submit</button>
        </form>
        <form onSubmit={handleSubmit2}>
            <input type="text" />
            <button type="submit">Submit</button>
        </form>



    </main>


    )}