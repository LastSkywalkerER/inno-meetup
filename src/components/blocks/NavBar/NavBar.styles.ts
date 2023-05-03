import { makeStyles } from 'tss-react/mui';

export const useClasses = makeStyles()(({ spacing, breakpoints, palette }) => ({
  navBar: {
    position: 'static',
    // top: 0,
    // left: 0,
    // right: 0,
    zIndex: 99,
    display: 'flex',
    alignItems: 'center',
    maxHeight: '100px',
    padding: '10px 25px  10px  25px',

    // background: '#231A64',
    // backdropFilter: 'blur(5px)',
  },
  navBarContent: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',

    [breakpoints.down('md')]: {
      flexWrap: 'nowrap',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      flexDirection: 'column',
      gap: spacing(2),
    },
  },
  navBlock: {
    display: 'flex',

    alignItems: 'center',

    color: 'inherit',
    textDecoration: 'none',
  },
  navBlockRight: {
    padding: '30px',
  },
  navItem: {
    color: palette.customColors.text,
    textDecoration: 'none',
    textShadow: '0 2px #000000',
  },
  img: {
    // width: '42px',
    // height: '42px',
  },
  logoText: {
    marginBottom: -5,
    marginLeft: -10,
  },
  buttonHeader: {
    margin: '0 15px',
  },
  contractAutocomplete: {
    width: 300,
    maxWidth: '90%',
  },
  drawer: {
    padding: '20px 25px  46px  25px',
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    marginBottom: 40,
  },
  burger: {
    width: 50,

    '& svg': {
      fill: palette.customColors.text,
    },
  },
}));
