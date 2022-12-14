import React, { useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import axios from 'axios'
import { NewsState } from './context/NewsProvider'
import NewsContent from './components/NewsContent/NewsContent'

import Footer from './components/Footer/Footer'

const App: React.FC = () => {
  const {
    category,
    setNews,
    setTotalResults,
    totalResults,
    loadMore,
    setLoading,
  } = NewsState()

  const fetchNews = async () => {
    try {
      const proxyUrl = 'https://cors-anywhere.herokuapp.com/'

      const { data } = await axios.get(
        `${proxyUrl}https://newsapi.org/v2/top-headlines?apiKey=${process.env.REACT_APP_API_KEY}&category=${category}&pageSize=${loadMore}`
      )

      setNews(data.articles)
      setTotalResults(data.totalResults)
      setLoading(false)
    } catch (error: any) {
      console.log(error.response)
    }
  }

  useEffect(() => {
    fetchNews()
    // eslint-disable-next-line
  }, [category, totalResults, loadMore])

  return (
    <div className='App'>
      <Navbar />
      <NewsContent />
      <Footer />
    </div>
  )
}

export default App
