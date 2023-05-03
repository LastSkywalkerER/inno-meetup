import { withStyles } from 'tss-react/mui';

export const PageWrapper = withStyles('section', () => ({
  root: {
    position: 'absolute',
    top: 84,
    left: 0,
    bottom: 0,
    right: 0,
    minHeight: 'calc(100% - 84px)',
    height: 'calc(100% - 84px)',
    maxHeight: 'calc(100% - 84px)',
    width: '100%',
  },
}));
