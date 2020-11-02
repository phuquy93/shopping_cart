import React, { Component } from 'react'
import Child from "./child";
import Childprops from "./childProps";

export default class props extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Nguyen Quy",
            lop: "52E",
        };

        this.handleChangeinfo = this.handleChangeinfo.bind(this);
    }
    handleChangeinfo() {
        this.setState({
            name: "Cypersoft",
            lop: "52EE",
        });
    }
    render() {
        return (
            <div>
                <h3>Props</h3>
                <Child name={this.state.name} lop={this.state.lop} />
                <Childprops>
                    <div>
                        <h4>Demo Children Props</h4>
                        <p>User name: {this.state.name}</p>
                        <p>Lop: {this.state.lop}</p>
                    </div>
                </Childprops>
                <button onClick={this.handleChangeinfo}>Change info</button>
            </div>
        )
    }
}
