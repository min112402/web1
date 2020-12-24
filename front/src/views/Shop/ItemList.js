import React from 'react'
import './ItemList.css'
import { Route,Link } from "react-router-dom"
import {Dropdown} from 'react-bootstrap'
<<<<<<< HEAD
import _ from 'lodash'
=======
import frame from "../../frame0.png"
import frame1 from "../../frame1.png"
class ItemList extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            goods : [],
            sortColumn : { path : 'production_date', order : 'asc'}
        }
    }
    componentDidMount() {
        fetch("/api/goods/")
            .then(response =>response.json())
            .then(goodsList => {
                this.setState({goods: goodsList})
            })
    }
    handleSort(path) {
		      const sortColumn = { ...this.state.sortColumn };
		      if (sortColumn.path === path) sortColumn.order = sortColumn.order === 'asc' ? 'desc' : 'asc';
		      else {
			           sortColumn.path = path;
			           sortColumn.order = 'asc';
		           }
		      this.setState({ sortColumn });
	 };


    render(){
        const { sortColumn, goods } = this.state;
        const sorted = _.orderBy(goods, [sortColumn.path], [sortColumn.order]);
        return(
            <div>
                <div className="itemListNav">
                  <button onClick = {() => this.handleSort('name')} >날짜</button>
                  <button onClick = {() => this.handleSort('production_date')} >가격</button>
                  <button onClick = {() => this.handleSort('price')} >이름</button>
                </div>
            <div className="itemContainerWrapper">
                <div className="itemContainer">
                    {sorted.map((goods) =>(
                        <Link to= {this.props.match.path + "/"+ goods.name} key = {goods.id}>
<<<<<<< HEAD
                        <div className="item" >
                            <img className="thumbnail" src = {goods.thumbnail}  />
=======
                        <div className="item" >
                            <div className="frameWrapper">
                                <div className="frame">
                                    <div className="topLeft"><img src={frame}></img> </div>
                                    <div className="topRight"><img src={frame1}></img> </div>
                                    <div className="bottomLeft"><img src={frame1}></img> </div>
                                    <div className="bottomRight"><img src={frame}></img> </div>
                                </div>
                                <img className="thumbnail" src = {goods.thumbnail}  />
                            </div>
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
