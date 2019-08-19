import m from 'mithril';
import Nav from '../Nav';

const Home: m.Component = {
  view: () => m('.page.home',
    m(Nav),
    m('h1', 'Home'),
    m('p', 'Welcome to the home page.')
  )
};

export default Home;
