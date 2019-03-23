
//set_text_filter

export const setTextFilter = (text) => ({
    type:'TEXT_FILTER',
    text
});

//sort_by_date
export const sortByDate = () => ({
    type:'SORT_BY_DATE'
});


//sote_by_amount
export const sortByAmount = () => ({
    type:'SORT_BY_AMOUNT'
});


//set_start_date

export const setStartDate = (date) =>({
    type:'SET_START_DATE',
    date
})
//set_end_date
export const setEndDate = (date) =>({
    type:'SET_END_DATE',
    date
})
