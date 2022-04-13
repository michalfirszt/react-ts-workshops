import { TextField, TextFieldProps, Typography } from '@mui/material';
import {
  ChangeEvent,
  isValidElement,
  ReactNode,
  useCallback,
  useState,
} from 'react';

type Props = {
  defaultValue?: string;
  inputTitle: string | ReactNode;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  textFieldProps?: TextFieldProps;
};

export const TextInput = ({
  defaultValue = '',
  inputTitle,
  onChange,
  textFieldProps,
}: Props): JSX.Element => {
  const [inputValue, setInputValue] = useState<string>(defaultValue);

  const handleInputChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setInputValue(event.target.value);

      onChange?.(event);
    },
    [onChange]
  );

  return (
    <div>
      <div>
        {isValidElement(inputTitle) ? (
          inputTitle
        ) : (
          <Typography>{inputTitle}</Typography>
        )}
      </div>
      <div>
        <TextField
          value={inputValue}
          onChange={handleInputChange}
          {...textFieldProps}
        />
      </div>
    </div>
  );
};
