import React, { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import axios from 'axios'
import { NewsState } from './context/NewsProvider'
import NewsContent from './components/NewsContent/NewsContent'
import apiKey from './data/config'
import Footer from './components/Footer/Footer'

const App: React.FC = () => {
  const { category, setNews, news, setTotalResults, totalResults } = NewsState()

  const [result, setResult] = useState<News[]>([])

  const fetchNews = async () => {
    try {
      const { data } = await axios.get(
        `https://newsapi.org/v2/top-headlines?apiKey=${apiKey}&category=${category}`
      )

      setNews(data.articles)
      setTotalResults(data.totalResults)
      console.log(news)
    } catch (error: any) {
      console.log(error.response)
    }
  }

  useEffect(() => {
    fetchNews()
  }, [category, totalResults])

  return (
    <div className='App'>
      <Navbar />
      <NewsContent />
      <Footer />
    </div>
  )
}

export default App
