import React from 'react'
import './ItemList.css'
import {Link}  from "react-router-dom"
import _ from 'lodash'
import frame4 from "../../frame4.png"
import frame2 from "../../frame2.png"
import name from "../../NAME.png"
import date from "../../DATE.png"
import price from "../../PRICE.png"

class ItemList extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            items : [],
            sortColumn : { path : 'production_date', order : 'asc'}
        }
    }
    componentDidMount() {
        fetch("/api/item/")
            .then(response =>response.json())
            .then(itemList => {
                this.setState({items: itemList})
            })
    }
    // displaying(e){
    //   let highlighted = document.getElementById(e);
    //   console.log(e);
    //   highlighted.style.color = 'gold';
    // }
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
        const { sortColumn, items } = this.state;
        const sorted = _.orderBy(items, [sortColumn.path], [sortColumn.order]);
        //this.displaying(sortColumn.path);
        return(
            <div>
                <div className="itemListNav">
                    <img src={date}  id="production_date" onClick = {() => this.handleSort('production_date')} ></img>
                    <img src={price} id="price" onClick = {() => this.handleSort('price')} ></img>
                    <img src={name} id="name" onClick = {() => this.handleSort('name')}></img>
                </div>
                <div className="itemContainerWrapper">
                    <div className="itemContainer">
                        {sorted.map((item) =>(
                            <Link to= {this.props.match.path + "/"+ item.name} key = {item.id}>
                                <div className="item" >
                                    <div className="frameWrapper">
                                        <img className="frame" src={frame4}/>
                                        <img className="thumbnail" src = {item.thumbnail}  />
                                    </div>
                                    <div className="info">
                                        {item.name}
                                    </div>
                                    <span>
                                        {this.addComma(item.price)} &#x20a9;
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
