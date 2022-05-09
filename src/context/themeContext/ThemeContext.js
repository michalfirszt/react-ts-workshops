import React, { createContext, useState } from 'react';

export const ThemeContext = createContext({
  isThemeDark: false,
  setIsThemeDark: null,
});

export const ThemeProvider = ThemeContext.Provider;

export const ThemeContextWrapper = ({ children }) => {
  const [isThemeDark, setIsThemeDark] = useState(false);

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
