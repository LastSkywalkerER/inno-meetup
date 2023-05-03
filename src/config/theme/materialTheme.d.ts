import { Palette } from '@mui/material/styles';

import { units } from '@/theme';

import colors from './colors';

declare module '@mui/material/styles' {
  export interface CustomPalette extends Palette {
    customColors: typeof colors;
    units: typeof units;
  }

  export interface PaletteOptions {
    customColors: typeof colors;
    units: typeof units;
  }

  export interface Theme {
    palette: CustomPalette;
  }
}
