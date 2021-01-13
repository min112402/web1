import React from "react"
import { Route,Link } from "react-router-dom"
import ItemList from "./ItemList"
import ItemDetail from "./ItemDetail"
import Footer from "../Footer/Footer.js"
import "./Portfolio.css"

function Portfolio ({match}) {
    return (
        <div className="shopContent">
            <div className="body">
                <Route exact path={match.path} component={ItemList} />
                <Route path={`${match.path}/:name`} component={ItemDetail} />
            </div>
            <Footer/>
        </div>
    )

}


export default Portfolio
