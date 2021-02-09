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
        price : 0,
        production_date : '',
        link : '',
        images:[],
        detail : '',
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
        fetch("/api/item/"+name)
            .then(response =>response.json())
            .then(itemDetail => {
                console.log(itemDetail)
                this.setState(itemDetail)
            })
    }

    render(){
        const details = _.map(this.state.images,(d=> <img src = {d.image}/>))
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
                            <div>&#x20a9;{this.state.price && this.state.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</div>
                            <ColoredLine color="gray"/>
                            <br/>
                            <a className="button" href={this.state.link}>BUY</a>
                            <ColoredLine color="gray"/>
                            <br/>
                            <div className="detailtxt">{this.state.detail}</div>
                        </div>
                    </div>
                    <div className = "details">{details}</div>

                </div>
            </div>
        )
    }
}

export default ItemDetail
