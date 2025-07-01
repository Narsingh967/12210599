import "./App.css";
import React, { useState } from "react";
import axios from "axios";

function App() {
  const [originalUrl, setOriginalUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');

  const handleSubmit = () => {
    axios.post('http://localhost:3000/api/short', { originalUrl })
      .then((res) => {
        setShortUrl(res.data.url.shortUrl); // Store shortened URL
        setOriginalUrl(''); // Clear input box
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className='w-full min-h-screen bg-gradient-to-t from-black to-[#020239] flex flex-col justify-center items-center px-4 py-10'>

      <h1 className='text-white text-3xl sm:text-3xl md:text-4xl lg:text-5xl text-center font-semibold mb-15'>
        <span className='text-yellow-400'>URL Shortner</span>
      </h1>

      <input
        type="text"
        placeholder='Paste URL  ....'
        required
        className='w-full max-w-[400px] h-12 sm:h-14 outline-none border border-white bg-transparent text-white placeholder-gray-300 rounded-full px-4 text-base sm:text-lg mb-6'
        value={originalUrl}
        onChange={(e) => setOriginalUrl(e.target.value)}
      />

      <button
        className='w-full max-w-[150px] h-10 bg-yellow-300 rounded-full font-semibold cursor-pointer hover:border-4 hover:shadow-lg hover:shadow-blue-500 hover:border-white transition-all duration-200 mb-4'
        onClick={handleSubmit}
      >
        Go
      </button>

      {shortUrl && (
        <div className="text-white mt-4 text-lg">
          Shortened URL: <a href={shortUrl} className="text-yellow-300 underline" target="_blank" rel="noopener noreferrer">{shortUrl}</a>
        </div>
      )}

    </div>
  )
}

export default App;
