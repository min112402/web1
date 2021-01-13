import React from 'react'
import './ItemDetail.css'

const ColoredLine = ({ color }) => (
    <hr
      style={{
        borderColor: color,
      }}
    />
  );

class ItemDetail extends React.Component {
    state = {
        name : '',
        image : '',
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
            <div className="itemDetailContainerWrapper">
                <div className="itemDetailContainer">
                    <div className="itemDetail">
                        <div className ="detailImage">
                            <img src={this.state.image}></img> 
                        </div>
                        <div className = "info">
                            <h3>{this.state.name} </h3>
                            <ColoredLine color="gray"/>
                            <span>price: {this.state.price}  </span>
                            <ColoredLine color="gray"/>
                            <span>link <a href="https://smartstore.naver.com/kwonthefactory">스토어</a>  </span>
                            <ColoredLine color="gray"/>
                            <span>{this.state.detail}</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ItemDetail
