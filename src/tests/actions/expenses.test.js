import { addExpense, editExpense, removeExpense} from '../../actions/expenses';

//Remove expense
test('Should set up remove expense action object', () =>{
    const action = removeExpense({id: '12345432'});
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '12345432'
})
})

test('Should edit expense action object', ()=>{
    const action = editExpense( '122324234',{description:'This is only a test'});
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id:'122324234',
        updates:{
            description:'This is only a test'
        }
    })
});

//add expense
test('Should add expense action object', ()=>{
    const expenseData={
        description:'Description Test',
        note:'Note Test',
        amount:1234234,
        createdAt:123123123
    }
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense:{
            ...expenseData,
            id: expect.any(String)
        }
    })
})

test('Should add expense action object with default values', ()=>{
    const action = addExpense({});
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense:{
            description:'',
            note:'',
            amount:0,
            createdAt:0,
            id: expect.any(String)
        }
    })
})