import { makeStyles } from 'tss-react/mui';

export const useClasses = makeStyles()(({ spacing, palette }) => ({
  page: {
    background: palette.customColors.background,

    padding: '10vh 10%',
    position: 'absolute',

    top: 0,
    bottom: 0,
    left: 0,
    right: 0,

    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    gap: spacing(10),
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
  },
  loading: {
    color: palette.customColors.secondary,
  },
  column: {
    maxWidth: '40%',
  },
}));
