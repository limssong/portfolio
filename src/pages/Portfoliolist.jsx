import Cardlayout from "./Cardlayout"

const Portfoliolist = (props) => {
  const portfolioData = props.datas
  return (
    <div class="portfolio-wrap">
      <ul>
        {portfolioData.map(data => <Cardlayout datas={data}></Cardlayout>)}  
      </ul>
    </div>
  )
}

export default Portfoliolist