import m from 'mithril';

const Nav: m.Component = {
  view: () => {
    const r = m.route.get();
    return m('nav',
      m('ul',
        m('li',
          m(m.route.Link,
            {
              href: '/',
              class: r === '/' ? 'active' : ''
            },
            'Home'
          )
        ),
        m('li',
          m(m.route.Link,
            {
              href: '/about',
              class: r === '/about' ? 'active' : ''
            },
            'About'
          )
        )
      )
    );
  }
};

export default Nav;
