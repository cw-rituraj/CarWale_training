
const initialState = {
  data: [],
  status: "default",
};

export default function (state = initialState, action) {
    if (action.type === 'loading') {
        console.log('Loading state');
        return {
            ...state,
            status:'loading'
        }
    } else if (action.type === 'success') {
        return {
            ...state, 
            status: "success",
            data:action.payload,
        } 
    }
    else {
        return state;
    }
}