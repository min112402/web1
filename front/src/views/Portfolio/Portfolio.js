import React from "react"
import { Route,Link } from "react-router-dom"
import PortfolioList from "./PortfolioList"
import PortfolioDetail from "./PortfolioDetail"
import Footer from "../Footer/Footer.js"
import "./Portfolio.css"

function Portfolio ({match}) {
    return (
        <div className="shopContent">
            <div className="body">
                <Route exact path={match.path} component={PortfolioList} />
                <Route path={`${match.path}/:title`} component={PortfolioDetail} />
            </div>
            <Footer/>
        </div>
    )

}


export default Portfolio
