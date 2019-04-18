# Udemy's Modern React with Redux 2019

This repo contains coding exercises that were created when I followed [Udemy's Modern React with Redux 2019](https://www.udemy.com/react-redux/learn/v4) video courses, authored by [Stephen Grider](https://github.com/stephengrider).

## Coding Exercises

- [jsx](https://github.com/WendySanarwanto/udemy-modern-react-with-redux-2019/tree/master/jsx) - Demonstrate how to render HTML tags by using `JSX` markups, within main App function-based component. Takeaways: 

  - jsx (`div`, `label`, `input`, `button`, custom tag of a component).

  - function-based component.

- [components](https://github.com/WendySanarwanto/udemy-modern-react-with-redux-2019/tree/master/components) - Demonstrate how to display a list of objects in a list of components, by using ES6's `map` array method, `jsx`, splitted the list item component into multiple components and styled by using [semantic-ui](https://semantic-ui.com)'s stylings. Takeaways:

  - ES6 `Array.map` method to map list of data as a list of JSX components.

  - Component slicing & compositing.

  - Semantic-ui stylings: `card`, `container`, `comments`,`avatar`, `comment`, `header`, `content`, `metadata`.

  - `props.children` - render child component , passed in as props.

  - Generate various kind of fake data by using [faker](https://www.npmjs.com/package/faker) library.

- [pics](https://github.com/WendySanarwanto/udemy-modern-react-with-redux-2019/tree/master/pics) - Demonstrate how to call 3rd party API by using [axios](https://github.com/axios/axios) library and display the call's result list as a CSS grid-styled list component. Takeaways:

  - Make API Call request through using [axios](https://github.com/axios/axios) library.

  - Eliminating redundant code which setup API Request call's common parameters through creating a custom [axios](https://github.com/axios/axios) instance.

  - Passing down data/state from Parent component to direct children components through `props` system.

  - Propagate data/state (e.g. User's inputs) from children component to its direct Parent component through passing down parent component's Callback method via `props` system.

  - Prevent `form`'s submission from doing actual postback by calling form event arg's `preventDefault` method.

  - Semantic-ui stylings: `segment`, `form`, `field`, `iamge-list`.

  - Manipulating DOM tag in runtime by using `Ref` system.

  - Grid layout styling by using `CSS-Grid`.

  - Create `.css` file for a particular Component and how to import the `.css` file within the Component's file.

- [seasons](https://github.com/WendySanarwanto/udemy-modern-react-with-redux-2019/tree/master/seasons) - Demonstrate how to perform data initialisation on a Component by placing the initialisation inside component's `componentDidMount` lifecycle method. Takeaways:

  - `componentDidMount` component lifecycle method that is called once time after a component is attached on page. A perfect place to made one-time data initialisation.

  - Get user's current position through calling `GeoLocation's getCurrentPosition` API (`window.navigator.geolocation.getCurrentPosition` method).

  - CSS stylings: Center element by using `display: flex`, `justify-content` & `align-items` set to `center`. 

  - Semantic UI stylings: Create loading progress spinner by using `active dimmer` , `big text loader`. Creating big icon by using `massive <icon's name> icon`.

  - Set default value on a component's props, through declaring static field `defaultProps`.

- [songs](https://github.com/WendySanarwanto/udemy-modern-react-with-redux-2019/tree/master/songs) - Demonstrate how to centralised application's states by using [redux]() & [react-redux]() libraries, in a `Reactjs` application. Takeaways:

  - Centralised application's states on `reducer` functions.

  - Giving abilities to get or manipulate centralised states through invoking `action creator` functions.

  - Connecting ReactJS components to `Redux`'s `action creators` or centralised states through using `react-redux`'s `<Provider>` component & `connect` function.

  - Creating the centralised state's store through using `redux`'s `createStore` method and linked the store to `react-redux`'s `<Provider>` component which wraps the top component in hierarchy (e.g. `App` component).

  - Semantic-UI stylings: grid layout using `grid`, `column`; list item container using `divided list`; item : `item`, right-hand side positioning: `right floated`

- [blog](https://github.com/WendySanarwanto/udemy-modern-react-with-redux-2019/tree/master/blog) - __TODO: Add info__

- [videos](https://github.com/WendySanarwanto/udemy-modern-react-with-redux-2019/tree/master/videos) - __TODO: Add info__

- [streams](https://github.com/WendySanarwanto/udemy-modern-react-with-redux-2019/tree/master/streams) - __TODO: Add info__

- [translate](https://github.com/WendySanarwanto/udemy-modern-react-with-redux-2019/tree/master/translate) - __TODO: Add info__

- [hooks-simple](https://github.com/WendySanarwanto/udemy-modern-react-with-redux-2019/tree/master/hooks-simple) - __TODO: Add info__

- [hooks-seasons](https://github.com/WendySanarwanto/udemy-modern-react-with-redux-2019/tree/master/hooks-seasons) - __TODO: Add info__