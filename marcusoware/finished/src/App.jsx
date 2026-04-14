import { useEffect, useState } from "react"
import ArticleCard from "./components/articlecard"

function App() {

    const[articles, setArticles] = useState([])

    // sets and update the articles 
    const getdata = async() => {
      try{

        const data = await  fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=cb5c420ecde044609ce640ed79da96a5").then(
          res => res.json()
        )
        setArticles(data['articles'])
      }catch(e) {
        console.log()
      }
      }

    useEffect(() => {
        getdata()
    },[])


  return (
    <div className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 items-start p-4 gap-4 ">
                {
                  articles.map((item,index) => {
                      return(
                        <div key={index}>
                            <ArticleCard key={item.id} {...item}/>
                        </div>
                      )
                  })
                }
            </div>    
    </div>
  )
}

export default App
