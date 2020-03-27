import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './global.css';

import NewBadge from './pages/NewBadge/NewBadge';
import Badges from './pages/Badges/Badges';

const container = document.getElementById('app');

ReactDOM.render(<Badges />, 
    container);