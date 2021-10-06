import o, { oRef } from 'ojs-core';
import mapEvents from '../../utils/eventMapper';
import './button.css';

const classNamesByTypeObject = {
    primary: ' ojsButton-primary',
    secondary: ' ojsButton-secondary',
    'primary-confirm': ' ojsButton-primary-confirm',
    'secondary-confirm': ' ojsButton-secondary-confirm',
    'primary-cancel': ' ojsButton-primary-cancel',
    'secondary-cancel': ' ojsButton-secondary-cancel',
    link: ' ojsButton-link',
    'link-confirm': '  ojsButton-link ojsButton-link-confirm',
    'link-cancel': '  ojsButton-link ojsButton-link-cancel',
};

const buttonAttributesArray = store => [
    { name: 'type', val: store.submit ? 'submit' : 'button' },
    { name: 'name', val: store.name },
];

class oButton {
    constructor(config) {
        this.store = {
            attributes: [],
            classNames: 'ojsButton',
            disabled: false,
            name: '',
            style: false,
            text: '',
            type: 'primary',
            submit: false,
        };
        this.buttonRef = oRef();

        this.configMerge(config);
    }

    configMerge(config) {
        Object.assign(this.store, config);
        if (config.events) {
            this.store.events = [...config.events, ...mapEvents(config)];
        } else {
            this.store.events = mapEvents(config);
        }
    }

    addClassNamesByType() {
        if (this.store.style || this.store.classNames !== 'ojsButton') return;
        this.store.classNames += classNamesByTypeObject[this.store.type];
    }

    textToggle(text, nextText) {
        const buttonText = this.buttonRef.target.textContent;
        this.buttonRef.target.textContent = buttonText === text ? nextText : text;
    }

    enabled() {
        this.buttonRef.target.disabled = false;
    }

    disabled() {
        this.buttonRef.target.disabled = true;
    }

    build() {
        this.addClassNamesByType();
        const {
            attributes, classNames, disabled, events, style, text,
        } = this.store;

        const button = o('button')
            .attr([...buttonAttributesArray(this.store), ...attributes])
            .class(classNames)
            .event(events)
            .ref(this.buttonRef)
            .text(text);

        if (disabled) button.attr({ disabled });
        if (style) button.style(style);

        return button.init();
    }

    init() {
        return this.build();
    }
}

export default oButton;
