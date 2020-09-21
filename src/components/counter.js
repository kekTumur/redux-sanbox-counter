import React from 'react'
import { connect } from 'react-redux';
import * as actions from '../actions';
import { bindActionCreators } from 'redux';
import './counter.css';

const Counter = ({ counter, inc, dec, rnd}) => {
    return (
        <div className="jumbotron">
            <h2>{counter}</h2>
            <button onClick={dec} className="btn btn-primary btn-lg">-</button>
            <button onClick={inc} className="btn btn-primary btn-lg">+</button>
            <button onClick={rnd} className="btn btn-primary btn-lg">rnd</button>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        counter: state
    };
}

// const mapDispatchToProps = (dispatch) => {
//     return bindActionCreators(actions, dispatch);
// }

export default connect(mapStateToProps, actions)(Counter);