import m from 'mithril'
import nav from '../nav'

export default {
	view() {
		return m('.page.about', [
			m(nav),
			m('h1', 'About'),
			m('p', 'This is the about page. Stuff about the app.'),
			m('.test', 'This div tests flex styles and autoprefixer.')
		])
	}
}
