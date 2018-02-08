import React from 'react';

const PageNotFound = ({ staticContext = {} }) => {
  staticContext.noFound = true;

  return (
    <div className="center-align" style={{ marginTop: '100px' }}>
      <h3>Sorry, route not found.</h3>
    </div>
  );
};

export default { component: PageNotFound };
