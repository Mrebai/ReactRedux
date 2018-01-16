
const userReducer = (state = {userName : "5oubaib" , age : 23 },action) => {
    switch (action.type){

        case "CHANGENAME":
            state = {
                ...state,
                userName :  action.payload,
            };
            break;

        case "CHANGEAGE":
            state = {
                ...state,
                age :  action.payload
            };
            break;

    }
    return state;
};

export default userReducer ;