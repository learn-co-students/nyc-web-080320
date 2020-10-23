


export function getDogs() {
    // 1. Wait
    // thunk 
    return function () {
        //execute our "true" dispatch
        fetch("http://localhost:5000/apiResponse")
            .then(res => res.json())
            .then(api => dispatch({ type: "GET_DOGS", payload: api }))
            .catch(console.log)
    }

    return { payload: api }
    // how can we make the dispatch wait? 

}