import { ConfirmText, TextInput } from '@components';
import { ThemeContext } from '@context/themeContext';
import { Switch, Typography } from '@mui/material';
import { useCallback, useContext } from 'react';

export const HomeView = (): JSX.Element => {
  const { isThemeDark, setIsThemeDark } = useContext(ThemeContext);

  const toggleDarkMode = useCallback((): void => {
    setIsThemeDark?.((prevState) => !prevState);
  }, [setIsThemeDark]);

  return (
    <div>
      <div>
        <TextInput
          inputTitle={
            <div>
              <Typography>Input title</Typography>
            </div>
          }
          onChange={(event) =>
            console.log(`input value: ${event.target.value}`)
          }
          textFieldProps={{
            label: 'Label',
          }}
        />
      </div>
      <hr />
      <div>
        <ConfirmText />
      </div>
      <hr />
      <div>
        <div>
          <Switch checked={isThemeDark} onChange={toggleDarkMode} />
        </div>
        <div>Dark mode: {isThemeDark ? 'On' : 'Off'}</div>
      </div>
    </div>
  );
};
