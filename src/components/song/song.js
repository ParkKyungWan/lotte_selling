import React from 'react';
import './song.css';
import Header from './components/Header'; 
import Footer from './components/Footer';
import eco from '../song/eco.png';
import Grid from '@material-ui/core/Grid';

//var htmlContent = require('./index.html');


function Song() {

  return (
    <React.Fragment>
    <div>
    <Header/>


    </div>

    <div>
         {/* CSS only */}
         <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossOrigin="anonymous" />
          {/* JS, Popper.js, and jQuery */}
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#000000" />
          <meta name="description" content="Web site created using create-react-app" />
          <link rel="icon" sizes="32x32" href="https://static.lotteon.com/p/common/assets/favicon/1/favicon-32.png" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
          {/*
      manifest.json provides metadata used when your web app is installed on a
      user's mobile device or desktop. See https://developers.google.com/web/fundamentals/web-app-manifest/
    */}
          <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
          {/*
      Notice the use of %PUBLIC_URL% in the tags above.
      It will be replaced with the URL of the `public` folder during the build.
      Only files inside the `public` folder can be referenced from the HTML.
      Unlike "/favicon.ico" or "favicon.ico", "%PUBLIC_URL%/favicon.ico" will
      work correctly both with client-side routing and a non-root public URL.
      Learn how to configure a non-root public URL by running `npm run build`.
    */}
          <title>물 : 롯데ON</title>
          <noscript>You need to enable JavaScript to run this app.</noscript>
        <div id="root" />
        <div className="container">
          <br /><br />
          <h3 className="h3"><strong>물</strong>에 대한 검색결과</h3>
          <br /><br />
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <a className="nav-link active" href="#">상품 (22,898)</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">롯데백화점 (1,479)</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">리뷰 (480)</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">브랜드 (98)</a>
            </li>
          </ul>
          <br />  <br />
          <div className="layout">
            <div className="sidemenu">
              <h6><strong>필터</strong></h6>
              <hr />
              <div className="form-check"> 
                <input className="form-check-input" type="checkbox" defaultValue id="defaultCheck1" />
                <label className="form-check-label" htmlFor="defaultCheck1">
                  에코발송🌍
                </label>
                <br />
                <input className="form-check-input" type="checkbox" defaultValue id="defaultCheck1" />
                <label className="form-check-label" htmlFor="defaultCheck1">
                  그린포장🍀
                </label>
                <br />
                <input className="form-check-input" type="checkbox" defaultValue id="defaultCheck1" />
                <label className="form-check-label" htmlFor="defaultCheck1">
                  정기수거🚛
                </label>
                <br />
                <input className="form-check-input" type="checkbox" defaultValue id="defaultCheck1" />
                <label className="form-check-label" htmlFor="defaultCheck1">
                  오늘발송
                </label>
                <br />
                <input className="form-check-input" type="checkbox" defaultValue id="defaultCheck1" />
                <label className="form-check-label" htmlFor="defaultCheck1">
                  롯데오너스
                </label>
                <br />
              </div>
              <hr />
              <h6><strong>매장</strong></h6>
              <div className="form-check"> 
                <input className="form-check-input" type="checkbox" defaultValue id="defaultCheck1" />
                <label className="form-check-label" htmlFor="defaultCheck1">
                  롯데백화점
                </label>
                <br />
                <input className="form-check-input" type="checkbox" defaultValue id="defaultCheck1" />
                <label className="form-check-label" htmlFor="defaultCheck1">
                  롯데마트
                </label>
                <br />
                <input className="form-check-input" type="checkbox" defaultValue id="defaultCheck1" />
                <label className="form-check-label" htmlFor="defaultCheck1">
                  롭스
                </label>
                <br />
                <input className="form-check-input" type="checkbox" defaultValue id="defaultCheck1" />
                <label className="form-check-label" htmlFor="defaultCheck1">
                  하이마트
                </label>
                <br />
                <input className="form-check-input" type="checkbox" defaultValue id="defaultCheck1" />
                <label className="form-check-label" htmlFor="defaultCheck1">
                  롯데홈쇼핑
                </label>
                <br />
              </div>
              <hr />
              <h6><strong>카테고리</strong></h6>
              <p className="label">식품</p>
              <p className="label">주방용품</p>
              <p className="label">스포츠&amp;레저</p>
              <p className="label">생활용품</p>
              <p className="label">반려동물</p>
              <hr />
              <h6><strong>브랜드</strong></h6>
              <div className="form-check"> 
                <input className="form-check-input" type="checkbox" defaultValue id="defaultCheck1" />
                <label className="form-check-label" htmlFor="defaultCheck1">
                  담터
                </label>
                <br />
                <input className="form-check-input" type="checkbox" defaultValue id="defaultCheck1" />
                <label className="form-check-label" htmlFor="defaultCheck1">
                  코카콜라
                </label>
                <br />
                <input className="form-check-input" type="checkbox" defaultValue id="defaultCheck1" />
                <label className="form-check-label" htmlFor="defaultCheck1">
                  롯데칠성
                </label>
                <br />
                <input className="form-check-input" type="checkbox" defaultValue id="defaultCheck1" />
                <label className="form-check-label" htmlFor="defaultCheck1">
                  다농원
                </label>
                <br />
                <input className="form-check-input" type="checkbox" defaultValue id="defaultCheck1" />
                <label className="form-check-label" htmlFor="defaultCheck1">
                  꽃샘식품
                </label>
                <br />
                <input className="form-check-input" type="checkbox" defaultValue id="defaultCheck1" />
                <label className="form-check-label" htmlFor="defaultCheck1">
                  에빠니
                </label>
                <br />
                <input className="form-check-input" type="checkbox" defaultValue id="defaultCheck1" />
                <label className="form-check-label" htmlFor="defaultCheck1">
                  아크바
                </label>
                <br />
                <input className="form-check-input" type="checkbox" defaultValue id="defaultCheck1" />
                <label className="form-check-label" htmlFor="defaultCheck1">
                  동서식품
                </label>
                <br />
                <input className="form-check-input" type="checkbox" defaultValue id="defaultCheck1" />
                <label className="form-check-label" htmlFor="defaultCheck1">
                  스파클
                </label>
                <br />
                <input className="form-check-input" type="checkbox" defaultValue id="defaultCheck1" />
                <label className="form-check-label" htmlFor="defaultCheck1">
                  동서
                </label>
                <br />
                <input className="form-check-input" type="checkbox" defaultValue id="defaultCheck1" />
                <label className="form-check-label" htmlFor="defaultCheck1">
                  광동
                </label>
                <br />
              </div>
              <hr />
              <h6><strong>배송</strong></h6>
              <div className="form-check"> 
                <input className="form-check-input" type="checkbox" defaultValue id="defaultCheck1" />
                <label className="form-check-label" htmlFor="defaultCheck1">
                  정기배송
                </label>
                <br />
                <input className="form-check-input" type="checkbox" defaultValue id="defaultCheck1" />
                <label className="form-check-label" htmlFor="defaultCheck1">
                  무료배송
                </label>
                <br />
                <input className="form-check-input" type="checkbox" defaultValue id="defaultCheck1" />
                <label className="form-check-label" htmlFor="defaultCheck1">
                  스마트퀵
                </label>
                <br />
                <input className="form-check-input" type="checkbox" defaultValue id="defaultCheck1" />
                <label className="form-check-label" htmlFor="defaultCheck1">
                  바로배송
                </label>
                <br />
              </div>
              <hr />
              <h6><strong>혜택</strong></h6>
              <hr />
              <h6><strong>가격</strong></h6>
              <hr />
              <h6><strong>별점</strong></h6>
              <div className="form-check"> 
                <input className="form-check-input" type="checkbox" defaultValue id="defaultCheck1" />
                <label className="form-check-label" htmlFor="defaultCheck1">
                  🌝🌝🌝🌝🌚 4점이상
                </label>
                <br />
                <input className="form-check-input" type="checkbox" defaultValue id="defaultCheck1" />
                <label className="form-check-label" htmlFor="defaultCheck1">
                  🌝🌝🌝🌚🌚 3점이상
                </label>
                <br />
                <input className="form-check-input" type="checkbox" defaultValue id="defaultCheck1" />
                <label className="form-check-label" htmlFor="defaultCheck1">
                  🌝🌝🌚🌚🌚 2점이상
                </label>
                <br />
                <input className="form-check-input" type="checkbox" defaultValue id="defaultCheck1" />
                <label className="form-check-label" htmlFor="defaultCheck1">
                  🌝🌚🌚🌚🌚 1점이상
                </label>
                <br />
              </div>
              <hr />
            </div>
            <div className="nav-menu">
              <ul className="nav nav-tabs">
                <li className="nav-item2">
                  <a className="nav-link2" href="#">롯데ON 랭킹순</a>
                </li>
                <li className="nav-item2">
                  <a className="nav-link2" href="#">판매순</a>
                </li>
                <li className="nav-item2">
                  <a className="nav-link2" href="#">리뷰 많은순</a>
                </li>
                <li className="nav-item2">
                  <a className="nav-link2" href="#">최신순</a>
                </li>
                <li className="nav-item2">
                  <a className="nav-link2" href="#">낮은 가격순</a>
                </li>
                <li className="nav-item2">
                  <a className="nav-link2" href="#">높은 가격순</a>
                </li>
                <button type="button" className="compare">상품비교</button>
                <div className="dropdown">
                  <button className="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown">60개씩 보기
                    <span className="caret" /></button>
                  <ul className="dropdown-menu">
                    <li><a href="#">36개씩 보기</a></li>
                    <li><a href="#">48개씩 보기</a></li>
                    <li><a href="#">60개씩 보기</a></li>
                    <li><a href="#">72개씩 보기</a></li>
                  </ul>
                </div>
              </ul></div>
          </div>
        </div>
        <div className="content-area">
          <div className="card">
          <Grid container spacing = {5}>
            <Grid item xs={3}>
            <img src={eco} className="card-img-header" />
            </Grid>
            <Grid item xs={9} >
            <p className="card-header-text"> 정기 배송/수거 제품 </p> 
              </Grid>
              </Grid>
            <a href="/detail">
              <img src="https://contents.lotteon.com/itemimage/LO/10/24/51/10/29/_1/02/45/11/03/0/LO1024511029_1024511030_1.jpg" className="card-img-top" alt="..." />
            </a>
            <div
              style={{
              width: "100%",
              borderBottom: "1px solid lightgray",
              marginTop: "20px",
                      }}
            ></div>
            <div className="card-body">
              <a href="/detail">
                <h5 className="card-title">아이시스8.0에코 1.5L</h5>
                <p className="card-text">⭐4.6 (33) | 월간구매139</p>
                <h5 className="card-price1">7,960<span className="won1">원</span></h5>
                <h5 className="card-price2">7,890<span className="won2">원 💎추가 1%</span></h5>
              </a>
            </div>
          </div>
          <div className="card">
          <Grid container spacing = {5}>
            <Grid item xs={3}>
            <img src={eco} className="card-img-header" />
            </Grid>
            <Grid item xs={9} >
            <p className="card-header-text"> 정기 배송/수거 제품 </p> 
              </Grid>
              </Grid>
            <a href="/detail">
              <img src="https://contents.lotteon.com/itemimage/LO/10/24/51/10/29/_1/02/45/11/03/0/LO1024511029_1024511030_1.jpg" className="card-img-top" alt="..." />
            </a>
            <div
              style={{
              width: "100%",
              borderBottom: "1px solid lightgray",
              marginTop: "20px",
                      }}
            ></div>
            <div className="card-body">
              <a href="/detail">
                <h5 className="card-title">아이시스8.0에코 1.5L</h5>
                <p className="card-text">⭐4.6 (33) | 월간구매139</p>
                <h5 className="card-price1">7,960<span className="won1">원</span></h5>
                <h5 className="card-price2">7,890<span className="won2">원 💎추가 1%</span></h5>
              </a>
            </div>
          </div>
          <div className="card">
          <Grid container spacing = {5}>
            <Grid item xs={3}>
            <img src={eco} className="card-img-header" />
            </Grid>
            <Grid item xs={9} >
            <p className="card-header-text"> 정기 배송/수거 제품</p> 
              </Grid>
              </Grid>
            <a href="/detail">
              <img src="https://contents.lotteon.com/itemimage/LO/10/24/51/10/29/_1/02/45/11/03/0/LO1024511029_1024511030_1.jpg" className="card-img-top" alt="..." />
            </a>
            <div
              style={{
              width: "100%",
              borderBottom: "1px solid lightgray",
              marginTop: "20px",
                      }}
            ></div>
            <div className="card-body">
              <a href="/detail">
                <h5 className="card-title">아이시스8.0에코 1.5L</h5>
                <p className="card-text">⭐4.6 (33) | 월간구매139</p>
                <h5 className="card-price1">7,960<span className="won1">원</span></h5>
                <h5 className="card-price2">7,890<span className="won2">원 💎추가 1%</span></h5>
              </a>
            </div>
          </div>
          <div className="card">
          <Grid container spacing = {5}>
            <Grid item xs={3}>
            <img src={eco} className="card-img-header" />
            </Grid>
            <Grid item xs={9} >
            <p className="card-header-text"> 정기 배송/수거 제품 </p> 
              </Grid>
              </Grid>
            <a href="/detail">
              <img src="https://contents.lotteon.com/itemimage/LO/10/24/51/10/29/_1/02/45/11/03/0/LO1024511029_1024511030_1.jpg" className="card-img-top" alt="..." />
            </a>
            <div
              style={{
              width: "100%",
              borderBottom: "1px solid lightgray",
              marginTop: "20px",
                      }}
            ></div>
            <div className="card-body">
              <a href="/detail">
                <h5 className="card-title">아이시스8.0에코 1.5L</h5>
                <p className="card-text">⭐4.6 (33) | 월간구매139</p>
                <h5 className="card-price1">7,960<span className="won1">원</span></h5>
                <h5 className="card-price2">7,890<span className="won2">원 💎추가 1%</span></h5>
              </a>
            </div>
          </div>
        </div>
        <div className="content-area">
          <div className="card">
            <a href="https://www.lotteon.com/p/product/LD663677651?areaCode=AD&entryPoint=ad&clickId=C3558861331">
              <img src="https://contents.lotteon.com/itemimage/LD/66/36/77/65/1_/0/LD663677651_0_1.jpg" className="card-img-top" alt="..." />
              
            </a>
            <div
              style={{
              width: "100%",
              borderBottom: "1px solid lightgray",
              marginTop: "20px",
                      }}
            ></div>
            <div className="card-body">
              <a href="https://www.lotteon.com/p/product/LD663677651?areaCode=AD&entryPoint=ad&clickId=C3558861331">
                <h5 className="card-title">아이시스8.0 생수 2L*24펫</h5>
                <p className="card-text">⭐4.8 (184) | 월간구매517</p>
                <h5 className="card-price1">16,900<span className="won1">원</span></h5>
                <h5 className="card-price2">16,740<span className="won2">원 💎추가 1%</span></h5>
              </a>
            </div>
          </div>
          <div className="card">
            <a href="https://www.lotteon.com/p/product/LD663677651?areaCode=AD&entryPoint=ad&clickId=C3558861331">
              <img src="https://contents.lotteon.com/itemimage/LD/66/36/77/65/1_/0/LD663677651_0_1.jpg" className="card-img-top" alt="..." />
            </a>
            <div
              style={{
              width: "100%",
              borderBottom: "1px solid lightgray",
              marginTop: "20px",
                      }}
            ></div>
            <div className="card-body">
              <a href="https://www.lotteon.com/p/product/LD663677651?areaCode=AD&entryPoint=ad&clickId=C3558861331">
                <h5 className="card-title">아이시스8.0 생수 2L*24펫</h5>
                <p className="card-text">⭐4.8 (184) | 월간구매517</p>
                <h5 className="card-price1">16,900<span className="won1">원</span></h5>
                <h5 className="card-price2">16,740<span className="won2">원 💎추가 1%</span></h5>
              </a>
            </div>
          </div>
          <div className="card">
            <a href="https://www.lotteon.com/p/product/LD663677651?areaCode=AD&entryPoint=ad&clickId=C3558861331">
              <img src="https://contents.lotteon.com/itemimage/LD/66/36/77/65/1_/0/LD663677651_0_1.jpg" className="card-img-top" alt="..." />
            </a>
            <div
              style={{
              width: "100%",
              borderBottom: "1px solid lightgray",
              marginTop: "20px",
                      }}
            ></div>
            <div className="card-body">
              <a href="https://www.lotteon.com/p/product/LD663677651?areaCode=AD&entryPoint=ad&clickId=C3558861331">
                <h5 className="card-title">아이시스8.0 생수 2L*24펫</h5>
                <p className="card-text">⭐4.8 (184) | 월간구매517</p>
                <h5 className="card-price1">16,900<span className="won1">원</span></h5>
                <h5 className="card-price2">16,740<span className="won2">원 💎추가 1%</span></h5>
              </a>
            </div>
          </div>
          <div className="card">
            <a href="https://www.lotteon.com/p/product/LD663677651?areaCode=AD&entryPoint=ad&clickId=C3558861331">
              <img src="https://contents.lotteon.com/itemimage/LD/66/36/77/65/1_/0/LD663677651_0_1.jpg" className="card-img-top" alt="..." />
            </a>
            <div
              style={{
              width: "100%",
              borderBottom: "1px solid lightgray",
              marginTop: "20px",
                      }}
            ></div>
            <div className="card-body">
              <a href="https://www.lotteon.com/p/product/LD663677651?areaCode=AD&entryPoint=ad&clickId=C3558861331">
                <h5 className="card-title">아이시스8.0 생수 2L*24펫</h5>
                <p className="card-text">⭐4.8 (184) | 월간구매517</p>
                <h5 className="card-price1">16,900<span className="won1">원</span></h5>
                <h5 className="card-price2">16,740<span className="won2">원 💎추가 1%</span></h5>
              </a>
            </div>
          </div>
        </div>
        <div className="content-area">
          <div className="card">
            <a href="https://www.lotteon.com/p/product/LD663677651?areaCode=AD&entryPoint=ad&clickId=C3558861331">
              <img src="https://contents.lotteon.com/itemimage/LD/66/36/77/65/1_/0/LD663677651_0_1.jpg" className="card-img-top" alt="..." />
            </a>
            <div
              style={{
              width: "100%",
              borderBottom: "1px solid lightgray",
              marginTop: "20px",
                      }}
            ></div>
            <div className="card-body">
              <a href="https://www.lotteon.com/p/product/LD663677651?areaCode=AD&entryPoint=ad&clickId=C3558861331">
                <h5 className="card-title">아이시스8.0 생수 2L*24펫</h5>
                <p className="card-text">⭐4.8 (184) | 월간구매517</p>
                <h5 className="card-price1">16,900<span className="won1">원</span></h5>
                <h5 className="card-price2">16,740<span className="won2">원 💎추가 1%</span></h5>
              </a>
            </div>
          </div>
          <div className="card">
            <a href="https://www.lotteon.com/p/product/LD663677651?areaCode=AD&entryPoint=ad&clickId=C3558861331">
              <img src="https://contents.lotteon.com/itemimage/LD/66/36/77/65/1_/0/LD663677651_0_1.jpg" className="card-img-top" alt="..." />
            </a>
            <div
              style={{
              width: "100%",
              borderBottom: "1px solid lightgray",
              marginTop: "20px",
                      }}
            ></div>
            <div className="card-body">
              <a href="https://www.lotteon.com/p/product/LD663677651?areaCode=AD&entryPoint=ad&clickId=C3558861331">
                <h5 className="card-title">아이시스8.0 생수 2L*24펫</h5>
                <p className="card-text">⭐4.8 (184) | 월간구매517</p>
                <h5 className="card-price1">16,900<span className="won1">원</span></h5>
                <h5 className="card-price2">16,740<span className="won2">원 💎추가 1%</span></h5>
              </a>
            </div>
          </div>
          <div className="card">
            <a href="https://www.lotteon.com/p/product/LD663677651?areaCode=AD&entryPoint=ad&clickId=C3558861331">
              <img src="https://contents.lotteon.com/itemimage/LD/66/36/77/65/1_/0/LD663677651_0_1.jpg" className="card-img-top" alt="..." />
            </a><div 
              style={{
              width: "100%",
              borderBottom: "1px solid lightgray",
              marginTop: "20px",
                      }}
            ></div>
            <div className="card-body">
              <a href="https://www.lotteon.com/p/product/LD663677651?areaCode=AD&entryPoint=ad&clickId=C3558861331">
                <h5 className="card-title">아이시스8.0 생수 2L*24펫</h5>
                <p className="card-text">⭐4.8 (184) | 월간구매517</p>
                <h5 className="card-price1">16,900<span className="won1">원</span></h5>
                <h5 className="card-price2">16,740<span className="won2">원 💎추가 1%</span></h5>
              </a>
            </div>
          </div>
          <div className="card">
            <a href="https://www.lotteon.com/p/product/LD663677651?areaCode=AD&entryPoint=ad&clickId=C3558861331">
              <img src="https://contents.lotteon.com/itemimage/LD/66/36/77/65/1_/0/LD663677651_0_1.jpg" className="card-img-top" alt="..." />
            </a>
            <div
              style={{
              width: "100%",
              borderBottom: "1px solid lightgray",
              marginTop: "20px",
                      }}
            ></div>
            <div className="card-body">
              <a href="https://www.lotteon.com/p/product/LD663677651?areaCode=AD&entryPoint=ad&clickId=C3558861331">
                <h5 className="card-title">아이시스8.0 생수 2L*24펫</h5>
                <p className="card-text">⭐4.8 (184) | 월간구매517</p>
                <h5 className="card-price1">16,900<span className="won1">원</span></h5>
                <h5 className="card-price2">16,740<span className="won2">원 💎추가 1%</span></h5>
              </a>
            </div>
          </div>
        </div>
        <div className="content-area">
          <div className="card">
            <a href="https://www.lotteon.com/p/product/LD663677651?areaCode=AD&entryPoint=ad&clickId=C3558861331">
              <img src="https://contents.lotteon.com/itemimage/LD/66/36/77/65/1_/0/LD663677651_0_1.jpg" className="card-img-top" alt="..." />
            </a>
            <div
              style={{
              width: "100%",
              borderBottom: "1px solid lightgray",
              marginTop: "20px",
                      }}
            ></div>
            <div className="card-body">
              <a href="https://www.lotteon.com/p/product/LD663677651?areaCode=AD&entryPoint=ad&clickId=C3558861331">
                <h5 className="card-title">아이시스8.0 생수 2L*24펫</h5>
                <p className="card-text">⭐4.8 (184) | 월간구매517</p>
                <h5 className="card-price1">16,900<span className="won1">원</span></h5>
                <h5 className="card-price2">16,740<span className="won2">원 💎추가 1%</span></h5>
              </a>
            </div>
          </div>
          <div className="card">
            <a href="https://www.lotteon.com/p/product/LD663677651?areaCode=AD&entryPoint=ad&clickId=C3558861331">
              <img src="https://contents.lotteon.com/itemimage/LD/66/36/77/65/1_/0/LD663677651_0_1.jpg" className="card-img-top" alt="..." />
            </a>
            <div
              style={{
              width: "100%",
              borderBottom: "1px solid lightgray",
              marginTop: "20px",
                      }}
            ></div>
            <div className="card-body">
              <a href="https://www.lotteon.com/p/product/LD663677651?areaCode=AD&entryPoint=ad&clickId=C3558861331">
                <h5 className="card-title">아이시스8.0 생수 2L*24펫</h5>
                <p className="card-text">⭐4.8 (184) | 월간구매517</p>
                <h5 className="card-price1">16,900<span className="won1">원</span></h5>
                <h5 className="card-price2">16,740<span className="won2">원 💎추가 1%</span></h5>
              </a>
            </div>
          </div>
          <div className="card">
            <a href="https://www.lotteon.com/p/product/LD663677651?areaCode=AD&entryPoint=ad&clickId=C3558861331">
              <img src="https://contents.lotteon.com/itemimage/LD/66/36/77/65/1_/0/LD663677651_0_1.jpg" className="card-img-top" alt="..." />
            </a>
            <div
              style={{
              width: "100%",
              borderBottom: "1px solid lightgray",
              marginTop: "20px",
                      }}
            ></div>
            <div className="card-body">
              <a href="https://www.lotteon.com/p/product/LD663677651?areaCode=AD&entryPoint=ad&clickId=C3558861331">
                <h5 className="card-title">아이시스8.0 생수 2L*24펫</h5>
                <p className="card-text">⭐4.8 (184) | 월간구매517</p>
                <h5 className="card-price1">16,900<span className="won1">원</span></h5>
                <h5 className="card-price2">16,740<span className="won2">원 💎추가 1%</span></h5>
              </a>
            </div>
          </div>
          <div className="card">
            <a href="https://www.lotteon.com/p/product/LD663677651?areaCode=AD&entryPoint=ad&clickId=C3558861331">
              <img src="https://contents.lotteon.com/itemimage/LD/66/36/77/65/1_/0/LD663677651_0_1.jpg" className="card-img-top" alt="..." />
            </a>
            <div
              style={{
              width: "100%",
              borderBottom: "1px solid lightgray",
              marginTop: "20px",
                      }}
            ></div>
            <div className="card-body">
              <a href="https://www.lotteon.com/p/product/LD663677651?areaCode=AD&entryPoint=ad&clickId=C3558861331">
                <h5 className="card-title">아이시스8.0 생수 2L*24펫</h5>
                <p className="card-text">⭐4.8 (184) | 월간구매517</p>
                <h5 className="card-price1">16,900<span className="won1">원</span></h5>
                <h5 className="card-price2">16,740<span className="won2">원 💎추가 1%</span></h5>
              </a>
            </div>
          </div>
        </div>
        <div className="content-area">
          <div className="card">
            <a href="https://www.lotteon.com/p/product/LD663677651?areaCode=AD&entryPoint=ad&clickId=C3558861331">
              <img src="https://contents.lotteon.com/itemimage/LD/66/36/77/65/1_/0/LD663677651_0_1.jpg" className="card-img-top" alt="..." />
            </a>
            <div
              style={{
              width: "100%",
              borderBottom: "1px solid lightgray",
              marginTop: "20px",
                      }}
            ></div>
            <div className="card-body">
              <a href="https://www.lotteon.com/p/product/LD663677651?areaCode=AD&entryPoint=ad&clickId=C3558861331">
                <h5 className="card-title">아이시스8.0 생수 2L*24펫</h5>
                <p className="card-text">⭐4.8 (184) | 월간구매517</p>
                <h5 className="card-price1">16,900<span className="won1">원</span></h5>
                <h5 className="card-price2">16,740<span className="won2">원 💎추가 1%</span></h5>
              </a>
            </div>
          </div>
          <div className="card">
            <a href="https://www.lotteon.com/p/product/LD663677651?areaCode=AD&entryPoint=ad&clickId=C3558861331">
              <img src="https://contents.lotteon.com/itemimage/LD/66/36/77/65/1_/0/LD663677651_0_1.jpg" className="card-img-top" alt="..." />
            </a>
            <div
              style={{
              width: "100%",
              borderBottom: "1px solid lightgray",
              marginTop: "20px",
                      }}
            ></div>
            <div className="card-body">
              <a href="https://www.lotteon.com/p/product/LD663677651?areaCode=AD&entryPoint=ad&clickId=C3558861331">
                <h5 className="card-title">아이시스8.0 생수 2L*24펫</h5>
                <p className="card-text">⭐4.8 (184) | 월간구매517</p>
                <h5 className="card-price1">16,900<span className="won1">원</span></h5>
                <h5 className="card-price2">16,740<span className="won2">원 💎추가 1%</span></h5>
              </a>
            </div>
          </div>
          <div className="card">
            <a href="https://www.lotteon.com/p/product/LD663677651?areaCode=AD&entryPoint=ad&clickId=C3558861331">
              <img src="https://contents.lotteon.com/itemimage/LD/66/36/77/65/1_/0/LD663677651_0_1.jpg" className="card-img-top" alt="..." />
            </a>
            <div
              style={{
              width: "100%",
              borderBottom: "1px solid lightgray",
              marginTop: "20px",
                      }}
            ></div>
            <div className="card-body">
              <a href="https://www.lotteon.com/p/product/LD663677651?areaCode=AD&entryPoint=ad&clickId=C3558861331">
                <h5 className="card-title">아이시스8.0 생수 2L*24펫</h5>
                <p className="card-text">⭐4.8 (184) | 월간구매517</p>
                <h5 className="card-price1">16,900<span className="won1">원</span></h5>
                <h5 className="card-price2">16,740<span className="won2">원 💎추가 1%</span></h5>
              </a>
            </div>
          </div>
          <div className="card">
            <a href="https://www.lotteon.com/p/product/LD663677651?areaCode=AD&entryPoint=ad&clickId=C3558861331">
              <img src="https://contents.lotteon.com/itemimage/LD/66/36/77/65/1_/0/LD663677651_0_1.jpg" className="card-img-top" alt="..." />
            </a>
            <div
              style={{
              width: "100%",
              borderBottom: "1px solid lightgray",
              marginTop: "20px",
                      }}
            ></div>
            <div className="card-body">
              <a href="https://www.lotteon.com/p/product/LD663677651?areaCode=AD&entryPoint=ad&clickId=C3558861331">              <h5 className="card-title">아이시스8.0 생수 2L*24펫</h5>
                <p className="card-text">⭐4.8 (184) | 월간구매517</p>
                <h5 className="card-price1">16,900<span className="won1">원</span></h5>
                <h5 className="card-price2">16,740<span className="won2">원 💎추가 1%</span></h5>
              </a>
            </div>
          </div>
        </div>
        <div className="content-area">
          <div className="card">
            <a href="https://www.lotteon.com/p/product/LD663677651?areaCode=AD&entryPoint=ad&clickId=C3558861331">
              <img src="https://contents.lotteon.com/itemimage/LD/66/36/77/65/1_/0/LD663677651_0_1.jpg" className="card-img-top" alt="..." />
            </a>
            <div
              style={{
              width: "100%",
              borderBottom: "1px solid lightgray",
              marginTop: "20px",
                      }}
            ></div>
            <div className="card-body">
              <a href="https://www.lotteon.com/p/product/LD663677651?areaCode=AD&entryPoint=ad&clickId=C3558861331">
                <h5 className="card-title">아이시스8.0 생수 2L*24펫</h5>
                <p className="card-text">⭐4.8 (184) | 월간구매517</p>
                <h5 className="card-price1">16,900<span className="won1">원</span></h5>
                <h5 className="card-price2">16,740<span className="won2">원 💎추가 1%</span></h5>
              </a>
            </div>
          </div>
          <div className="card">
            <a href="https://www.lotteon.com/p/product/LD663677651?areaCode=AD&entryPoint=ad&clickId=C3558861331">
              <img src="https://contents.lotteon.com/itemimage/LD/66/36/77/65/1_/0/LD663677651_0_1.jpg" className="card-img-top" alt="..." />
            </a>
            <div
              style={{
              width: "100%",
              borderBottom: "1px solid lightgray",
              marginTop: "20px",
                      }}
            ></div>
            <div className="card-body">
              <a href="https://www.lotteon.com/p/product/LD663677651?areaCode=AD&entryPoint=ad&clickId=C3558861331">
                <h5 className="card-title">아이시스8.0 생수 2L*24펫</h5>
                <p className="card-text">⭐4.8 (184) | 월간구매517</p>
                <h5 className="card-price1">16,900<span className="won1">원</span></h5>
                <h5 className="card-price2">16,740<span className="won2">원 💎추가 1%</span></h5>
              </a>
            </div>
          </div>
          <div className="card">
            <a href="https://www.lotteon.com/p/product/LD663677651?areaCode=AD&entryPoint=ad&clickId=C3558861331">
              <img src="https://contents.lotteon.com/itemimage/LD/66/36/77/65/1_/0/LD663677651_0_1.jpg" className="card-img-top" alt="..." />
            </a>
            <div
              style={{
              width: "100%",
              borderBottom: "1px solid lightgray",
              marginTop: "20px",
                      }}
            ></div>
            <div className="card-body">
              <a href="https://www.lotteon.com/p/product/LD663677651?areaCode=AD&entryPoint=ad&clickId=C3558861331">
                <h5 className="card-title">아이시스8.0 생수 2L*24펫</h5>
                <p className="card-text">⭐4.8 (184) | 월간구매517</p>
                <h5 className="card-price1">16,900<span className="won1">원</span></h5>
                <h5 className="card-price2">16,740<span className="won2">원 💎추가 1%</span></h5>
              </a>
            </div>
          </div>
          <div className="card">
            <a href="https://www.lotteon.com/p/product/LD663677651?areaCode=AD&entryPoint=ad&clickId=C3558861331">
              <img src="https://contents.lotteon.com/itemimage/LD/66/36/77/65/1_/0/LD663677651_0_1.jpg" className="card-img-top" alt="..." />
            </a>
            <div className="card-body">
              <a href="https://www.lotteon.com/p/product/LD663677651?areaCode=AD&entryPoint=ad&clickId=C3558861331">              <h5 className="card-title">아이시스8.0 생수 2L*24펫</h5>
                <p className="card-text">⭐4.8 (184) | 월간구매517</p>
                <h5 className="card-price1">16,900<span className="won1">원</span></h5>
                <h5 className="card-price2">16,740<span className="won2">원 💎추가 1%</span></h5>
              </a>
            </div>
          </div>
        </div>
        <div className="hr">
          <hr />
          <ul className="page">
            <a className="nextpage" href="#">1</a>
            <a className="nextpage" href="#">2</a>
            <a className="nextpage" href="#">3</a>
            <a className="nextpage" href="#">4</a>
            <a className="nextpage" href="#">5</a>
            <a className="nextpage" href="#">6</a>
            <a className="nextpage" href="#">...</a>
            <a className="nextpage" href="#">35</a>
          </ul>
        </div>
     </div>
      <Footer/>
    </React.Fragment>



  );
}

export default Song;