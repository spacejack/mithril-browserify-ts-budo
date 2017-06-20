import m from 'mithril'

export default {
	view() {
		const r = m.route.get()
		return m('nav',
			m('ul',
				m('li',
					m('a',
						{
							href: '/',
							oncreate: m.route.link,
							class: r === '/' ? 'active' : ''
						},
						'Home'
					)
				),
				m('li',
					m('a',
						{
							href: '/about',
							oncreate: m.route.link,
							class: r === '/about' ? 'active' : ''
						},
						'About'
					)
				)
			)
		)
	}
}
