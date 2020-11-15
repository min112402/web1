import React from 'react'
import './ItemList.css'
import { Route,Link } from "react-router-dom"
import {Dropdown} from 'react-bootstrap'
class ItemList extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            goods : []
        }
        this.handleSort = this.handleSortL.bind(this)
        
    }
    handleSortL = ()=>{
        this.setState(({goods}) => ({
            goods: goods.sort(this.ascendingPrice)
        }))
    }
    ascendingPrice(a,b){
        return a.price<b.price
    }
    descendingPrice(a,b){
        return a.price>b.price
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
                        <Dropdown.Item onClick = {this.handleSort} >낮은가격순</Dropdown.Item>
                        <Dropdown.Item >높은가격순</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <button onClick = {this.handleSort}  >낮은가격순</button>
                </div>
            <div className="itemContainerWrapper">
                <div className="itemContainer">
                    {this.state.goods.map((goods) =>(
                        <Link to= {this.props.match.path + "/"+ goods.name} key = {goods.id}>
                        <div className="item" > 
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
