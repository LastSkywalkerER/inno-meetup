import './materialTheme.d';

import { common } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

import colors from './colors';
import { units } from './units';

export const materialTheme = createTheme({
  palette: {
    primary: {
      light: colors.primaryLight,
      main: colors.primary,
      dark: colors.primaryDark,
      contrastText: common.white,
    },
    secondary: {
      main: colors.secondary,
      light: colors.secondaryLight,
      contrastText: common.white,
    },
    text: {
      primary: colors.text,
      secondary: colors.text,
      disabled: colors.textDisabled,
    },
    grey: {
      50: colors.grey50,
      100: colors.grey100,
      200: colors.grey200,
      300: colors.grey300,
      400: colors.grey400,
    },
    error: {
      main: colors.danger,
      light: colors.dangerLight,
    },
    background: {
      default: colors.background,
    },
    customColors: colors,
    units: units,
  },
  typography: {
    body2: {
      fontFamily: 'Roboto',
      fontStyle: 'normal',
      fontWeight: 500,
      fontSize: '19px',
      lineHeight: '23px',
    },
    h5: {
      fontFamily: 'Roboto',
      fontStyle: 'normal',
      fontWeight: 600,
      fontSize: '27px',
      lineHeight: '33px',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          background: colors.primaryLight,
        },
      },
    },
  },
  spacing: units.single,
});
