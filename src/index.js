// App entry point
import m from 'mithril'
import home from './components/home'
import about from './components/about'

m.route(document.body, '/', {
	'/': home,
	'/about': about
})

///////////////////////////////////////////////////////////
// For browserify-hmr
// See browserify-hmr module.hot API docs for hooks docs.
/*global module */
if (module.hot) {
	module.hot.accept()
}
///////////////////////////////////////////////////////////
