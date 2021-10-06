# ojs-components
Module with ready to use components. Like input, button, select and more
#### Quick start
```
npm i ojs-components
```
##### Components:
* oInput

```js
// declaration
const store = {
    example: ''
}
const input = new oInput({
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
oInput needs only one argument: configObject with properties

Value in the store object will be replaced everytime when input value changes. Attribute value is defined as store['example']. When we type something in input like: 'hello', result will be: store['example'] = 'hello'

| Property   |      description      | Type |
|:------------:|:---------------------:|:------:|
| label      | defines text above the input - label | string
| type       | defined type of input: text, number, password etc. text is declared by default | string
| db         | defined store object | object
| name       | defined name that is declared in db | string
| attributes | custom attributes to input. For example: [ { 'placeholder': 'exampleText' } ] | array
| index | When name is array, we can define index of input value | string/number
| disabled | defined input is disabled or no | boolean
| required | defined input is required or no | boolean
| placeholder | defined input placeholder | string
| change / keyup / focus / blur etc. | fire event will run defined function | function
| events | custom events. For example: [ { name: 'change', fn: () => {} } ] | array
| labelClass | defined class name of label. "ojsInput__label" by default | string
| inputClass | defined class name of input. "ojsInput__input" by default | string
| labelStyle | defined inline styles of label | string
| inputStyle | defined inline styles of input | string
---
* oButton
```js
// declaration 
const button = new oButton({
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
oButton like oInput need one argument: configObject. There are list of properties:

| Property     |      description      | Type   |
|:------------:|:---------------------:|:------:|
| text         | defined button text   | string |
| type         | there are few types: primary, secondary, primary-confirm, primary-cancel, secondary-confirm, secondary-cancel, link, link-confirm, link-cancel. There specified style of button   | string |
| attributes   | custrom attributes. For example: [ { 'name': 'hello' } ] | array
| classNames   | your custom classes for button | string
| disabled     | defined if button is disabled  | boolean
| style        | defined inline styles  | string
| submit       | if true, button will be type submit. type is button by default | boolean
| click and other events | run function while event happen | function

We also have defined methods for use on our button component: 
* textToggle
* disabled
* enabled
```js
// For example, change text from On to Off when we clicking button

const button = new oButton({
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
