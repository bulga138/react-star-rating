# React Star Rating

A star rating component built with React.

## Screenshots

![image](https://github.com/stefanoturcarelli/react-star-rating/assets/67341828/d246cf38-7a66-4708-afff-8d1491232893)

![image](https://github.com/stefanoturcarelli/react-star-rating/assets/67341828/39218f13-dd0b-4b4c-a750-e77c9abf8775)

![image](https://github.com/stefanoturcarelli/react-star-rating/assets/67341828/0c75c35a-4815-4a42-8b00-9b172f57db7d)

## Description

This project is a star rating component built with React. The component allows users to rate a product or service by clicking on the stars. The rating is displayed in real-time as the user hovers over the stars. The component also includes customizable star colors and rating messages.

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

### Basic Usage

To integrate the star rating component into your React application, follow these steps:

1. **Import the Components**: Import the `StarRating` component into your desired file.

```jsx
import StarRating from "./components/StarRating";
```

2. **Use the Component**: Add the `StarRating` component to your JSX.

```jsx
function App() {
  return (
    <div className="App">
      <h1>Rate this product:</h1>
      <StarRating />
    </div>
  );
}

export default App;
```

### Customizing the Component

You can customize the star rating component by modifying the following:

1. **Number of Stars**: Adjust the number of stars by changing the array length in the `StarRating` component.

```jsx
{
  [...Array(5)].map((_, i) => {
    const ratingValue = i + 1;
    return (
      <Star
        key={ratingValue}
        ratingValue={ratingValue}
        hover={hover}
        rating={rating}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
      />
    );
  });
}
```

2. **Star Colors**: Change the color of the stars by updating the color values in the `Star` component.

```jsx
<FontAwesomeIcon
  icon={faStar}
  className="star"
  color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
  onMouseEnter={() => onMouseEnter(ratingValue)}
  onMouseLeave={() => onMouseLeave()}
/>
```

3. **Rating Messages**: Modify the rating messages in the `StarRating` component to fit your requirements.

```jsx
const ratingMessages = {
  1: "Very bad",
  2: "Bad",
  3: "Okay",
  4: "Good",
  5: "Excellent",
  default: "No rating selected",
};
```

### Example with Custom Messages

Here's an example of how to use the `StarRating` component with custom rating messages:

```jsx
import React from "react";
import StarRating from "./components/StarRating";

function App() {
  return (
    <div className="App">
      <h1>Rate our service:</h1>
      <StarRating />
    </div>
  );
}

export default App;
```

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).
