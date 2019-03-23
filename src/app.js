import React from  'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import 'normalize.css/normalize.css'; // Do this to make sure we reset all browsers to have the same styling and allow us to build on it
import './Styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

import {addExpense} from './actions/expenses';
import {setTextFilter} from './actions/filters';
import getVisibleExpenses from './selectors/expenses';



const store = configureStore();

store.dispatch(addExpense({description:'Water bill', note:'Water bill', amount:100, createdAt:100}));
store.dispatch(addExpense({description:'Gas bill', note:'Gass bill', amount:200, createdAt:101}));
store.dispatch(addExpense({description:'Rent', note:'Gass bill', amount:1095, createdAt:1000}));
store.dispatch(addExpense({description:'Shed', note:'Gass bill', amount:10950, createdAt:50}));

const state= store.getState();
const visibleExpenses =  getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

const jsx = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>

);

ReactDOM.render(jsx, document.getElementById('app'));