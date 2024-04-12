import React, { useState, useEffect, useRef } from 'react';
import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';
import ModalFor from './ModalFor.jsx';

export default function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const appBarRef = useRef(null);
  const [initialWidth, setInitialWidth] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (appBarRef.current && !initialWidth) {
      setInitialWidth(appBarRef.current.offsetWidth);
    }
  }, [initialWidth]);

  return (
    <>
      <Box className="header-container" sx={{ display: 'flex', justifyContent: 'center' }}>
        <AppBar
          position="static"
          className={isScrolled ? 'headerfixed' : ''}
          ref={appBarRef}
          sx={{
            transition: 'all 0.2s',
            backgroundColor: 'rgba(128, 159, 196, 0.8)',
            ...(isScrolled && {
              position: 'fixed',
              top: 0,
              left: '50%',
              transform: 'translateX(-50%)',
              width: `${initialWidth}px`,
              zIndex: 999,
            }),
          }}
        >
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Карты АТЭС
            </Typography>
            <Button
              color="inherit"
              sx={{ backgroundColor: 'rgba(128, 159, 196, 0.5)', borderRadius: '5px' }}
              onClick={() => setModalOpen(true)}
            >
              Оформить заявку
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
      <ModalFor open={modalOpen} handleClose={() => setModalOpen(false)} />
    </>
  );
}



