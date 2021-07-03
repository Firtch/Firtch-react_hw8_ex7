import React from "react";

class Radar extends React.Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            currSpeed: 0,
        }

        this.inputRef = React.createRef();
        
    }


    handleChange(e) {
        this.setState({currSpeed: e.target.value});
      }


    render() {
        const high = "Превышена скорость!";
        const low = "Скорость допустима";
        return (
            <div>
                <input type="number" value={this.state.currSpeed} onChange={this.handleChange} />                
                <h1>{this.state.currSpeed <= this.props.maxSpeed ? low : high}</h1>
            </div>
        );
    }       
    
}

Radar.defaultProps = {
    maxSpeed: 0,    
};

export default Radar;