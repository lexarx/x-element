# Element

Element is a JavaScript library providing a convenient way
to create DOM elements.

## Examples

```js
var element = require('x-element');

var myList = element('ul', {className: 'list'}, [
	element('li', {textContent: '1'}),
	element('li', {textContent: '2'})
]);
document.body.appendChild(myList);
```

## Installation

```sh
npm install --save x-element
```