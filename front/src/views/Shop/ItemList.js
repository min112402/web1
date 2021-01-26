import React from 'react'
import './ItemList.css'
import {Link}  from "react-router-dom"
import _ from 'lodash'
import frame4 from "../../frame4.png"
import frame2 from "../../frame2.png"

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
        return(
            <div>
                <div className="itemListNav">
                    <button onClick = {() => this.handleSort('production_date')} >date</button>
                    <button onClick = {() => this.handleSort('price')} >price</button>
                    <button onClick = {() => this.handleSort('name')} >name</button>
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
