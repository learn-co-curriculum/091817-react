const createElement = (type, props = {}, children) => {
  return {
    $$typeof: Symbol.for('react.element'),
    props: Object.assign({}, props, { children: children }),
    // props: Object.assign({}, props, { children: children }),
    type: type,
    ref: null
  };
};

const ourHeader = createElement('h1', {}, 'bye');

Article = props => {
  return createElement('div', { className: 'wrapper' }, [
    createElement('h1', {}, props.title),
    createElement('p', {}, props.text)
  ]);
};

const PizzaArticle = Article({
  title: 'Man And Beast Agreee',
  text: 'This pizza is woth begging for'
});

const NewsArticle = Article({
  title: 'Some relevant news',
  text: 'its probably bad'
});

const Navbar = props;

ReactDOM.render(
  Navbar({
    title: 'Our App',
    description: 'app tagline',
    color: 'green',
    icon: 'paint brush'
  }),
  document.getElementById('main')
);
