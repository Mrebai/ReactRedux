export function add(num) {
    return( {type: "ADD",
            payload: num}
    )
};

export function sub(num) {
    return( {type: "SUBSTRACT",
            payload: num}
    )
}