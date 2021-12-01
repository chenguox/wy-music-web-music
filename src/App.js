import React, { memo } from 'react';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';

import routes from './router';
import store from './store';

import { HashRouter } from 'react-router-dom';
import WYAppHeader from '@/components/app-header'
import WYAppFooter from '@/components/app-footer'

export default memo(function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <WYAppHeader />
        {renderRoutes(routes)}
        <WYAppFooter />
      </HashRouter>
    </Provider>
  )
})

