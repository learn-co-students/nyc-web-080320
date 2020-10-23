


export let getDogs = () => {
    // 1. Wait
    // thunk 
    return function (dispatch) {
        //execute our "true" dispatch
        fetch("http://localhost:5000/apiResponse")
            .then(res => res.json())
            .then(api => dispatch({ type: "GET_DOGS", payload: api }))
            .catch(console.log)
    }


}

// export let updateDog = (data) => {
//     // 1. Wait
//     // thunk 
//     return function (dispatch) {
//         //execute our "true" dispatch
//         fetch("http://localhost:5000/apiResponse")
//             .then(res => res.json())
//             .then(api => dispatch({ type: "GET_DOGS", payload: api }))
//             .catch(console.log)
//     }


// }