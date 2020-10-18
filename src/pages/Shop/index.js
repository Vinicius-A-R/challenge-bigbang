import React from 'react';
import { Route } from 'react-router-dom';

import HomeShop from '../../components/HomeShop';

function Shop() {
  return (
    <div>
      <Route path="/" component={HomeShop} />
    </div>
  );
}

export default Shop;
