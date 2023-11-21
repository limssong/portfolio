const Cardlayout = (props) => {
  const portfolioData = props
  return (
    <div class="portfolio-card">
      <div class="portfolio-img"><img src="" alt="대표이미지" /></div>
      <div class="portfolio-tit">{portfolioData.title}</div>
      <div class="portfolio-cont">{portfolioData.desc}</div>
    </div>
  )
}

export default Cardlayout