import m from 'mithril'
import nav from '../nav'

export default {
	view() {
		return m('.page.home', [
			m(nav),
			m('h1', 'Home'),
			m('p', 'Welcome to the home page.')
		])
	}
}
