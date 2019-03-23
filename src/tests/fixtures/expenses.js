import moment from 'moment';

export default [{
    id: '1',
    description: 'Gum',
    note:'Get me Gum',
    amount: 195,
    createdAt: 0
},
{
    id: '2',
    description: 'Rent',
    note:'Get me rent',
    amount: 243,
    createdAt: moment(0).subtract(4, 'days').valueOf()
},
{
    id: '3',
    description: 'Credit Card',
    note:'Get me come credit card',
    amount: 675,
    createdAt: moment(0).add(4, 'days').valueOf()
}]