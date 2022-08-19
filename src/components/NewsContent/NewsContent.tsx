import { Container } from '@mui/material'
import React from 'react'
import { NewsState } from '../../context/NewsProvider'
import NewsCard from '../NewsCard/NewsCard'
import './NewsContent.css'

const NewsContent: React.FC = () => {
  const { news } = NewsState()

  return (
    <Container maxWidth='md'>
      <div className='content'>
        <div className='downloadMessage'>
          <span className='downloadText'>
            For the best experience use Qlert app on your smartphone
          </span>
          <img src='appstore.png' alt='app store' height='80%' />
          <img src='playstore.png' alt='play store' height='80%' />
        </div>
        {news.map((newsItem: News) => (
          <NewsCard key={newsItem.title} newsItem={newsItem} />
        ))}
      </div>
    </Container>
  )
}

export default NewsContent
