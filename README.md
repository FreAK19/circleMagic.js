# circleMagic.js

> circleMagic is a fast, easy, and modern jQuery library.

For information on how to get started and how to use circleMagic.js, please see [circleMagic website](https://github.com/FreAK19/circleMagic.js/).


## Including circleMagic

Below are some ways to use circleMagic.



```sh
    bower install circleMagic --save
```
or directly download
```sh
    git clone https://github.com/FreAK19/circleMagic.js
```

Using
------

```js
    $('.header').circleMagic({
                elem: '.header',
                radius: 35,
                densety: .3,
                color: 'rgba(255,255,255, .4)',
                //color: 'random',
                clearOffset: .3
            });
```

Options
------

| Plugin | Description |
| ------ | ------ |
| elem | Select element that will be used for canvas |
| radius | Defines radius of the circles |
| densety | Specify how much circles will be on screen|
| color | Color of circle.Can be used #fff, rgba() or a 'random' keyword.] |
| clearOffset | Define how circles disappears |

License
-------

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software...