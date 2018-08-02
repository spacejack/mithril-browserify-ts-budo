// App entry point
import m from 'mithril';
import home from './components/home';
import about from './components/about';

m.route(document.body, '/', {
  '/': home,
  '/about': about
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
