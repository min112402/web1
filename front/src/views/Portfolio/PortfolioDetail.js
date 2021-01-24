import React from 'react'
import './PortfolioDetail.css'
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
        console.log(details)
        return(            
            <div className="itemDetailContainerWrapper">
                <div className="itemDetailContainer">
                    <div className="itemDetail">
                        <div className ="detailImage">
                            <img src={this.state.image}></img> 
                        </div>
                        <div className = "info">
                            <h3>{this.state.title} </h3>
                            <ColoredLine color="gray"/>
                            <span>{this.state.detail}</span>
                            <ColoredLine color="gray"/>
                            <span>{this.state.production_date}</span>
                        </div>
                    </div>
                    <div>{details}</div>

                </div>
            </div>
        )
    }
}

export default PortfolioDetail
