# circleMagic.js

> circleMagic is a fast, easy, and modern jQuery library.

For information on how to get started and how to use circleMagic.js, please see [circleMagic website](https://github.com/FreAK19/circleMagic.js/).


## Including circleMagic

Below are some ways to use circleMagic.



```sh
bower install circleMagic --save
```
or directly download
```
    git clone https://github.com/FreAK19/circleMagic.js
```
For jQuery to work in Node, a window with a document is required. Since no such window exists natively in Node, one can be mocked by tools such as [jsdom](https://github.com/tmpvar/jsdom). This can be useful for testing purposes.

```js
require("jsdom").env("", function(err, window) {
	if (err) {
		console.error(err);
		return;
	}

});
```
