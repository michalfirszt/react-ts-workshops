import { Button, TextField, Typography } from '@mui/material';
import { isValidElement, useCallback, useRef, useState } from 'react';

export const TextInput = ({
  defaultValue = '',
  inputTitle,
  onChange,
  textFieldProps,
}) => {
  const inputRef = useRef(null);
  const [inputValue, setInputValue] = useState(defaultValue);

  const handleInputChange = useCallback(
    (event) => {
      setInputValue(event.target.value);

      onChange?.(event);
    },
    [onChange]
  );

  const focusInput = useCallback(() => {
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
