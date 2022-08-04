import React from "react";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import SearchPage from "./SearchPage";
import RecommendedVideo from "./RecommendedVideo";
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";



function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Router>
          {/* Header */}
          <Header />    
          <Switch>
            <Route path="/search/:searchTerm">
              <section id="AppPages" className="App__page">
                  {/* Sidebar */}
                  <Sidebar />
                  {/* Search Page */}
                  <SearchPage />         
              </section>
            </Route>
            <Route path="/">  
              <section id="AppPages" className="App__page">
                  {/* Sidebar */}
                  <Sidebar />
                  {/* Recommended Video */}
                  <RecommendedVideo />                
              </section>  
            </Route>
          </Switch>
        </Router>



      </div>
    </div>
  );
}

export default App;
