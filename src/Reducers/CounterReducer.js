const initialState = {
    counter: 0
}

const CounterReducer = (state = initialState, action) => {
    switch (action.type) {
        case "PLUS":
            return {
                counter: state.counter += 1
            }
        case "MINUS":
            return {
                counter: state.counter -= 1
            }
        case "DOUBLEPLUS":
            return {
                counter: state.counter += 2
            }
        case "DOUBLEMINUS":
            return {
                counter: state.counter -= 2
            }
        case "MULTIPLICATION":
            return {
                counter: state.counter *= 2
            }
        case "NULL":
            return {
                counter: state.counter = 0
            }
        default:
            return state;
    }
}

export default CounterReducer;