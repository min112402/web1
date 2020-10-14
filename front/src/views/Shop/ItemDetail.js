import React from 'react'
import './ItemDetail.css'

class ItemDetail extends React.Component {
    state = {
        name : '',
        thumbnail : '',
        detail : '',
        price : 0        
    }

    constructor(props){
        super(props)
        this.state ={
            name : props.match.params.name,
            path : props.match.path
        }
    }

    componentDidMount() {
        let name = this.state.name
        console.log(name)
        console.log(typeof(name))
        
        fetch("/api/goods/"+name)
            .then(response =>response.json())
            .then(itemDetail => {
                console.log(itemDetail)
                this.setState(itemDetail)
            })
    }


    render(){
        return(
            <div className="itemContainerWrapper">
                <div className="itemContainer">
                    <h2>{this.state.name}</h2>
                    <img src= {this.state.thumbnail}></img>
                    <p>detail:  {this.state.detail}</p>
                    <p>price: {this.state.price}</p>
                </div>
            </div>
        )
    }
}

export default ItemDetail
