import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Homepage from '../pages/Homepage';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Homepage} />
    </Switch>
  );
}
