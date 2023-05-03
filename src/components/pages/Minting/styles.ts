import { makeStyles } from 'tss-react/mui';

export const useClasses = makeStyles()(({ spacing, palette, breakpoints }) => ({
  page: {
    padding: '10vh 10%',

    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    gap: spacing(10),

    [breakpoints.down('md')]: {
      alignItems: 'center',
      flexDirection: 'column',
    },
  },
  infoWrapper: {
    display: 'flex',
    flexDirection: 'column',
    gap: spacing(2),
  },
  title: {
    color: palette.customColors.textLight,
  },

  stageWrapper: {
    display: 'flex',
    flexDirection: 'column',
    gap: spacing(1),
    padding: 20,
    overflow: 'hidden',
  },
  stageRow: {
    display: 'flex',
    gap: spacing(1),
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
  loading: {
    color: palette.customColors.secondary,
  },
  column: {
    maxWidth: '40%',

    [breakpoints.down('md')]: {
      maxWidth: '100%',
    },
  },
}));
