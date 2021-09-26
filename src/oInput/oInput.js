import o from 'ojs-core';
import mapEvents from '../utils/eventMapper';
import './input.css';

const LABELS = {
    text: 'Pole typu tekst',
    date: 'Pole daty',
    email: 'Pole adres e-mail',
    month: 'Pole daty (miesiąc)',
    range: 'Pole typu suwak',
    number: 'Pole typu numer',
    password: 'Pole typu hasło',
    tel: 'Pole numer telefonu',
    file: 'Pole typu plik',
    url: 'Pole adres URL',
};

class oInput {
    constructor(config) {
        this.store = {
            label: '',
            type: 'text',
            placeholder: '',
            required: true,
            index: false,
            attributes: [],
        };

        this.configMerge(config);
        this.store.events = this.events(config);
        this.store.id = config.id ? `${config.id}--input` : `${new Date().getTime()}${Math.floor(Math.random() * 100)}--input`;

        console.log(this.store);
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
            attributes, db, id, index, label, name, placeholder, type,
        } = this.store;
        const value = index ? db[name][index] : db[name];

        return o('label').class('input__label').id(id)
            .add([
                o('p').text(label).init(),
                o('span').text(LABELS[type]).init(),
                o('input')
                    .class('input__field')
                    .value(value).type(type)
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
