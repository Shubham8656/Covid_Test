// import addItemAction from '../Action/addItemAction'
const initialState={
    count:0,
    positive:0
}

const rootReducer = (state=initialState,action) => {
    switch(action.type){
           
        case 'YES':        
            return{
            ...state,
            positive:state.positive+1,
            count:state.count+1
        }
        case 'NO':        
            return{
            ...state,
            count:state.count+1
        }
        case 'SET_TO_INITIAL':
            return{
            ...state,
            count:0,
            positive:0
        }
        default:
            return state
    }
}

export default rootReducer;
