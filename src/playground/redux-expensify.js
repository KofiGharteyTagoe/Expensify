import {createStore, combineReducers} from 'redux';
import uuid from 'uuid';

//Add expense
const addExpense = ({description = '', note = '', amount = 0, createdAt = 0} = {}) =>({
    type: 'ADD_EXPENSE',
    expense:{
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }  
})

//remove expense
const removeExpense = ({id} ={}) =>({
    type: 'REMOVE_EXPENSE',
    id
});

//edit expense

const editExpense = (id, updates) => ({
    type:'EDIT_EXPENSE',
    id,
    updates
});

//set_text_filter

const setTextFilter = (text) => ({
    type:'TEXT_FILTER',
    text
});

//sort_by_date
const sortByDate = () => ({
    type:'SORT_BY_DATE'
});


//sote_by_amount
const sortByAmount = () => ({
    type:'SORT_BY_AMOUNT'
});


//set_start_date

const setStartDate = (date) =>({
    type:'SET_START_DATE',
    date
})
//set_end_date
const setEndDate = (date) =>({
    type:'SET_END_DATE',
    date
})


//Expenses Reducer

const expensesReducerDefaultState =[]; //Define the default state of the array

const expensesReducer = (state = expensesReducerDefaultState, action) =>{

    switch(action.type){

        case 'ADD_EXPENSE': 
            return [
                ... state,
                action.expense
            ]

        case 'REMOVE_EXPENSE':
            return state.filter(({id}) => id !== action.id );

        case 'EDIT_EXPENSE':
            return state.map((expense) =>{
                if (expense.id === action.id){
                    return{
                        ...expense,
                        ...action.updates
                    }
                }else{
                    return expense;
                }
            })

        default: return state;
    }
};


//Filters Reducer

const filtersReducerDefaultState ={ //Define the default state of the object
    text:'', 
    sortBy:'date', 
    startDate: undefined, 
    endDate: undefined}
;

const filterReducer = (state =filtersReducerDefaultState, action) =>{

    switch(action.type){
        case 'TEXT_FILTER':
        return{
            ...state,
            text: action.text
        }

        case 'SORT_BY_DATE':
            return{
                ...state,
                sortBy: 'date'
            }

            case 'SORT_BY_AMOUNT':
            return{
                ...state,
                sortBy: 'amount'
            }

            case 'SET_START_DATE':
            return{
                ...state,
                startDate: action.date
            }

            case 'SET_END_DATE':
            return{
                ...state,
                endDate: action.date
            }
        
        default: return state;
    }
};

//Get visible expenses

const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {

return expenses.filter((expense) =>{
    const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
    const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
    const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

    return startDateMatch && endDateMatch && textMatch;
}).sort((a,b) => {
        if (sortBy === 'date'){
            return a.createdAt < b.createdAt? 1 : -1
        }
        if (sortBy === 'amount'){
            return a.amount < b.amount ? 1 : -1
        }
    });
};

const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filterReducer
    })
);


store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});

const ExpenseOne = store.dispatch(addExpense({description:'Coffee', amount: 100, createdAt: 200}));
const ExpenseTwo = store.dispatch(addExpense({description:'Tea', amount: 200, createdAt: 100}));
const ExpenseThree = store.dispatch(addExpense({description:'Sugar', amount: 20, createdAt: 1000}));

//Remove item
// store.dispatch(removeExpense({id: ExpenseOne.expense.id}));

// store.dispatch(editExpense(ExpenseTwo.expense.id, {amount: 7000}))

// store.dispatch(setTextFilter('co'));
// store.dispatch(setTextFilter(''));

 store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// store.dispatch(setStartDate(150));
//store.dispatch(setEndDate(50));

const demoState = {
    expenses: [{
        id: '',
        description: 'January rent',
        note:'This was the final payment for that address',
        amount: 54500,
        createdAt: 0
    }],
    filters:{
        text: 'rent',
        sortBy: 'amount', //date or amount
        startDate: undefined,
        endDate: undefined
    }
};