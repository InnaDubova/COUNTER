import React from "react";
import { connect } from "react-redux";

import { counterPlus } from "../../Actions/CounterActions";
import { counterMinus } from "../../Actions/CounterActions";
import { counterNull } from "../../Actions/CounterActions";
import { counterDouble } from "../../Actions/CounterActions";
import { counterDoubleMinus } from "../../Actions/CounterActions";
import { counterMultiplication } from "../../Actions/CounterActions";

const Counter = ({counter,counterPlus,counterMinus,counterNull,counterDouble,counterDoubleMinus,counterMultiplication}) => {
    return(
        <div className="qty mt-5">
            <span className="minus bg-dark" onClick={counterMinus} >-</span>
            <input type="number" className="count" name="qty" value={counter} /> 
            <span className="plus bg-dark tmp" onClick={counterPlus} >+</span>
            <button type="submit" onClick={counterNull} >Null</button>
            <div className="next">
            <span className="minus bg-dark" onClick={counterDoubleMinus} >-</span>
            <input type="number" className="count" name="qty" value={counter} /> 
            <span className="plus bg-dark" onClick={counterDouble} >+</span>
            </div>
            <div className="next">
            <span className="minus bg-dark" >-</span>
            <input type="number" className="count" name="qty" value={counter} /> 
            <span className="plus bg-dark" onClick={counterMultiplication} >+</span>
            </div>
        </div>
    )
}

const mapStateToProps = ({ CounterReducer }) => {
    const { counter } = CounterReducer;
    return { counter };
}
const mapDispatchToProps = {
    counterPlus,
    counterMinus,
    counterNull,
    counterDouble,
    counterDoubleMinus,
    counterMultiplication
}
export default connect(mapStateToProps, mapDispatchToProps)(Counter);