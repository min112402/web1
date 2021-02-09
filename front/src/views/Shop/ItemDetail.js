import React from 'react'
import './ItemDetail.css'
import _ from 'lodash'

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
        price : 0,
        link : '',
        images:[],
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

        fetch("/api/item/"+name)
            .then(response =>response.json())
            .then(itemDetail => {
                console.log(itemDetail)
                this.setState(itemDetail)
            })
    }


    render(){
        const details = _.map(this.state.images,(detail=> <img src = {detail.image}/>))
        const detailText = typeof this.state.detail === String ? this.state.detail.split('\n').map( line => {return (<p>{line}<br/></p>)}) : ""
        return(
            <div className="itemDetailContainerWrapper">
                <div className="itemDetailContainer">
                    <div className="itemDetail">
                        <div className ="detailImage">
                            <img src={this.state.image}></img>
                        </div>
                        <div className = "info">
                            <div className="name">{this.state.name} </div>
                            <ColoredLine color="gray"/>
                            <div>&#x20a9; {this.state.price}</div>
                            <ColoredLine color="gray"/>
                            <br/>
                            <a className="button" href={this.state.link}>BUY</a>
                            <ColoredLine color="gray"/>
                            <br/>
                            <div>{detailText}</div>
                        </div>
                    </div>
                    <div className = "details">{details}</div>

                </div>
            </div>
        )
    }
}

export default ItemDetail
