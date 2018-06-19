import React from "react";


export default class Jumbotron extends React.Component {
    state = {
        navbarHeight: 0
    }

    componentDidMount() {
        this.setState({ navbarHeight: document.querySelector('.navbar').clientHeight })
    }

    render() {
        return (
            <div className="container">
                <div style={{ background: "#00CED1",height: 200,  clear: 'both'}} className="jumbotron">
                {this.props.children}
            </div>
            </div>
        )
    }
}
