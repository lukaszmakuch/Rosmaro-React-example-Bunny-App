This is an example of a client-side application implemented using [Rosmaro](https://rosmaro.js.org), [React](https://reactjs.org), [Redux](https://redux.js.org) and [Redux-Saga](https://redux-saga.js.org).

__Rosmaro__ is responsible for handling changes of behavior.

__React__ renders the view.

__Redux__ stores the state.

__Redux-Saga__ handles declarative side effects.

[Rosmaro Editor](https://rosmaro.js.org/editor) was used to draw the _graph.json_ file.

[Rosmaro-React](https://github.com/lukaszmakuch/rosmaro-react) was used to integrate React with Rosmaro.

[Rosmaro-Redux](https://github.com/lukaszmakuch/rosmaro-redux) was used to integrate Redux with Rosmaro.

[Rosmaro-Tools](https://github.com/lukaszmakuch/rosmaro-tools) helped to generate bindings based on the directory structure.

[Rosmaro-Binding-Utils](https://github.com/lukaszmakuch/rosmaro-binding-utils) made it easy to write bindings.

[Create React App](https://github.com/facebookincubator/create-react-app) was used to bootstrap this demo.

There is just __1 IF__ responsible for the logic:
```javascript
const arrow = ateCarrots >= 5
  ? 'ate 5 carrots' 
  : 'ate a carrot';
```

The rest of the logic looks like this (in the [Rosmaro visual editor](https://rosmaro.js.org/editor)):
![The bunny app opened in the Rosmaro visual editor](https://lukaszmakuch.pl/static/editor_entry_point_of_main-8f72254778245a0e1e6cf45d0c4e689e-c83b2.png)