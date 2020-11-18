import { Container } from '@material-ui/core';
import React from 'react';
import AppBarComp from '../Profile/AppBar';
import UserProfile from './UserProfile';

const User = () => {
    return (
      <>
        <AppBarComp />
         <Container maxWidth="lg">
             <UserProfile />
         </Container>
      </>
    );
}

export default User;
