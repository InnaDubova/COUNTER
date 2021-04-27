import React from "react";

const Counter = () => {
    return(
        <div class="qty mt-5">
            <span class="minus bg-dark">-</span>
            <input type="number" class="count" name="qty" value="1" /> 
            <span class="plus bg-dark">+</span>
        </div>
    )
}

export default Counter;