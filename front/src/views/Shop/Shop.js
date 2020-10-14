import React from 'react'
import './Shop.css'

class Shop extends React.Component {
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
                        <div className="item" key = {goods.id}> 
                            <img src = {goods.thumbnail}  />
                            <span>
                            {goods.name} 
                            </span>
                            <span>
                            {goods.price}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

export default Shop
