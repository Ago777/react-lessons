const initialState = {
    list: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case `AAA`: {
            return {
                list: action.payload
            };
        }
        default:
            return state
    }
}