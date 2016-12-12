import App from './App.js';

const routes = [{
  path: '/',
  component: App,
  childRoutes: [
    { path: 'entry', component: App }
  ]
}];

export default routes;
