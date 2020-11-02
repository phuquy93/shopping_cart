import React, { Component } from 'react';

class childone extends Component {
    constructor(props) {
        super(props);

        this.resetname = this.resetname.bind(this);
    }

    resetname() {
        this.props.resetname("Cypersoft");
    }

    render() {
        return (
            <div>
                <p>Name: {this.props.name}</p>

                <button onClick={this.resetname}>Change name 2</button>
            </div>
        );
    }
}

export default childone;