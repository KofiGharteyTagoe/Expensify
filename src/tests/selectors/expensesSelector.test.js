import getVisibleExpenses from '../../selectors/expenses';
import moment from 'moment';
import expense from '../../tests/fixtures/expenses';

test('Get filtered list from getVisibleExpenses', ()=>{

    const filters ={
        text: 'e',
        sortBy:'date',
        startDate:undefined,
        endDate:undefined
    }
    
    const getExpenses = getVisibleExpenses(expense, filters);
    expect(getExpenses).toEqual([expense[2], expense[1]]);
});

test('should filter by startDate', () =>{
    const filters ={
        text: '',
        sortBy:'date',
        startDate:moment(0),
        endDate:undefined
    }
    const result = getVisibleExpenses(expense, filters);
    expect(result).toEqual([expense[2], expense[0]]);
})

test('should filter by endDate', ()=>{
    const filters ={
        text: '',
        sortBy:'date',
        startDate:undefined,
        endDate:moment(0)
    }
    const result = getVisibleExpenses(expense, filters);
    expect(result).toEqual([expense[0], expense[1]]);
});

test('should sprt by date', ()=>{
    const filters ={
        text: '',
        sortBy:'date',
        startDate:undefined,
        endDate:undefined
    }
    const result = getVisibleExpenses(expense, filters);
    expect(result).toEqual([expense[2], expense[0], expense[1]]);
})

test('should sprt by amount', ()=>{
    const filters ={
        text: '',
        sortBy:'amount',
        startDate:undefined,
        endDate:undefined
    }
    const result = getVisibleExpenses(expense, filters);
    expect(result).toEqual([expense[2], expense[1], expense[0]]);
})

