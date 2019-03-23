import expenseReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';
import moment from 'moment';

test('should set default state', () => {
    const state= expenseReducer(undefined, {type: '@@INIT'});
    
    expect(state).toEqual([]);
})

test('should remove expense by id', ()=>{
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    };

    const state = expenseReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]]);
})

test('should not remove expense if id not found', ()=>{
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    };

    const state = expenseReducer(expenses, action);
    expect(state).toEqual(expenses);
})

test('should add an expense', () =>{
    const newExpense = 
        {
            id: '4',
            description: 'TestingAdd',
            note:'Tested Add',
            amount: 13455,
            createdAt: 100
        }
    const action = {
        type: 'ADD_EXPENSE',
        newExpense
    }

    const state = expenseReducer(expenses, action);
    expect(state).toEqual([...expenses,expenses[3]])
})

test('should edit an expense', () =>{
    const updates={
        description: 'GumChange',
        note:'ChangedGet me Gum',
        amount: 1095,
        createdAt: 20
    }
    const action ={
        type:'EDIT_EXPENSE',
        id: expenses[0].id,
        updates
    }
        
    const state = expenseReducer(expenses, action);
    expect(state[0].amount).toBe(1095);
});

test('should not edit an expense if not found', () => {

    const update={

        description: 'GumChange',
        note:'ChangedGet me Gum',
    }

    const action ={
        type:'EDIT_EXPENSE',
        id: '4',
        update
    }

    const state = expenseReducer(expenses, action);
    expect(state).toEqual(expenses);
})