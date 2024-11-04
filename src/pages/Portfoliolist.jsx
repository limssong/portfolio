import Cardlayout from "./Cardlayout"

const Portfoliolist = (props) => {
  const portfolioData = props.datas
  return (
    <div class="portfolio-wrap">
      <ul>
        {portfolioData && portfolioData.map((data, index) => (
          <Cardlayout key={index} datas={data} />
        ))}
      </ul>
    </div>
  )
}

export default Portfoliolist