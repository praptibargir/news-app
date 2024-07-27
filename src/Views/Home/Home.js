import React, { useEffect, useState } from 'react'
import "./Home.css"
import axios from 'axios'
import NewsArticle from '../../Components/NewsArticle/NewsArticle'

function Home() {
    const [news, setNews] =useState([])
    const [searchQuery, setSearchQuery] = useState("pune")

    const loadNews = async () => {
        try{
            const response=await axios.get(`https://newsapi.org/v2/everything?q=${searchQuery}&nature&from=2024-06-27&sortBy=publishedAt&apiKey=6bbeaa9e30574d999a5df20b2ec7a7a9`)
            setNews(response.data.articles)
        }
        catch(error){
            console.log(error);
        }
    }

    useEffect(()=>{
        loadNews()
    },[])

    useEffect(()=>{
        loadNews();
    },[searchQuery])

  return (
    <div>
        <h1 className='main-title'>News App</h1>
        <input type='text'
            value={searchQuery}
            className='search-input'
            onChange={(e) =>setSearchQuery(e.target.value)}
        />
        <div className='news-container'>
        {
            news.map((newsArticle,index)=>{
                const {author,title,description,url,urlToImage,publishedAt}=newsArticle
                return(
                    <NewsArticle 
                    author={author} 
                    title={title} 
                    description={description} 
                    url={url} 
                    urlToImage={urlToImage} 
                    publishedAt={publishedAt} 
                    key={index}/>
                )
            })
        }
        </div>
    </div>
  )
}

export default Home