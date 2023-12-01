// import logo from './logo.svg';
// import { useState, useEffect } from "react"
import './App.css';
// import axios from 'axios'
// import Cardlayout from './pages/Cardlayout';
// import FetchData from './pages/FatchData';
// import Portfoliolist from './pages/Portfoliolist';

function App() {
  // window.location.href = 'https://limssong.github.io/portfolio1/';

  const portfolioData = [
    {
      url: 'https://limssong.github.io/stairsAngle/',
      imgUrl: 'https://limssong.github.io/images/stairsAngle/triangle.png',
      title: '계단 각도 구하기',
      desc: 'reactJS 이용하여 밑변과 높이값을 입력시 빗변과 밑변 사이각\n구하기',
      skill: 'ReactJs / HTML / CSS',
      target: '2023'
    },
    {
      url: 'https://www.balaan.co.kr/',
      imgUrl: 'https://limssong.github.io/images/thumb/balaan.png',
      title: '발란',
      desc: '명품 커머스 발란 마크업 & FE개발',
      skill: 'HTML5 / CSS3 / sass / nuxt.js / Vue JS / node / 제플린 / Github / bitbucket',
      target: '2023'
    },
    {
      url: 'https://abcmart.a-rt.com/',
      imgUrl: 'https://limssong.github.io/images/thumb/abc.png',
      title: 'ABC마트',
      desc: 'ABC마트 퍼블리싱',
      skill: 'HTML5 / CSS3 / Photoshop / j-query / SVN',
      target: '2022'
    },
    {
      url: 'https://ppool.onstove.com/',
      imgUrl: 'https://limssong.github.io/images/thumb/ppool.png',
      title: '스마일게이트 스토브 - PPOOL',
      desc: '다중 화상 대화 플랫폼 ppool 마크업 개발',
      skill: 'sass / nuxt.js / Vue JS / node / 제플린 / Github',
      target: '2021'
    },
    {
      url: 'http://m.findjob.co.kr/',
      imgUrl: 'https://limssong.github.io/images/thumb/findjob.png',
      title: '벼룩시장 - 모바일 메인',
      desc: '구인구직 벼룩시장 모바일 메인 UI개편',
      skill: 'HTML5 / CSS3 / Javascript / Jquery',
      target: '2021'
    },
    {
      url: 'http://www.findjob.co.kr/',
      imgUrl: 'https://limssong.github.io/images/thumb/findjob.png',
      title: '벼룩시장 - PC 메인',
      desc: '구인구직 벼룩시장 PC 메인 UI개편',
      skill: 'HTML5 / CSS3 / Javascript / Jquery',
      target: '2021'
    },
    {
      url: 'http://m.findjob.co.kr/JobGuide/',
      imgUrl: 'https://limssong.github.io/images/thumb/findjob.png',
      title: '벼룩시장 - 모바일 취업가이드',
      desc: '구인구직 벼룩시장 모바일 취업가이드 UI개편',
      skill: 'HTML5 / CSS3 / Javascript / Jquery',
      target: '2021'
    },
    {
      url: 'https://coachingacademy.golfzon.com/',
      imgUrl: 'https://limssong.github.io/images/thumb/golf-coaching.png',
      title: '골프존 - ACADEMY',
      desc: '골프존 코칭 아카데미 웹 / 모바일 UI개발',
      skill: 'HTML5 / CSS3 / Vue JS / angularJs / node / 제플린 / Github / SVN',
      target: '2020'
    },
    {
      url: 'http://m.golfzon.com/',
      imgUrl: 'https://limssong.github.io/images/thumb/golfzon.png',
      title: '골프존 - 모바일 GS',
      desc: '골프존 모바일 GS 운영',
      skill: 'HTML5 / CSS3 / Vue JS / angularJs / node / 제플린 / Github / SVN',
      target: '2019'
    },
    {
      url: 'https://gdracademy.com/',
      imgUrl: 'https://limssong.github.io/images/thumb/gdr.png',
      title: '골프존 - 모바일 GDR',
      desc: '골프존 모바일 GDR 운영',
      skill: 'HTML5 / CSS3 / Vue JS / angularJs / node / 제플린 / Github / SVN',
      target: '2019'
    },
    {
      url: 'http://limssong84.mireene.com/inchi13/html/home.html',
      imgUrl: 'https://limssong.github.io/images/thumb/13inch.png',
      title: '칸그림 - 13인치 모바일',
      desc: '13인치 자체 서비스 13인치 UI개발',
      skill: 'HTML5 / CSS3 / Jquery',
      target: '2018'
    },
    {
      url: 'http://limssong84.mireene.com/korea-flag/korea-flag.html',
      imgUrl: 'https://limssong.github.io/images/thumb/flag.png',
      title: '태극기',
      desc: '개인적으로 html과 css로 그려본 태극기 - 2018.02.25',
      skill: 'HTML5 / CSS3',
      target: '2018'
    },
    {
      url: 'https://display.cjonstyle.com/p/homeTab/main?hmtabMenuId=003147&rPIC=homeonstyle',
      imgUrl: 'https://limssong.github.io/images/thumb/cj.png',
      title: 'CJ mall 내 UI개발',
      desc: 'CJ 오쇼핑',
      skill: 'HTML5 / sass',
      target: '2017'
    },
    {
      url: 'https://limssong.github.io/portfolio1/hobbyful/html/main.html',
      imgUrl: 'https://limssong.github.io/images/thumb/hobbyful.png',
      title: '코드크레프트 - 하비풀',
      desc: '취미를 쉽게 배우는 hobbyful',
      skill: 'HTML5 / CSS3 / Javascript',
      target: '2017'
    },
    {
      url: 'http://limssong84.mireene.com/loungef/html/home_new.html',
      imgUrl: 'https://limssong.github.io/images/thumb/loungef.png',
      title: '뷰리플 - LOUNGE.F',
      desc: '입어보고 구매하는 편집샵 LOUNGE.F UI개발',
      skill: 'HTML5 / CSS3 / Javascript / Photoshop',
      target: '2015'
    },
    {
      url: 'http://limssong84.mireene.com/selleradmin/html/login.html',
      imgUrl: 'https://limssong.github.io/images/thumb/loungef.png',
      title: '라운지에프 어드민',
      desc: '입어보고 구매하는 편집샵 라운지에프 어드민 UI개발',
      skill: 'HTML5 / CSS3 / Javascript / Photoshop',
      target: '2015'
    },
    {
      url: 'http://limssong84.mireene.com/socialVoting/html/index.html',
      imgUrl: 'https://limssong.github.io/images/thumb/viewreple.png',
      title: '소셜보팅 UI개발',
      desc: '사용자로 하여금 A vs B 상품을 투표하여 소비자 반응도 조사하고 쿠폰발급으로 구매까지 독려하는 카페24 앱 UI개발. 유료앱으로 런칭하였으나 대 실패',
      skill: 'HTML5 / CSS3 / Javascript / Photoshop',
      target: '2014'
    },
    {
      url: 'http://limssong84.mireene.com/socialreview/html/socialReview.html',
      imgUrl: 'https://limssong.github.io/images/thumb/viewreple.png',
      title: '소셜리뷰 UI개발',
      desc: '리뷰 작성 도구인 소셜리뷰 UI개발. 어느 사이트나 쉽게 삽입하여 리뷰작성할 수 있도록 도와주는 툴. 당시 카페24 무료앱 탑3',
      skill: 'HTML5 / CSS3 / Javascript / Photoshop',
      target: '2014'
    },
    {
      url: 'http://limssong84.mireene.com/newviewreple/html/home.html',
      imgUrl: 'https://limssong.github.io/images/thumb/viewreple.png',
      title: '뷰리플 리뉴얼 2차',
      desc: '리뷰 모아보는 사이트 뷰리플 UI개발. 미디어쿼리 사용으로 웹 / 모바일 대응',
      skill: 'HTML5 / CSS3 / Javascript / Photoshop',
      target: '2013'
    },
    {
      url: 'http://limssong84.mireene.com/company/html/company_about.html',
      imgUrl: 'https://limssong.github.io/images/thumb/viewreple2.png',
      title: '뷰리플 회사홈페이지',
      desc: '뷰리플 회사홈페이지 UI개발',
      skill: 'HTML5 / CSS3 / Javascript / Photoshop',
      target: '2013'
    },
    {
      url: 'http://limssong84.mireene.com/viewreple/html/main_renewal_m.html',
      imgUrl: 'https://limssong.github.io/images/thumb/viewreple.png',
      title: '뷰리플 리뉴얼 1차',
      desc: '[모바일] 리뷰 모아보는 사이트 뷰리플 UI개발',
      skill: 'HTML5 / CSS3 / Javascript / Photoshop',
      target: '2013'
    },
    {
      url: 'http://limssong84.mireene.com/viewreple/html/main_renewal.html',
      imgUrl: 'https://limssong.github.io/images/thumb/viewreple.png',
      title: '뷰리플 리뉴얼 1차',
      desc: '[웹] 리뷰 모아보는 사이트 뷰리플 UI개발',
      skill: 'HTML5 / CSS3 / Javascript / Photoshop',
      target: '2013'
    },
    {
      url: 'http://limssong84.mireene.com/easyCall/index.html',
      imgUrl: 'https://limssong.github.io/images/thumb/easycall.png',
      title: 'EasyCall 개발',
      desc: '개인적으로 제작해본 쉽게 전화걸기 웹앱',
      skill: 'HTML5 / CSS3 / JqueryMobile',
      target: '2012'
    },
    {
      url: 'http://goo.gl/svQ6gu',
      imgUrl: 'https://limssong.github.io/images/thumb/nate.png',
      title: '네이트 검색면 컨텐츠 토픽 UI개발',
      desc: '단위환산 / 환율 / 계산기 / 증권 / 해외증시 / 올림픽 토픽 UI개발. 2012.04 총선 토픽 UI개발 :  선거구 찾기 지도 서비스 포함된 총선 토픽 UI개발',
      skill: 'HTML / CSS / Photoshop',
      target: '2012'
    },
    {
      url: 'https://keywordshop.nate.com/',
      imgUrl: 'https://limssong.github.io/images/thumb/skad.png',
      title: 'NATE 소셜광고',
      desc: '소셜광고 UI개발',
      skill: 'HTML / CSS / Photoshop',
      target: '2010'
    },
    {
      url: 'http://adguide.nate.com/',
      imgUrl: 'https://limssong.github.io/images/thumb/skda.png',
      title: 'NATE DA광고',
      desc: 'DA광고 UI개발',
      skill: 'HTML / CSS / Photoshop',
      target: '2010'
    },
    {
      url: 'http://www.skcomms.co.kr/',
      imgUrl: 'https://limssong.github.io/images/thumb/skcomms.png',
      title: 'SK Communications 회사소개 페이지',
      desc: 'SK Communications 회사소개 페이지 UI개발',
      skill: 'HTML / CSS / Photoshop',
      target: '2009'
    },
    {
      url: '-',
      imgUrl: '-',
      title: '네이트 회원빌링 UI개발',
      desc: '네이트 회원빌링 UI개발. 서비스 종료로 포트폴리오 없음.',
      skill: 'HTML / CSS / Photoshop',
      target: '2011'
    },
    {
      url: '-',
      imgUrl: '-',
      title: '사이좋은 세상 UI개발',
      desc: '사이좋은 세상 UI개발. 서비스 종료로 포트폴리오 없음.',
      skill: 'HTML / CSS / Photoshop',
      target: '2011'
    },
    {
      url: 'http://fifanet.kr/',
      imgUrl: '-',
      title: '피파온라인3 정보공유',
      desc: '피파온라인3 정보공유 웹/모바일 UI개발',
      skill: 'HTML5 / CSS3 / Javascript / Photoshop',
      target: '2016'
    },
  ]

  // let [portfolioData, setPortfolioData] = useState([])

  // const searchData = async() => {
  //   const url = "https://zeushahn.github.io/Test/reactjs/device.json"
  //   // const url = "https://limssong.github.io/images/json/portfolio.json"
  //   axios.get(url).then((response) => {
  //     // alert("Fetch Data")
  //     let fetchData = response.data.myDeviceData
  //     // let fetchData = response.data.myPortfolio
  //     setPortfolioData(fetchData)
  //   }).catch((error) => {
  //     alert("Error:" + error)
  //   })
  // }

  // useEffect(()=>{
  //   searchData()
  // })

  
  const PortfolioCard = ({datas}) => {
    const portfolioData = datas
    return (
      <li class="portfolio-card" key={portfolioData.name}>
        <a href={portfolioData.url} alt={portfolioData.title} target={portfolioData.target}>
          <div class="portfolio-thumb"><img src={portfolioData.imgUrl} alt="대표이미지" /></div>
          <div class="portfolio-info">
            <div class="portfolio-title">{portfolioData.title}</div>
            <div class="portfolio-desc">{portfolioData.desc}</div>
            <div class="portfolio-skill">{portfolioData.skill}</div>
          </div>
        </a>
      </li>
    )
  }


  return (
    <div className="App">      
      {/* <div>ReactJs로 제작중</div> */}

      <div class="portfolio-wrap">
        <ul>
        {portfolioData.map(data => <PortfolioCard datas={data}></PortfolioCard>)}  
        {/* {portfolioData.map(data => <Cardlayout portfolioData={data}></Cardlayout>)}   */}
        </ul>
      </div>
      {/* <FetchData></FetchData> */}
    </div>
  );
}

export default App;
