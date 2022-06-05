import React from 'react';
import {ProfilePhoto, CoverPhoto} from '../../Styles/ProfilePhoto';

export default () => {
  return (
    <>
      <CoverPhoto>
        <ProfilePhoto source={require('../../Assets/perfil.jpg')} />
      </CoverPhoto>
    </>
  );
};
