# ojs-components
Module with ready to use components. Like input, button, select and more
#### Quick start
```
npm i ojs-components
```
##### Components:
* OInput

```js
// import 
import { OInput } from 'ojs-components';

// declaration
const store = {
    example: ''
}
const input = new OInput({
    label: 'Example Input',
    type: 'text',
    db: store,
    name: 'example'
    change: () => { /* fired when input value change */ }
})

// use
document.body.appendChild(
    input.init()
);
```
OInput needs only one argument: configObject with properties

Value in the store object will be replaced everytime when input value changes. Attribute value is defined as store['example']. When we type something in input like: 'hello', result will be: store['example'] = 'hello'

| Property   |      description      | Type |
|:------------:|:---------------------:|:------:|
| attributes | custom attributes to input. For example: [ { 'placeholder': 'exampleText' } ] | array
| change / keyup / focus / blur etc. | fire event will run defined function | function
| db         | defined store object | object
| disabled | defined input is disabled or no | boolean
| events | custom events. For example: [ { name: 'change', fn: () => {} } ] | array
| index | When name is array, we can define index of input value | string/number
| inputClass | defined class name of input. "ojsInput__input" by default | string
| inputStyle | defined inline styles of input | string
| label      | defines text above the input - label | string
| labelStyle | defined inline styles of label | string
| labelClass | defined class name of label. "ojsInput__label" by default | string
| name       | defined name that is declared in db | string
| placeholder | defined input placeholder | string
| required | defined input is required or no | boolean
| type       | defined type of input: text, number, password etc. text is declared by default | string

We also have defined methods for use on our input component:
* disabled
* enabled
* getId

```js
// For example: disabled input when we typed something

const input = new OInput({
    label: 'Example Input',
    type: 'text',
    db: store,
    name: 'example'
    change: () => input.disabled(); 
})

// and enable when you want just by use: input.enabled()
```

---
* OButton
```js
// import
import { OButton } from 'ojs-components';

// declaration 
const button = new OButton({
    text: 'Example button',
    type: 'primary',
    click: () => {
        // run this script on click
    },
});

// use
document.body.appendChild(
    button.init()
);
```
OButton like OInput need one argument: configObject. There are list of properties:

| Property     |      description      | Type   |
|:------------:|:---------------------:|:------:|
| attributes   | custrom attributes. For example: [ { 'name': 'hello' } ] | array
| classNames   | your custom classes for button | string
| click and other events | run function while event happen | function
| disabled     | defined if button is disabled  | boolean
| style        | defined inline styles  | string
| submit       | if true, button will be type submit. type is button by default | boolean
| text         | defined button text   | string |
| type         | there are few types: primary, secondary, primary-confirm, primary-cancel, secondary-confirm, secondary-cancel, link, link-confirm, link-cancel. There specified style of button   | string |

We also have defined methods for use on our button component: 
* textToggle
* disabled
* enabled
* getId
```js
// For example, change text from On to Off when we clicking button

const button = new OButton({
    text: 'On',
    type: 'primary',
    click: () => {
        button.textToggle('On', 'Off');
        // we can also disabled this button after click
        button.disabled();
    },
});

// and enable when you want just by use: button.enabled()
```
---
* OSelect
```js
// import
import { OSelect } from 'ojs-components';

// declaration 
const store = {
    fruit: ''
}
const select = new OSelect({
    label: 'Your favourite fruit?',
    name: 'fruit',
    db: store,
    options: [
        { text: 'Apple', value: 'apple'},
        { text: 'Pear', value: 'pear'}
    ]
});

// use
document.body.appendChild(
    select.init()
);
```
OSelect like others need one argument: configObject. There are list of properties:

