import m from 'mithril';
import Nav from '../Nav';

export default {
  view (vnode) {
    return m('.page.about', [
      m(Nav),
      m('h1', 'About'),
      m('p', 'This is the about page. Stuff about the app.'),
      m('.test', 'This div tests flex styles and autoprefixer.')
    ]);
  }
} as m.Component;
