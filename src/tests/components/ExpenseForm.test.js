import React from  'react';
import {shallow} from 'enzyme';
import ExpenseFrom from '../../components/ExpenseFrom';
import expenses from '../fixtures/expenses';
import moment from 'moment';

test('should render ExpenseForm correctly', ()=>{
    const wrapper = shallow(<ExpenseFrom/>);
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseForm with data correctly', ()=>{

    const wrapper = shallow(<ExpenseFrom expense={expenses[2]}/>);
    expect(wrapper).toMatchSnapshot();
});

test('should render error for invalid form submission in ExpenseForm', ()=>{

    const wrapper = shallow(<ExpenseFrom />);
    wrapper.find('form').simulate('submit', {
        preventDefault: () =>{}
    });
    expect(wrapper.state('validation').length).toBeGreaterThan(0);
    expect(wrapper).toMatchSnapshot();
});

test('should set description on input change', () =>{
    const value = 'New description';

    const wrapper = shallow(<ExpenseFrom/>);
    wrapper.find('input').at(0).simulate('change', {
        target: {value}
    });

    expect(wrapper.state('description')).toBe(value);
})

test('should set note on text area change', () =>{
    const value = 'New Note';

    const wrapper = shallow(<ExpenseFrom/>);
    wrapper.find('textarea').simulate('change', {
        target: {value}
    });

    expect(wrapper.state('note')).toBe(value);
})

//Amount 1- valid

test('should set amount if valid input', () =>{
    const value = '23.50';

    const wrapper = shallow(<ExpenseFrom/>);
    wrapper.find('input').at(1).simulate('change', {
        target: {value}
    });

    expect(wrapper.state('amount')).toBe(value);
})

//Amount 2- Invalid
test('should not set amount if valid input', () =>{
    const value = '12.122';

    const wrapper = shallow(<ExpenseFrom/>);
    wrapper.find('input').at(1).simulate('change', {
        target: {value}
    });

    expect(wrapper.state('amount')).toBe('');
})

test('should call onSubmit prop for valid form submission', () =>{

    const onSubmitSpy = jest.fn();
    const wrapper = shallow(<ExpenseFrom expense={expenses[0]} onSubmit={onSubmitSpy}/>);

    wrapper.find('form').simulate('submit', {
        preventDefault: () => {}
    });
    expect(wrapper.state('validation')).toBe('');
    expect(onSubmitSpy).toHaveBeenCalledWith({
        description: expenses[0].description,
        amount: expenses[0].amount,
        createdAt: expenses[0].createdAt,
        note: expenses[0].note
    })
});

test('should set new date on date change', () =>{
    const now = moment();
    const wrapper = shallow(<ExpenseFrom/>);

    wrapper.find('SingleDatePicker').prop('onDateChange')(now);
    expect(wrapper.state('createdAt')).toEqual(now);
 });

 test('should set calendar focus on change', () =>{
    const focused = true;
    const wrapper = shallow(<ExpenseFrom/>);

    wrapper.find('SingleDatePicker').prop('onFocusChange')({focused});
    expect(wrapper.state('calendarFocused')).toBe(focused);
 });