import moment from 'moment';
import { setStartDate, setEndDate, setTextFilter, sortByAmount, sortByDate } from '../../actions/filters';

test('should generate set start date action obj', () => {
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    type:      'SET_START_DATE',
    startDate: moment(0),
  });
});

test('should generate set end date action obj', () => {
  const action = setEndDate(moment(0));
  expect(action).toEqual({
    type:    'SET_END_DATE',
    endDate: moment(0),
  });
});

test('should set the text filter action obj with input', () => {
  const action = setTextFilter('bill');
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: 'bill',
  });
});

test('should set the text filter action obj with default', () => {
  const action = setTextFilter();
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: '',
  });
});

test('should generate action obj for sort by date', () => {
  const action = sortByDate();
  expect(action).toEqual({
    type: 'SORT_BY_DATE',
  });
});


test('should generate action obj for sort by amount', () => {
  const action = sortByAmount();
  expect(action).toEqual({
    type: 'SORT_BY_AMOUNT',
  });
});

