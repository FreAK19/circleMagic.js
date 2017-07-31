# circleMagic.js

> circleMagic is a fast, easy, and modern jQuery library.

![circleMagic pic](dest/img/readme.gif)

For information , go to the [circleMagic website](https://github.com/FreAK19/circleMagic.js/).


# Install circleMagic.js
----------------

You can install from bower .



```sh
    bower install circleMagic --save
```
or directly download
```sh
    git clone https://github.com/FreAK19/circleMagic.js
```
# Using
------

```js
    $('.header').circleMagic({
                radius: 35,
                density: .3,
                color: 'rgba(255,255,255, .4)',
                //color: 'random',
                clearOffset: .3
            });
```

# Options
------

| Plugin | Description |
| ------ | ------ |
| | |
| radius | Defines radius of the circles |
| density | Specify how much circles will be on the screen. |
| color | Color of circles. Can be used #hex, rgba(), hsl() or a 'random' keyword. |
| clearOffset | Disappearing of the circles. |

# License
-------

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files, to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software...