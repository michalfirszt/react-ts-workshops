import { TextField } from '@mui/material';
import { ChangeEvent, useReducer } from 'react';

type Action =
  | { type: 'setInputValue'; payload: string }
  | { type: 'checkInputValues'; payload: string };

type State = { inputValue: string; isTextConfirmed: boolean };

const initialState: State = { inputValue: '', isTextConfirmed: false };

const reducer = (state: State, action: Action) => {
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

export const ConfirmText = (): JSX.Element => {
  const [{ inputValue, isTextConfirmed }, dispatch] = useReducer(
    reducer,
    initialState
  );

  return (
    <div>
      <div>
        <TextField
          value={inputValue}
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            dispatch({ type: 'setInputValue', payload: event.target.value });
          }}
        />
      </div>
      <div>
        <TextField
          placeholder="Confirm"
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            dispatch({ type: 'checkInputValues', payload: event.target.value });
          }}
        />
      </div>
      <div>{isTextConfirmed && 'input values are equal'}</div>
    </div>
  );
};
