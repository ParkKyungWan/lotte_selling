import React from "react";
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import './young.css'


class Young extends React.Component{
 
  render() {

    return (
      <div className="App">
        
          <div className = "HeaderSection">
            <Header/>
          </div>

          <div className = "MainSection">
            <Main/>
          </div>
          <div>
            <Footer />
          </div>
       
      </div>
    );
  }
}
export default Young;