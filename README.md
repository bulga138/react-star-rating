# React Star Rating

## Screenshots

![image](https://github.com/stefanoturcarelli/react-star-rating/assets/67341828/d246cf38-7a66-4708-afff-8d1491232893)

![image](https://github.com/stefanoturcarelli/react-star-rating/assets/67341828/39218f13-dd0b-4b4c-a750-e77c9abf8775)

![image](https://github.com/stefanoturcarelli/react-star-rating/assets/67341828/0c75c35a-4815-4a42-8b00-9b172f57db7d)


## Description

### How can I add multiple className's to react component?

```jsx
<div className={`${this.state.className} ${this.props.content.divClassName}`}>
```

Or if you can't use template strings:

```jsx
<div className={[this.state.className, this.props.content.divClassName].join(" ")}>
```

Reference: [Stack Overflow](https://stackoverflow.com/questions/36772389/how-can-i-add-multiple-classnames-to-react-component#:~:text=6%20Answers,at%2014%3A21)

## Installation

### How to install Fonts Awesome in React?

```bash
npm i --save @fortawesome/fontawesome-svg-core
npm install --save @fortawesome/free-solid-svg-icons
npm install --save @fortawesome/react-fontawesome
```

### How to use Fonts Awesome icons in React?

With this method, you’ll need to explicitly import icons into each component.
Here’s a simple example:

```jsx
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

const element = <FontAwesomeIcon icon={faCoffee} />;

ReactDOM.render(element, document.body);
```

Notice that the faCoffee icon is imported from @fortawesome/free-solid-svg-icons
as an object and then provided to the icon prop as an object.

Reference: [Font Awesome](https://docs.fontawesome.com/v5/web/use-with/react)

## Research

[YouTube - How to Create a Star Rating Component in React](https://www.youtube.com/watch?v=9sSBMF8K7sY)

## Usage

## License
