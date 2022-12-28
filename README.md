# Monsters Rolodex (Class Components)

This is a React App created with Vite.
It's a React Class Component project with search and filter functionality.

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### Screenshot

![Picture 2](https://user-images.githubusercontent.com/108392678/209674407-20548465-a3ef-46b4-a780-978f8f890d2a.png)
![Picture 1](https://user-images.githubusercontent.com/108392678/209674377-ba41bef6-d999-46f8-a1d2-d68cbf43073c.png)


### Links

- DEMO:[Demo](https://monsters-rolodex-class-components.vercel.app/) 

## My process

### Built with

- [React](https://reactjs.org/docs/getting-started.html)

### What I learned

- Creating a React App with Vite
- Using Class Components
- React lifecycle methods
- When React renders and re-renders
- Managing state within a component using setState
- Fetching data inside componentDidMount()
- Creating a basic List component using map and filter
- Using Keys Within Lists
- Passing props to a component

Here is a code snippet:

```App.jsx
      ...
class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: '',
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState(() => ({ monsters: users })));
  }
  ...
```

### Useful resources

- [React Docs (Lifecycle Methods) ](https://reactjs.org/docs/state-and-lifecycle.html) - This helped me for knowing the lifecycle methods in React.
- [React Docs (Lists and Keys)](https://reactjs.org/docs/lists-and-keys.html) - This helped me for mapping lists and adding keys.

## Author

- Website - [Marvin Morales Pacis](https://marvin-morales-pacis.vercel.app/)
- LinkedIn - [@marvedventures](https://www.linkedin.com/in/marvedventures/)
- Twitter - [@marvedventures](https://www.twitter.com/marvedventures)
