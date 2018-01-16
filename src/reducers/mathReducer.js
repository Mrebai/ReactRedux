const mathReducer = (state = {result : 1 , lastValue : [] },action) => {
    switch (action.type){
        case "ADD":

            state = {
                ...state,
                result : state.result + action.payload,
                lastValue : [... state.lastValue , action.payload]
            };


            break;
        case "SUBSTRACT":
            state = {
                ...state,
                result : state.result - action.payload
            };
            state.lastValue.push(state.payload)

            break;

    }
    return state;
};

export default mathReducer