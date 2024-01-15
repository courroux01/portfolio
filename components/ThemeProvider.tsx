'use client';

import { ThemeProvider as NextThemeProvider } from 'next-themes';

const ThemeProvider = ({
  children,
  ...props
}: {
  children: React.ReactNode;
}) => {
  return (
    <NextThemeProvider attribute='class' defaultTheme='light' {...props}>
      {children}
    </NextThemeProvider>
  );
};

export default ThemeProvider;
