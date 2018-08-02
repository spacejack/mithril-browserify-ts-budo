import m from 'mithril';
import nav from '../nav';

export default {
  view (vnode) {
    return m('.page.home', [
      m(nav),
      m('h1', 'Home'),
      m('p', 'Welcome to the home page.')
    ]);
  }
} as m.Component;
