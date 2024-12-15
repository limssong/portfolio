const Cardlayout = (props) => {
  const portfolioData = props.datas
  return (
    <li class="portfolio-card">
      <a href={portfolioData.url} alt={portfolioData.title} target={portfolioData.target}>
        <div class="portfolio-thumb"><img src={portfolioData.imgUrl} alt={portfolioData.title} /></div>
        
      </a>
    </li>
  )
}

export default Cardlayout