import o, { oRef } from 'ojs-core';
import mapEvents from '../../utils/eventMapper';
import './button.css';

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

    classNamesByType() {
        if (this.store.style || this.store.classNames !== 'ojsButton') return;
        switch (this.store.type) {
        case 'primary': {
            this.store.classNames += ' ojsButton-primary';
            break;
        }
        case 'secondary': {
            this.store.classNames += ' ojsButton-secondary';
            break;
        }
        case 'primary-confirm': {
            this.store.classNames += ' ojsButton-primary-confirm';
            break;
        }
        case 'secondary-confirm': {
            this.store.classNames += ' ojsButton-secondary-confirm';
            break;
        }
        case 'primary-cancel': {
            this.store.classNames += ' ojsButton-primary-cancel';
            break;
        }
        case 'secondary-cancel': {
            this.store.classNames += ' ojsButton-secondary-cancel';
            break;
        }
        case 'link': {
            this.store.classNames += ' ojsButton-link';
            break;
        }
        case 'link-confirm': {
            this.store.classNames += '  ojsButton-link ojsButton-link-confirm';
            break;
        }
        case 'link-cancel': {
            this.store.classNames += '  ojsButton-link ojsButton-link-cancel';
            break;
        }
        default: {
            break;
        }
        }
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
        this.classNamesByType();
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
