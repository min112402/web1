import React from 'react'
import './ItemList.css'
import { Route,Link } from "react-router-dom"
import {Dropdown} from 'react-bootstrap'
import _ from 'lodash'
import frame4 from "../../frame4.png"
import frame2 from "../../frame2.png"

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
	 }
   addComma(num) {
     var regexp = /\B(?=(\d{3})+(?!\d))/g;
     return num.toString().replace(regexp, ',');
   };


    render(){
        const { sortColumn, goods } = this.state;
        const sorted = _.orderBy(goods, [sortColumn.path], [sortColumn.order]);
        return(
            <div>
                <div className="itemListNav">
                  <button onClick = {() => this.handleSort('production_date')} >date</button>
                  <button onClick = {() => this.handleSort('price')} >price</button>
                  <button onClick = {() => this.handleSort('name')} >name</button>
                </div>
                <div className="itemContainerWrapper">
                    <div className="itemContainer">
                        {sorted.map((goods) =>(
                            <Link to= {this.props.match.path + "/"+ goods.name} key = {goods.id}>
                                <div className="item" >
                                    <div className="frameWrapper">
                                        <img className="frame" src={frame4}/>
                                        <img className="thumbnail" src = {goods.thumbnail}  />
                                    </div>
                                    <div className="info">
                                        {goods.name}
                                    </div>
                                    <span>
                                        {this.addComma(goods.price)} &#x20a9;
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
