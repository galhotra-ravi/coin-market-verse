import React from 'react'
import { Link } from 'react-router-dom';

function About() {
  return (
    <div className='text-white h-[calc(100vh_-_170px)] py-10 w-full flex items-center justify-center max-sm:h-fit '>
      
      <p className='w-8/12 text-2xl text-center max-sm:text-xl'>
      Welcome to <span className='font-semibold hover:scale-110 transition-all ease-in-out duration-50'>Coin Market Verse</span>, a project created by <Link to={'https://github.com/galhotra-ravi'} target="_blank"> <span className='border-b-2 hover:border-b-[#5a38fd] hover:text-[#5a38fd] transition-all ease-in-out duration-150'> <i>Ravi Kumar</i></span></Link> to provide real-time cryptocurrency data to users worldwide. With the ever-changing nature of the crypto market, staying updated is crucial. That’s why Coin Market Verse, powered by the trusted CoinGecko API, delivers up-to-the-minute prices, trends, and market analysis of popular cryptocurrencies like Bitcoin, Ethereum, and many more.
      </p>
    </div>
  )
}

export default About