import m from 'mithril';
import Nav from '../Nav';

const About: m.Component = {
  view: () => m('.page.about',
    m(Nav),
    m('h1', 'About'),
    m('p', 'This is the about page. Stuff about the app.'),
    m('.test', 'This div tests flex styles and autoprefixer.')
  )
};

export default About;
