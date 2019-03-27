import React, { useState, useContext, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Spinner } from 'reactstrap';

import { UserContext } from './context/userContext';
import { isFirebaseInitialized } from './js-sdk/fire';
import { Centered } from './helpers';

const withAuthentication = (WrappedComponent) => (props) => {
  const user = useContext(UserContext);
  const [isInitialized, setInitialized] = useState(false);

  useEffect(async () => {
    await isFirebaseInitialized();
    setInitialized(true);
  }, []);

  if (isInitialized) {
    return user ? <WrappedComponent {...props} /> : <Redirect to={{ pathname: '/' }} />;
  }

  return (
    <Centered>
      <Spinner />
    </Centered>
  );
};

withAuthentication.defaultProps = {
  user: null,
};

withAuthentication.propTypes = {
  component: PropTypes.shape({}).isRequired,
  user: PropTypes.shape({}),
};

export default withAuthentication;