| Property   |      description      | Type |
|:------------:|:---------------------:|:------:|
| attributes | custom attributes to input. For example: [ { 'placeholder': 'exampleText' } ] | array
| change / click / focus / blur etc. | fire event will run defined function | function
| db         | defined store object | object
| disabled | defined input is disabled or no | boolean
| events | custom events. For example: [ { name: 'change', fn: () => {} } ] | array
| index | When name is array, we can define index of input value | string/number
| label      | defines text above the input - label | string
| labelClass | defined class name of label. "ojsInput__label" by default | string
| labelStyle | defined inline styles of label | string
| name       | defined name that is declared in db | string
| options    | options list for select: [ { text: 'Apple', value: 'apple' } ] | array
| required   | defined select is required or no | boolean
| selectClass | defined class name of select. "ojsSelect" by default | string
| selectStyle | defined inline styles of select | string

We also have defined methods for use on our select component like in button:
* disabled
* enabled
* getId
```js
// example: disable select component after select option
const select = new OSelect({
    text: 'Your favourite fruit?',
    type: 'primary',
    name: 'fruit',
    db: store,
    options: [
        { text: 'Apple', value: 'apple'}
        { text: 'Pear', value: 'pear'}
    ]
    change: () => select.disabled();
    
});
```
---
* OCheckbox

example:
```js
// import
import { OCheckbox } from 'ojs-components';

// declaration 
const store = {
    'likeApples': false,
}
const checkbox = new OCheckbox({
    label: 'I like apples',
    name: 'likeApples',
    db: store,
    change: () => // do something,
});

// use
document.body.appendChild(
    checkbox.init()
);
```
Properties list:

| Property   |      description      | Type | 
|:------------:|:---------------------:|:------:|
| change / click / focus / blur etc. | fire event will run defined function | function
| checkboxClass | defined class name of checkbox. | string |
| checkboxStyle | defined inline styles of checkbox. | string |
| db         | defined store object | object
| disabled | defined input is disabled or no | boolean
| events | custom events. For example: [ { name: 'change', fn: () => {} } ] | array
| label      | defines text next to the checkbox - label | string
| labelClass | defined class name of label. "ojsCheckbox__label" by default | string
| labelStyle | defined inline styles of label | string
| name       | defined name that is declared in db | string
| required   | defined select is required or no | boolean
| spanClass | defined class name of span. "ojsCheckbox__span" by default | string
| spanStyle | defined inline styles of span | string

We also have defined methods for use on our checkbox component like in others:
* disabled
* enabled
* getId
---
* ORadio

```js
// import
import { ORadio } from 'ojs-components';

// declaration 
const store = {
    'favouriteFruit': '',
}

const oRadioFirst = new ORadio({
    label: 'Apple',
    value: 'Apple',
    name: 'favouriteFruit',
    db: store,
    change: () => // change function
});
const oRadioSecond = new ORadio({
    label: 'Pear',
    // if u don't add value property - input will set value = label, so here value will be Pear
    name: 'favouriteFruit',
    db: store,
    change: () => // change function
});

// use
document.body.appendChild(
    oRadioFirst.init()
    oRadioSecond.init()
);
```
Properties list:

| Property   |      description      | Type | 
|:------------:|:---------------------:|:------:|
| change / click / focus / blur etc. | fire event will run defined function | function
| db         | defined store object | object
| disabled | defined input is disabled or no | boolean
| events | custom events. For example: [ { name: 'change', fn: () => {} } ] | array
| label      | defines text next to the checkbox - label | string
| labelClass | defined class name of label. "ojsCheckbox__label" by default | string
| labelStyle | defined inline styles of label | string
| name       | defined name that is declared in db | string
| radioClass | defined class name of radio. | string |
| radioStyle | defined inline styles of checkbox. | string |
| required   | defined select is required or no | boolean
| spanClass | defined class name of span. "ojsCheckbox__span" by default | string
| spanStyle | defined inline styles of span | string
| value | optional, if not defined value = label | string

We also have defined methods for use on our checkbox component like in others:
* disabled
* enabled
* getId
