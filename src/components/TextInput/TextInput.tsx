import { Button, TextField, TextFieldProps, Typography } from '@mui/material';
import {
  ChangeEvent,
  isValidElement,
  ReactNode,
  useCallback,
  useRef,
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
  const inputRef = useRef<HTMLInputElement>(null);
  const [inputValue, setInputValue] = useState<string>(defaultValue);

  const handleInputChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>): void => {
      setInputValue(event.target.value);

      onChange?.(event);
    },
    [onChange]
  );

  const focusInput = useCallback((): void => {
    inputRef.current?.focus();
  }, [inputRef]);

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
          inputRef={inputRef}
          value={inputValue}
          onChange={handleInputChange}
          {...textFieldProps}
        />
      </div>
      <div>
        <Button onClick={focusInput}>Start typing</Button>
      </div>
    </div>
  );
};
