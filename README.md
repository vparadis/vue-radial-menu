# vue-radial-menu

> Simple radial menu for vue2 apps

## Installation

`npm i vue-radial-menu --save`

## Basic usage

Here is a very simple usage. Note the type of values and options passed down in the array.

``` javascript

<template>
    <div>
        <radial-menu
        style="bottom: 8px; left: calc(50% - 25px); position: fixed"
        :items="arr"
        :radius="130"
        :item-size="50" />
    </div>
</template>

import RadialMenu from './components/RadialMenu.vue'
export default {
  name: 'App',
  components: {
    RadialMenu
  },
  data () {
    return {
      arr: [
        1, 2,
        'Hello',
        {
          component: '<span style="color: white">World</span>',
          style: {
            backgroundColor: 'rgba(0,0,0,0.4)'
          }
        },
        {
          text: 'Foo',
          onClick: () => console.log('bar')
        }
      ]
    }
  }
}
...
```

## Options

### Main component props

| Name | Type | Required | Default Value | Description |
| ---- | ---- | -------- | ------------- | ----------- |
| items | Array | Yes | None | The items to pass down to the menu. See item options below for more info. |
| angle-description | Number | No | 180 | The maximum angle in a circle for the items to be displayed in. A value of 90 would represent the quarter of a circle, 180 half a circle and so on. |
| size | Number | No | 50px | The size in pixels of the main button to open the menu. |
| itemSize | Number | No | 36px | The size in pixels of menu items. |
| rotate | Number | No | 0 | An angle value to rotate the menu. Positive values will rotate the menu counter clockwise. |
| radius | Number | No | 100 | The radius of the circle to form with the items. |
| button-class | String | No | None | A class to add to the main button. |

### Item options
*These options are to be passed within an object array through the* `items` *props in the main component.*

Note that any value can be passed down. String and numbers are valid and will result in having said value in the button. However, for any more complex interaction an object is required. See options below.

| Name | Type | Required | Default Value | Description |
| ---- | ---- | -------- | ------------- | ----------- |
| itemClass | String | No | '' | A class to add to the item. |
| style | Object | No | None | A style object used to style the button. |
| onClick | Function | No | None | A function to call when the option is clicked. |
| text | String or Number | No | None | Text or number to display in the button. |
| component | String template | No | None | A template to render within the button. Useful for icons. |

## Liscense

This project is under the MIT liscence.