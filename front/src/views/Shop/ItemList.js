import React from 'react'
import './ItemList.css'
import { Route,Link } from "react-router-dom"

class ItemList extends React.Component {
    state = {
        goods : []
    }

    componentDidMount() {
        fetch("/api/goods/")
            .then(response =>response.json())
            .then(goodsList => {
                this.setState({goods: goodsList})
            })
    }


    render(){
        return(
            <div className="itemContainerWrapper">
                <div className="itemContainer">
                    {this.state.goods.map((goods) =>(
                        <Link to= {this.props.match.path + "/"+ goods.name} >
                        <div className="item" key = {goods.id}> 
                            <img className="thumbnail" src = {goods.thumbnail}  />
                            <span>
                                {goods.name}
                            </span> 
                            <span>
                                {goods.price}
                            </span>
                        </div>
                        </Link>
                    ))}
                </div>
            </div>

        )
    }
}

export default ItemList
