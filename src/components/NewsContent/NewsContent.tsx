import { LoadingButton } from '@mui/lab'
import { Container } from '@mui/material'
import React from 'react'
import { NewsState } from '../../context/NewsProvider'
import NewsCard from '../NewsCard/NewsCard'
import './NewsContent.css'
import LoopIcon from '@mui/icons-material/Loop'

const NewsContent: React.FC = () => {
  const { news, loadMore, setLoadMore, totalResults, setLoading, loading } =
    NewsState()

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

        {loadMore <= totalResults && (
          <React.Fragment>
            <hr />

            <LoadingButton
              className='loadmore'
              size='small'
              onClick={() => {
                setLoading(true)
                setLoadMore(loadMore + 20)
              }}
              loading={loading}
              loadingIndicator='Loading…'
            >
              Load More <LoopIcon />
            </LoadingButton>
          </React.Fragment>
        )}
      </div>
    </Container>
  )
}

export default NewsContent
