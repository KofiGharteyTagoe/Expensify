import {createStore} from 'redux';

// Action generators

const incrementCount = ({incrementBy=1} ={}) =>({
    type: 'INCREMENT',
    incrementBy: typeof incrementBy === 'number' ? incrementBy : 1
});

const decrementCount = ({decrementBy=-1} ={}) => ({
    type: 'DECREMENT',
    decrementBy: typeof decrementBy === 'number' ? decrementBy : -1
})

const resetCount = () => ({
    type: 'RESET'
})

const setCount = ({set} = {}) => ({
    type: 'SET',
    count: set
})

// Reducers

//1. Pure functions (The output is only determined by their input)
//2. Never change state or action - Just return a new instance

const countReducer = (state={count: 0}, action) =>{

    switch (action.type){
        case 'INCREMENT':
        return{
            count: state.count + action.incrementBy
        };

        case 'DECREMENT':
        return{
            count: state.count - action.decrementBy
        }; 

        case 'RESET':
        return{
            count: 0
        };

        case 'SET':
        return{
            count: action.count
        };
        
        default: return state;


    }

};

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() =>{
    console.log(store.getState());
});

store.dispatch(incrementCount({incrementBy: 5}));


store.dispatch(decrementCount({decrementBy: 10}));

store.dispatch(resetCount());


store.dispatch(setCount({set: 151}));
