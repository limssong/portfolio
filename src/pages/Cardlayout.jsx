import useReveal from '../hooks/useReveal'

const Cardlayout = (props) => {
  const portfolioData = props.datas
  const index = props.index || 0
  const [headerRef, headerVisible] = useReveal()
  const [visualRef, visualVisible] = useReveal()

  // 스킬을 배열로 변환하여 처리
  const skills = Array.isArray(portfolioData.skill)
    ? portfolioData.skill
    : portfolioData.skill ? portfolioData.skill.split(',').map(s => s.trim()) : [];

  const order = String(index + 1).padStart(2, '0')

  return (
    <li className="project-feature">
      <div
        ref={headerRef}
        className={`project-feature-header reveal ${headerVisible ? 'reveal-visible' : ''}`}
      >
        <span className="project-feature-index">{order}</span>
        <h3 className="project-feature-title">{portfolioData.title}</h3>
        <p className="project-feature-desc">{portfolioData.desc}</p>
        <div className="project-feature-skills">
          {skills.map((skill, i) => (
            <span key={i} className="skill-badge">{skill}</span>
          ))}
        </div>
        <span className="project-feature-date">{portfolioData.date}</span>
      </div>

      <a
        ref={visualRef}
        href={portfolioData.url}
        target={portfolioData.target}
        rel="noreferrer"
        className={`project-feature-visual reveal ${visualVisible ? 'reveal-visible' : ''}`}
        style={{ transitionDelay: '120ms' }}
      >
        <img src={portfolioData.imgUrl} alt={portfolioData.title} />
      </a>
    </li>
  );
};

export default Cardlayout;
