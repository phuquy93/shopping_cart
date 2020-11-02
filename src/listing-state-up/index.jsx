import React, { Component } from 'react';
import Childone from "./childone";
import Childtwo from "./childtwo";

class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Nguyen Quy",
        };

        this.handleName = this.handleName.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }

    handleName() {
        this.setState({
            name: "CyperSoft",
        });
    }

    handleReset(data) {
        this.setState({
            name: data,
        });
    }

    render() {
        return (
            <div>
                <h3>Cha</h3>
                <p>Name: {this.state.name}</p>

                <h3>Con 1</h3>
                <Childone name={this.state.name} resetname={this.handleReset} />

                <h3>Con 2</h3>
                <Childtwo name={this.state.name} />

                <button onClick={this.handleName}>Change name</button>
            </div>
        );
    }
}

export default index;