import ReactDOM from 'react-dom';
import { App } from './App';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { registerSW } from 'virtual:pwa-register';

ReactDOM.render(<App />, document.getElementById('root'));

// 서비스워커 등록
registerSW();

