import React, { Component } from 'react'
import axios from 'axios'

import { getTodos } from '../actions/actions'
import { connect } from 'react-redux'

class Home extends Component {
    constructor(props) {
        super(props)
        console.log("1 Inside constructor")

    }

    componentWillMount() {
        console.log("2 Inside componentWillMount")
    }

    componentDidMount() {
        console.log("4 Inside componentDidMount");
        this.props.getTodos();
    }

    componentWillUnmount() {
        console.log("5 Inside componentWillUnmount")
    }

    renderTodos = () => {
        return this.props.todos.map((val, i) => {
            return <div>{val.title}</div>
        })
    }

    render() {
        debugger
        console.log("3 Inside render")
        return (
            <div>
                {this.renderTodos()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    debugger
    const { todos } = state;
    return {
        todos
    }
}

// const _home = connect(mapStateToProps, { getTodos })(Home);
// export { _home as Home };

export default connect(mapStateToProps, { getTodos })(Home);