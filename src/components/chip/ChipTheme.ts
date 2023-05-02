import { alpha } from '@mui/material';
import { Components } from '@mui/material/styles/components';

export const ChipTheme = (cloudplexPalette: any): Components['MuiChip'] => ({
  defaultProps: {},
  styleOverrides: {
    label: {},
    sizeSmall: {},
    sizeMedium: {},
    avatar: { color: cloudplexPalette.secondary[500] },
    deleteIcon: {
      color: cloudplexPalette.grayscale.light,
      '&:hover': {
        color: cloudplexPalette.grayscale.light,
      },
    },
    outlined: {
      border: `1px solid ${cloudplexPalette.grayscale.light}`,
      backgroundColor: cloudplexPalette.common.white,
      '&.MuiChip-clickable': {
        '&:hover': {
          backgroundColor: alpha(cloudplexPalette.secondary.light, 0.08),
        },
        '&:active': {
          boxShadow: `none`,
        },
      },
    },
    filled: {
      color: cloudplexPalette.text.default,
      border: `none`,
      backgroundColor: alpha(cloudplexPalette.grayscale.main, 0.4),
      '.MuiChip-deleteIcon': {
        color: cloudplexPalette.grayscale.light,
      },
      '&.MuiChip-clickable': {
        '&:hover': {
          backgroundColor: alpha(cloudplexPalette.grayscale.main, 0.6),
        },
        '&:active': {
          boxShadow: `none`,
        },
      },
    },
    disabled: {
      opacity: 1,
      color: cloudplexPalette.secondary[400],
      backgroundColor: alpha(cloudplexPalette.secondary.light, 0.08),
      '.MuiChip-deleteIcon': {
        margin: 0,
        opacity: 0.24,
      },
    },
  },
});
