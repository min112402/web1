import React from "react"
import { Route, useRouteMatch } from "react-router-dom"
import ItemList from "./ItemList"
import ItemDetail from "./ItemDetail"



function Shop ({match}) {
    return (
        <div>
            <Route exact path={match.path} component={ItemList} />
            <Route path={`${match.path}/:name`} component={ItemDetail} />
        </div>
    )

}


export default Shop
