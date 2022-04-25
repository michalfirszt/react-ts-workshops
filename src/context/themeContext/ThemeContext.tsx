import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from 'react';

type Props = {
  children: ReactNode;
};

type ContextValue = {
  isThemeDark: boolean;
  // for useReducer dispatch: React.Dispatch<Action>
  setIsThemeDark: Dispatch<SetStateAction<boolean>> | null;
};

export const ThemeContext = createContext<ContextValue>({
  isThemeDark: false,
  setIsThemeDark: null,
});

export const ThemeProvider = ThemeContext.Provider;

export const ThemeContextWrapper = ({ children }: Props): JSX.Element => {
  const [isThemeDark, setIsThemeDark] = useState<boolean>(false);

  return (
    <ThemeProvider
      value={{
        isThemeDark,
        setIsThemeDark,
      }}
    >
      {children}
    </ThemeProvider>
  );
};
