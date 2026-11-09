import useReveal from '../hooks/useReveal';

const Cardlayout = (props) => {
  const portfolioData = props.datas
  const index = props.index || 0
  const [ref, isVisible] = useReveal()

  // 스킬을 배열로 변환하여 처리
  const skills = Array.isArray(portfolioData.skill)
    ? portfolioData.skill
    : portfolioData.skill ? portfolioData.skill.split(',').map(s => s.trim()) : [];

  return (
    <li
      ref={ref}
      className={`portfolio-card reveal ${isVisible ? 'reveal-visible' : ''}`}
      style={{ transitionDelay: `${Math.min(index * 80, 320)}ms` }}
    >
      <a href={portfolioData.url} alt={portfolioData.title} target={portfolioData.target}>
        <div className="portfolio-thumb">
          <img src={portfolioData.imgUrl} alt={portfolioData.title} />
        </div>
        <div className="portfolio-info">
          <div className="portfolio-title">{portfolioData.title}</div>
          <div className="portfolio-desc">{portfolioData.desc}</div>
          <div className="portfolio-skill">
            {skills.map((skill, index) => (
              <span key={index} className="skill-badge">{skill}</span>
            ))}
          </div>
          <div className="portfolio-date">{portfolioData.date}</div>
        </div>
      </a>
    </li>
  );
};

export default Cardlayout;