import React, { memo } from 'react'
import { renderRoutes } from 'react-router-config';

import routes from './router';

import { HashRouter } from 'react-router-dom';
import WYAppHeader from '@/components/app-header'
import WYAppFooter from '@/components/app-footer'


export default memo(function App() {
  return (
    <div>
      <HashRouter>
        <WYAppHeader />
        {renderRoutes(routes)}
        <WYAppFooter />
      </HashRouter>
    </div>
  )
})

