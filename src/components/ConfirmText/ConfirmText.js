import { TextField } from '@mui/material';
import { useReducer } from 'react';

const initialState = { inputValue: '', isTextConfirmed: false };

const reducer = (state, action) => {
  switch (action.type) {
    case 'setInputValue': {
      return { ...state, inputValue: action.payload, isTextConfirmed: false };
    }
    case 'checkInputValues': {
      return { ...state, isTextConfirmed: state.inputValue === action.payload };
    }
    default: {
      return state;
    }
  }
};

export const ConfirmText = () => {
  const [{ inputValue, isTextConfirmed }, dispatch] = useReducer(
    reducer,
    initialState
  );

  return (
    <div>
      <div>
        <TextField
          value={inputValue}
          onChange={(event) => {
            dispatch({ type: 'setInputValue', payload: event.target.value });
          }}
        />
      </div>
      <div>
        <TextField
          placeholder="Confirm"
          onChange={(event) => {
            dispatch({ type: 'checkInputValues', payload: event.target.value });
          }}
        />
      </div>
      <div>{isTextConfirmed && 'input values are equal'}</div>
    </div>
  );
};
