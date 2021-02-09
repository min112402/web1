import React from 'react'
import './PortfolioList.css'
import {Link}  from "react-router-dom"
import _ from 'lodash'
import title from "../../images/buttons/title.png"
import date from "../../images/buttons/date.png"

class PortfolioList extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            items : [],
            sortColumn : { path : 'production_date', order : 'asc'}
        }
    }
    componentDidMount() {
        fetch("/api/portfolio/")
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
    render(){
        const { sortColumn, items } = this.state;
        const sorted = _.orderBy(items, [sortColumn.path], [sortColumn.order]);
        return(
            <div className="listWrapper">
                <div className="itemListNav">
                    <img src={date} onClick = {() => this.handleSort('production_date')} ></img>
                    <img src={title} onClick = {() => this.handleSort('title')} ></img>
                </div>
                <div className="itemContainerWrapper">
                    <div className="itemContainer">
                        {sorted.map((portfolio) =>(
                            <Link to= {this.props.match.path + "/"+ portfolio.title} key = {portfolio.id}>
                                <div className="item" >
                                    <div className="frameWrapper">
                                        <img className="thumbnail" src = {portfolio.thumbnail}  />
                                    </div>
                                    <div className="info">
                                        {portfolio.title}
                                    </div>

                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}

export default PortfolioList
