import Cardlayout from "./Cardlayout"

const Portfoliolist = (props) => {
  const portfolioData = props.datas
  return (
    <div className="portfolio-wrap">
      <ul className="project-feature-list">
        {portfolioData.map((data, index) => (
          <Cardlayout key={index} datas={data} index={index} />
        ))}
      </ul>
    </div>
  )
}

export default Portfoliolist