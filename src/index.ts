// App entry point
import m from 'mithril';
import Home from './components/Home';
import About from './components/About';

m.route(document.body, '/', {
  '/': Home,
  '/about': About
});

///////////////////////////////////////////////////////////
// For browserify-hmr
// See browserify-hmr module.hot API docs for hooks docs.
declare const module: any; // tslint:disable-line no-reserved-keywords
if (module.hot) {
  module.hot.accept();
  // module.hot.dispose((data: any) => {
  // 	m.redraw();
  // })
}
///////////////////////////////////////////////////////////
