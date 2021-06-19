import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './css/global/App.global.css';
import './css/global/recet.grobal.css';
import Start from './js/components/start';
import Battle from './js/components/battle';

// ルーティング
// https://maku.blog/p/nfxds8n/#%E6%8E%92%E4%BB%96%E7%9A%84%E3%81%AB%E3%82%B3%E3%83%B3%E3%83%9D%E3%83%BC%E3%83%8D%E3%83%B3%E3%83%88%E3%82%92%E5%88%87%E3%82%8A%E6%9B%BF%E3%81%88%E3%81%A6%E8%A1%A8%E7%A4%BA%E3%81%99%E3%82%8B-switch
export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/Battle" component={Battle} />
        <Route path="/" component={Start} />
      </Switch>
    </Router>
  );
}
