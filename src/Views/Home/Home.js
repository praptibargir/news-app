import React, { useEffect, useState } from 'react'
import "./Home.css"
import axios from 'axios'
import NewsArticle from '../../Components/NewsArticle/NewsArticle'

function Home() {
    const [news, setNews] =useState([])

    const loadNews = async () => {
        const response=await axios.get("https://newsapi.org/v2/everything?q=tesla&from=2024-06-27&sortBy=publishedAt&apiKey=6bbeaa9e30574d999a5df20b2ec7a7a9")
        setNews(response.data.articles)
    }

    useEffect(()=>{
        loadNews()
    },[])
  return (
    <div>
        <h1>News App</h1>
        {
            news.map((newsArticle,index)=>{
                const {author,title,description,url,urlToImage,publishedAt,content}=newsArticle
                return(
                    <NewsArticle 
                    author={author} 
                    title={title} 
                    description={description} 
                    url={url} 
                    urlToImage={urlToImage} 
                    publishedAt={publishedAt} 
                    content={content}
                    key={index}/>
                )
            })
        }
    </div>
  )
}

export default Home