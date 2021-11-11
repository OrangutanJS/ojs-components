import o, { oRef } from 'ojs-core';
import mapEvents from '../../utils/eventMapper';
import generateRandomHash from '../../utils/generateRandomHash';
import './select.css';

class OSelect {
    constructor(config) {
        this.store = {
            attributes: [],
            db: '',
            events: [],
            disabled: false,
            label: '',
            labelClass: 'ojsSelect',
            labelStyle: false,
            name: '',
            options: [],
            required: false,
            selectClass: '',
            selectStyle: false,
        };
        this.selectRef = oRef();

        this.mergeConfig(config);
        this.store.id = config.id ? `${config.id}--ojsSelect` : `ojsSelect--${generateRandomHash()}`;
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
        this.selectRef.target.disabled = false;
    }

    disabled() {
        this.selectRef.target.disabled = true;
    }

    getId() {
        return this.store.id;
    }

    mapOptions(store) {
        const { db, name, options } = store;
        options.unshift({ text: '', value: '', blank: true });
        return options.map(option => {
            const oOption = o('option')
                .text(option.text)
                .attr({ value: option.value });
            if (db[name] === option.value) oOption.attr({ selected: 'true' });
            if (option.blank) oOption.style('display: none');
            return oOption.init();
        });
    }

    build() {
        const {
            attributes, disabled, events, id, label, labelClass, labelStyle, name, required, selectClass, selectStyle,
        } = this.store;
        const mappedOptions = this.mapOptions(this.store);
        const select = o('select')
            .attr([{ name: 'name', val: name || id }, ...attributes])
            .add([mappedOptions])
            .event(events)
            .ref(this.selectRef);

        if (selectStyle) select.style(selectStyle);
        if (selectClass) select.class(selectClass);
        if (disabled) select.attr({ disabled });
        if (required) select.attr({ required });

        const oLabelElement = o('label')
            .class(!labelStyle && labelClass)
            .add([
                o('span').text(label).init(),
                select.init(),
            ])
            .id(id);

        if (labelStyle) oLabelElement.style(labelStyle);

        return oLabelElement.init();
    }

    init() {
        return this.build();
    }
}

export default OSelect;
