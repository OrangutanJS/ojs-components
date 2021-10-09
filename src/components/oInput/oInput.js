import o, { oRef } from 'ojs-core';
import mapEvents from '../../utils/eventMapper';
import generateRandomHash from '../../utils/generateRandomHash';
import './input.css';

const TYPES = {
    text: 'Text field',
    date: 'Date field',
    email: 'E-mail field',
    month: 'Month field',
    number: 'Number field',
    password: 'Password field',
    tel: 'Tel field',
    file: 'File field',
    url: 'URL field',
};

class oInput {
    constructor(config) {
        this.store = {
            label: '',
            type: 'text',
            typeSpanText: false,
            disabled: false,
            placeholder: '',
            required: true,
            index: false,
            labelClass: 'ojsInput__label',
            labelStyle: false,
            inputClass: 'ojsInput__field',
            inputStyle: false,
            attributes: [],
        };
        this.inputRef = oRef();

        this.mergeConfig(config);
        this.store.id = config.id ? `${config.id}--ojsInput` : `ojsInput--${generateRandomHash()}`;
    }

    mergeConfig(config) {
        Object.assign(this.store, config);
        if (config.events) {
            this.store.events = [...config.events, ...this.concatEvents(config)];
        } else {
            this.store.events = this.concatEvents(config);
        }
    }

    concatEvents(config) {
        const defaultEvents = [
            {
                name: 'change',
                fn: ({ target: { value, name } }) => {
                    const { db, index } = this.store;
                    if (db[name] instanceof Array) {
                        db[name][index] = value;
                        return;
                    }
                    db[name] = value;
                },
            },
        ];
        return defaultEvents.concat(mapEvents(config));
    }

    enabled() {
        this.inputRef.target.disabled = false;
    }

    disabled() {
        this.inputRef.target.disabled = true;
    }

    build() {
        const {
            attributes, labelClass, db, disabled, id, inputClass, inputStyle, index, label, labelStyle, name, placeholder, required, type, typeSpanText,
        } = this.store;
        const value = index ? db[name][index] : db[name];
        let typeSpanTextHTML = false;
        if (typeSpanText && TYPES[type]) {
            typeSpanTextHTML = typeof typeSpanText === 'boolean' ? o('span').text(TYPES[type]).init() : o('span').text(typeSpanText).init();
        }

        const oInputElement = o('input')
            .class(!inputStyle && inputClass)
            .disabled(disabled)
            .value(value)
            .type(type)
            .attr(attributes)
            .event(this.store.events);

        if (inputStyle) oInputElement.style(inputStyle);
        if (placeholder) oInputElement.placeholder(placeholder);
        if (name) oInputElement.name(name);
        if (required) oInputElement.attr({ required });

        const oLabelElement = o('label')
            .class(!labelStyle && labelClass)
            .id(id)
            .add([
                o('p').text(label).init(),
                typeSpanText && typeSpanTextHTML,
                oInputElement.init(),
            ]);

        if (labelStyle) oLabelElement.style(labelStyle);

        return oLabelElement.init();
    }

    init() {
        return this.build();
    }
}

export default oInput;
