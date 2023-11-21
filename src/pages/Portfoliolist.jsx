import Cardlayout from "./Cardlayout"

const Portfoliolist = (props) => {
  const portfolioData = props
  return (
    <div class="portfolio-wrap">
      <Cardlayout portfolioData={portfolioData}></Cardlayout>
    </div>
  )
}

export default Portfoliolist