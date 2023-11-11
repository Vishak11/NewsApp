import { useEffect, useState } from "react"
import Newsitem from "./Newsitem"

const Newsboard=({category})=>{
    const [article,setArticle]=useState([])
    let url=`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=4ceaf15631b048c0a9e266af94ad878f`
    useEffect(()=>{
        fetch(url).then(response=>response.json()).then(data=>setArticle(data.articles))
        
    },[category])

    return(
        <div>
            <h2 className="text-center">Latest <span className="badge bg-danger text-light fs-4 ">News</span></h2>
            {article.map((news,index)=>(
                <Newsitem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url}/>
            ))}
        </div>
    )
}
export default Newsboard