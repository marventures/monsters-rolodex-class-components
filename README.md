# My Portfolio Website

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

<!-- ![portfoliowebsite1](https://user-images.githubusercontent.com/108392678/204123468-c7538db0-b6ac-4b0f-96ce-cc62ddf7e63c.png)
![portfoliowebsite2](https://user-images.githubusercontent.com/108392678/204123461-061face9-ea3d-40b7-b068-d3771f50bfc0.png) -->

### Links

<!-- - DEMO:[Demo](https://marvin-morales-pacis.vercel.app/) -->

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
