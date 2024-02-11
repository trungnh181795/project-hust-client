/* Libs */
import React, { memo } from 'react';
import { useLocation } from 'react-router-dom';
import { Toolbar, Container, List, ListItem, Box } from '@mui/material';
/* Assets */
import logo from '@/../public/logo.svg';
/* Components */
/* Utils */
import { portalRoutes } from '../../../utils';
import { useViewport } from '../../../utils';
/* Styles */
import { AkaNavbar } from './styles';
/* Types */

const MobileNavBar: React.FC = () => {
  const location = useLocation();
  const { width, height } = useViewport();

  return (
    <AkaNavbar sx={{ display: { xs: 'block', md: 'none' }}}>
      Navbar here
    </AkaNavbar>
  );
};

export default memo(MobileNavBar);
