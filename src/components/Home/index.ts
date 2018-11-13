import m from 'mithril';
import Nav from '../Nav';

export default {
  view (vnode) {
    return m('.page.home', [
      m(Nav),
      m('h1', 'Home'),
      m('p', 'Welcome to the home page.')
    ]);
  }
} as m.Component;
