import MenuIcon from '@mui/icons-material/Menu';
import {
  AppBar,
  Container,
  Drawer,
  IconButton,
  Toolbar,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { ConnectWallet } from '@thirdweb-dev/react';
import { FC, useState } from 'react';
import { Link } from 'react-router-dom';

import { images } from '@/assets';
import { RoutesNames } from '@/constants/routes';

import { useClasses } from './NavBar.styles';

export const NavBar: FC = () => {
  const theme = useTheme();
  const match = useMediaQuery(theme.breakpoints.down('md'));
  const { classes } = useClasses();

  const [isMenuOpened, setIsMenuOpened] = useState(false);

  const closeMenu = () => {
    setIsMenuOpened(false);
  };
  const openMenu = () => {
    setIsMenuOpened(true);
  };

  const navigation = (
    <Toolbar disableGutters className={classes.navBarContent}>
      <Link to={RoutesNames.Minting} className={classes.navBlock}>
        <img src={images.innowise} alt="icon" className={classes.img} />
      </Link>

      <ConnectWallet
        theme="light"
        btnTitle="Connect Wallet"
        dropdownPosition={{ side: 'right', align: 'start' }}
      />
    </Toolbar>
  );

  return (
    <AppBar className={classes.navBar}>
      <Container maxWidth="xl">
        {!match && navigation}

        {match && (
          <>
            <IconButton className={classes.burger} onClick={openMenu}>
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="top"
              open={isMenuOpened}
              onClose={closeMenu}
              classes={{ paperAnchorTop: classes.drawer }}
            >
              <div className={classes.drawerHeader}>
                <IconButton className={classes.burger} onClick={closeMenu}>
                  <MenuIcon />
                </IconButton>
              </div>
              {navigation}
            </Drawer>
          </>
        )}
      </Container>
    </AppBar>
  );
};
