import React from 'react'
import '../Shop/ItemDetail.css'
import _ from 'lodash'

const ColoredLine = ({ color }) => (
    <hr
      style={{
        borderColor: color,
      }}
    />
  );

class PortfolioDetail extends React.Component {
    state = {
        title : '',
        image : '',
        detail : '',
        production_date:'',
        link : '',
        images:[],
    }

    constructor(props){
        super(props)
        this.state ={
            title : props.match.params.title,
            path : props.match.path
        }
    }


    componentDidMount() {
        let title = this.state.title

        fetch("/api/portfolio/"+title)
            .then(response =>response.json())
            .then(itemDetail => {
                console.log(itemDetail)
                this.setState(itemDetail)
            })
    }


    render(){
        const details = _.map(this.state.images,(detail=> <img src = {detail.image}/>))
        const detailText = typeof this.state.detail === 'string' ? this.state.detail.split('\n').map( line => {return (<p>{line}<br/></p>)}) : ""
        return(
            <div className="itemDetailContainerWrapper">
                <div className="itemDetailContainer">
                    <div className="itemDetail">
                        <div className ="detailImage">
                            <img src={this.state.image}></img>
                        </div>
                        <div className = "info">
                            <div className="name">{this.state.title} </div>
                            <ColoredLine color="gray"/>
                            <div className="detailtxt">{detailText}</div>
                            <ColoredLine color="gray"/>
                            <div>{this.state.production_date}</div>
                        </div>
                    </div>
                    <div>{details}</div>

                </div>
            </div>
        )
    }
}

export default PortfolioDetail
