import { ConfirmText, TextInput } from '@components';
import { Typography } from '@mui/material';

export const HomeView = (): JSX.Element => (
  <div>
    <div>
      <TextInput
        inputTitle={
          <div>
            <Typography>Input title</Typography>
          </div>
        }
        onChange={(event) => console.log(`input value: ${event.target.value}`)}
        textFieldProps={{
          label: 'Label',
        }}
      />
    </div>
    <hr />
    <div>
      <ConfirmText />
    </div>
  </div>
);
