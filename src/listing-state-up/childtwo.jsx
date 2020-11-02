import React, { Component } from 'react';

class childtwo extends Component {
    render() {
        return (
            <div>
                <p>Name: {this.props.name}</p>
            </div>
        );
    }
}

export default childtwo;