import React from  'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';

const ExpenseDashboardPage = () =>(
    <div>
    <ExpenseListFilters/>
    
        This is from my Expense Dashboard Page
        <ExpenseList/>

    </div>
);

export default ExpenseDashboardPage;