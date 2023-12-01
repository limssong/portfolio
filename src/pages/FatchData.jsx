import { useState, useEffect } from "react"
import axios from 'axios'
import Portfoliolist from "./Portfoliolist"

const FetchData = () => {
  let [portfolioData, setPortfolioData] = useState([])
  const searchData = async() => {
    const url = "https://limssong.github.io/images/json/portfolio.json"
    axios.get(url).then((response) => {
      let fetchData = response.data.myPortfolio
      setPortfolioData(fetchData)
    }).catch((error) => {
      alert("Error:" + error)
    })
  }
  useEffect(()=>{
    searchData()
  })
  
  return(
    <div>
      <Portfoliolist datas={portfolioData}></Portfoliolist>
    </div>
  )
}

export default FetchData