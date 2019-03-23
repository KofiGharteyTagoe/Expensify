import React from  'react';
import moment from 'moment';
import {SingleDatePicker} from 'react-dates';

class ExpenseForm extends React.Component{

    constructor(props){
        super(props);

        this.state={
            description: props.expense ? props.expense.description: '',
            amount: props.expense ? (props.expense.amount / 100).toString() : '',
            note:props.expense ? props.expense.note: '',
            createdAt: props.expense ? moment(props.expense.createdAt): moment(),
            calendarFocused: false,
            validation: ''
        };

    }

    onDescriptionChange = (e) =>{
        const description = e.target.value;

        this.setState(() => ({description}));
    };

    onAmountChange = (e) =>{
        const amount = e.target.value;

            if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)){     
                this.setState(() => ({
                    amount: amount
                }))
            }

    };

    onNoteChange = (e) =>{
        const note = e.target.value;

        this.setState(() => ({
            note: note
        }))
    };

    onDateChange = (createdAt) =>{
        this.setState(() =>({createdAt}));
    };

    onFocusChange = ({focused}) =>{
        this.setState(() => ({
            calendarFocused:focused
        }))
    };

    validate = () => {
    
        if (!this.state.description || !this.state.amount){

            this.setState(() => ({validation: 'Please provide description and amount'}));
            return false;

        } else {
            this.setState(() => ({validation: ''}));
            return true;
        }   
    }

    onSubmit = (e) => {
        e.preventDefault();

        const valid = this.validate();

        if (valid){
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10) * 100,
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note
            })
        }
    }


    render(){
        return(
            <div>
                <p>{this.state.validation}</p>
                <form onSubmit={this.onSubmit}>
                    <input type="text" placeholder="Description" autoFocus value={this.state.description} onChange={this.onDescriptionChange}/>
                    <input type="text" placeholder="Amount" value={this.state.amount} onChange={this.onAmountChange} />
                    <SingleDatePicker
                        date={this.state.createdAt}
                        onDateChange={this.onDateChange}
                        focused={this.state.calendarFocused}
                        onFocusChange={this.onFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={() => false}
                    />
                    <textarea placeholder="add a note for your expenses (optional)" value={this.state.note} onChange={this.onNoteChange}>  </textarea>
                    <button type="submit"> Add expense </button>
                </form>
            </div>
        )
    }
}

export default ExpenseForm;