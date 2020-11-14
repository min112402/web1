import React from 'react'
import './ItemList.css'
import { Route,Link } from "react-router-dom"
import {Dropdown} from 'react-bootstrap'
class ItemList extends React.Component {
    state = {
        goods : []
    }
    handleSort = (cmp)=>{
        this.setState(prevState => ({
            goods: prevState.goods.sort(cmp)
        }))
    }
    ascendingPrice(a,b){
        return a.price<b.price
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
            <div>
                <div className="itemListNav"> 
                <Dropdown>
                    <Dropdown.Toggle id="dropdown-basic">
                        정렬 방식
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item  >신규상품순</Dropdown.Item>
                        <Dropdown.Item  >낮은가격순</Dropdown.Item>
                        <Dropdown.Item >높은가격순</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

                </div>
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
            </div>
        )
    }
}

export default ItemList
