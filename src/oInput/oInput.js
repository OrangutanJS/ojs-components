import mapEvents from '../utils/eventMapper';
import './input.css';
import o from 'ojs-core';

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
            typeText: false,
            placeholder: '',
            required: true,
            index: false,
            labelClass: 'input__label',
            labelStyle: false,
            inputClass: 'input__field',
            inputStyle: false,
            attributes: [],
        };

        this.configMerge(config);
        this.store.events = this.events(config);
        this.store.id = config.id ? `${config.id}--input` : `${new Date().getTime()}${Math.floor(Math.random() * 100)}--input`;
    }

    configMerge(config) {
        Object.assign(this.store, config);
        if (config.events) {
            this.store.events = [...config.events, { ...this.events().change }];
        }
    }

    events(config) {
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

    build() {
        const {
            attributes, labelClass, db, id, inputClass, inputStyle, index, label, labelStyle, name, placeholder, type, typeText,
        } = this.store;
        const value = index ? db[name][index] : db[name];
        let typeTextSpan = false;
        if (typeText && TYPES[type]) {
            typeTextSpan = typeof typeText === 'boolean' ? o('span').text(TYPES[type]).init() : o('span').text(typeText).init();
        }

        return o('label')
            .class(!labelStyle && labelClass)
            .style(labelStyle && labelStyle)
            .id(id)
            .add([
                o('p').text(label).init(),
                typeText && typeTextSpan,
                o('input')
                    .class(!inputStyle && inputClass)
                    .style(inputStyle && inputStyle)
                    .value(value)
                    .type(type)
                    .name(name)
                    .attr(attributes)
                    .placeholder(placeholder)
                    .event(this.store.events)
                    .init(),
            ])
            .init();
    }

    init() {
        return this.build();
    }
}

export default oInput;
