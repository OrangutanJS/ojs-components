import o, { oRef } from 'ojs-core';
import mapEvents from '../../utils/eventMapper';
import generateRandomHash from '../../utils/generateRandomHash';
import './radio.css';

function oInputElement({
    label, radioClass, radioStyle, db, disabled, events, name, required, value,
}, ref) {
    const input = o('input')
        .ref(ref)
        .disabled(disabled)
        .event(events)
        .type('radio')
        .name(name)
        .value(value || label);

    if (db[name] === (value || label)) input.attr({ checked: 'true' });
    if (required) input.attr({ required });
    if (radioClass) input.class(radioClass);
    if (radioStyle) input.style(radioStyle);
    return input;
}

function oSpanElement({ spanClass, spanStyle, label }) {
    const span = o('span').text(label).class(!spanStyle && spanClass);
    if (spanStyle) span.style(spanStyle);

    return span;
}

class ORadio {
    constructor(config) {
        this.store = {
            db: '',
            disabled: '',
            label: '',
            labelClass: 'ojsRadio__label',
            labelStyle: '',
            name: '',
            radioClass: '',
            radioStyle: '',
            required: '',
            spanClass: 'ojsRadio__span',
            spanStyle: '',
            value: '',
        };
        this.oRadioRef = oRef();

        this.mergeConfig(config);
        this.store.id = config.id ? `${config.id}--ojsRadio` : `ojsRadio--${generateRandomHash()}`;
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
                    const { db } = this.store;
                    db[name] = value;
                },
            },
        ];
        return defaultEvents.concat(mapEvents(config));
    }

    enabled() {
        this.oRadioRef.target.disabled = false;
    }

    disabled() {
        this.oRadioRef.target.disabled = true;
    }

    getId() {
        return this.store.id;
    }

    build() {
        const { id, labelClass, labelStyle } = this.store;
        const oLabelElement = o('label')
            .id(id)
            .class(!labelStyle && labelClass)
            .add([
                oInputElement(this.store, this.oRadioRef).init(),
                oSpanElement(this.store).init(),
            ])
            .init();

        if (labelStyle) oLabelElement.style(labelStyle);

        return oLabelElement;
    }

    init() {
        return this.build();
    }
}
export default ORadio;
