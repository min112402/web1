import React from "react"
import { Route,Link } from "react-router-dom"
import ItemList from "./ItemList"
import ItemDetail from "./ItemDetail"
import logo from "../../logo.png"

import "./Shop.css"

const ColoredLine = ({ color }) => (
    <hr
      style={{
        borderColor: color,
      }}
    />
  );

function Shop ({match}) {
    return (
        <div className="shopContent">
            <div className="body">
                <Route exact path={match.path} component={ItemList} />
                <Route path={`${match.path}/:name`} component={ItemDetail} />
            </div>
            <div className="footer">
                <div className="footerContent">
                    <Link to="/"><img className="footerLogo" src={logo} alt="logo"/></Link>
                    <span></span>
                    <ColoredLine color="gray"></ColoredLine>
                </div>
            </div>
        </div>        
    )

}


export default Shop
