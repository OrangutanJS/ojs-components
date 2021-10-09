import o from 'ojs-core';
import generateRandomHash from '../../utils/generateRandomHash';
import mapEvents from '../../utils/eventMapper';
import './checkbox.css';

function oInputElement({
    checkboxClass, checkboxStyle, db, events, name,
}) {
    const input = o('input')
        .event(events)
        .type('checkbox')
        .name(name);

    if (db[name] === true) input.attr({ checked: 'true' });
    if (checkboxClass) input.class(checkboxClass);
    if (checkboxStyle) input.style(checkboxStyle);
    return input;
}

function oSpanElement({ spanClass, spanStyle, label }) {
    const span = o('span').text(label).class(!spanStyle && spanClass);
    if (spanStyle) span.style(spanStyle);

    return span;
}

class oCheckbox {
    constructor(config) {
        this.store = {
            db: '',
            checkboxClass: '',
            checkboxStyle: '',
            label: '',
            labelClass: 'ojsCheckbox__label',
            labelStyle: '',
            name: '',
            spanClass: 'ojsCheckbox__span',
            spanStyle: '',

        };

        this.mergeConfig(config);
        this.store.id = config.id ? `${config.id}--ojsCheckbox` : `ojsCheckbox--${generateRandomHash()}`;
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
                fn: ({ target: { checked, name } }) => {
                    const { db } = this.store;
                    db[name] = checked;
                },
            },
        ];
        return defaultEvents.concat(mapEvents(config));
    }

    build() {
        const {
            id, labelClass, labelStyle,
        } = this.store;

        const oLabelElement = o('label').id(id)
            .class(!labelStyle && labelClass)
            .add([
                oInputElement(this.store),
                oSpanElement(this.store),
            ]);

        if (labelStyle) oLabelElement.style(labelStyle);

        return oLabelElement.init();
    }

    init() {
        return this.build();
    }
}

export default oCheckbox;
