import React, { Component } from 'react'

export default class DisplayData extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.formData.firstName}</h1>
                <h1>{this.props.formData.LastName}</h1>
            </div>
        )
    }
}
