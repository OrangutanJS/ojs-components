import "./components.css";
import $6l6W9$ojscore, {oRef as $6l6W9$oRef} from "ojs-core";


const $38c4467188a38376$var$EVENTS_LIST = [
    'change',
    'click',
    'input',
    'keyup',
    'keypress',
    'keydown',
    'focus',
    'focusin',
    'focusout',
    'blur'
];
function $38c4467188a38376$var$mapEvents(config = {
}) {
    const attributes = Object.entries(config);
    return attributes.filter(([name])=>$38c4467188a38376$var$EVENTS_LIST.includes(name)
    ).map(([name, fn])=>({
            name: name,
            fn: fn
        })
    );
}
var $38c4467188a38376$export$2e2bcd8739ae039 = $38c4467188a38376$var$mapEvents;


function $9b4e7d16e4ace6de$export$2e2bcd8739ae039() {
    return `${new Date().getTime()}${Math.floor(Math.random() * 100)}`;
}



const $84db3a0f5154b6a6$var$TYPES = {
    text: 'Text field',
    date: 'Date field',
    email: 'E-mail field',
    month: 'Month field',
    number: 'Number field',
    password: 'Password field',
    tel: 'Tel field',
    file: 'File field',
    url: 'URL field'
};
class $84db3a0f5154b6a6$var$OInput {
    constructor(config){
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
            attributes: []
        };
        this.inputRef = $6l6W9$oRef();
        this.mergeConfig(config);
        this.store.id = config.id ? `${config.id}--ojsInput` : `ojsInput--${$9b4e7d16e4ace6de$export$2e2bcd8739ae039()}`;
    }
    mergeConfig(config1) {
        Object.assign(this.store, config1);
        if (config1.events) this.store.events = [
            ...config1.events,
            ...this.concatEvents(config1)
        ];
        else this.store.events = this.concatEvents(config1);
    }
    concatEvents(config2) {
        const defaultEvents = [
            {
                name: 'change',
                fn: ({ target: { value: value , name: name  }  })=>{
                    const { db: db , index: index  } = this.store;
                    if (db[name] instanceof Array) {
                        db[name][index] = value;
                        return;
                    }
                    db[name] = value;
                }
            }, 
        ];
        return defaultEvents.concat($38c4467188a38376$export$2e2bcd8739ae039(config2));
    }
    enabled() {
        this.inputRef.target.disabled = false;
    }
    disabled() {
        this.inputRef.target.disabled = true;
    }
    getId() {
        return this.store.id;
    }
    build() {
        const { attributes: attributes , labelClass: labelClass , db: db , disabled: disabled , id: id , inputClass: inputClass , inputStyle: inputStyle , index: index , label: label , labelStyle: labelStyle , name: name , placeholder: placeholder , required: required , type: type , typeSpanText: typeSpanText ,  } = this.store;
        const value = index ? db[name][index] : db[name];
        let typeSpanTextHTML = false;
        if (typeSpanText && $84db3a0f5154b6a6$var$TYPES[type]) typeSpanTextHTML = typeof typeSpanText === 'boolean' ? $6l6W9$ojscore('span').text($84db3a0f5154b6a6$var$TYPES[type]).init() : $6l6W9$ojscore('span').text(typeSpanText).init();
        const oInputElement = $6l6W9$ojscore('input').class(!inputStyle && inputClass).disabled(disabled).value(value).type(type).attr(attributes).event(this.store.events);
        if (inputStyle) oInputElement.style(inputStyle);
        if (placeholder) oInputElement.placeholder(placeholder);
        if (name) oInputElement.name(name);
        if (required) oInputElement.attr({
            required: required
        });
        const oLabelElement = $6l6W9$ojscore('label').class(!labelStyle && labelClass).id(id).add([
            $6l6W9$ojscore('p').text(label).init(),
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
var $84db3a0f5154b6a6$export$2e2bcd8739ae039 = $84db3a0f5154b6a6$var$OInput;






const $c503fccc4f31c3cb$var$classNamesByTypeObject = {
    primary: ' ojsButton-primary',
    secondary: ' ojsButton-secondary',
    'primary-confirm': ' ojsButton-primary-confirm',
    'secondary-confirm': ' ojsButton-secondary-confirm',
    'primary-cancel': ' ojsButton-primary-cancel',
    'secondary-cancel': ' ojsButton-secondary-cancel',
    link: ' ojsButton-link',
    'link-confirm': '  ojsButton-link ojsButton-link-confirm',
    'link-cancel': '  ojsButton-link ojsButton-link-cancel'
};
const $c503fccc4f31c3cb$var$buttonAttributesArray = (store)=>[
        {
            name: 'type',
            val: store.submit ? 'submit' : 'button'
        },
        {
            name: 'name',
            val: store.name || `ojsButton--${$9b4e7d16e4ace6de$export$2e2bcd8739ae039()}`
        }, 
    ]
;
class $c503fccc4f31c3cb$var$OButton {
    constructor(config){
        this.store = {
            attributes: [],
            classNames: 'ojsButton',
            disabled: false,
            name: '',
            style: false,
            text: '',
            type: 'primary',
            submit: false
        };
        this.buttonRef = $6l6W9$oRef();
        this.mergeConfig(config);
        this.store.id = config.id ? `${config.id}--ojsButton` : `ojsButton--${$9b4e7d16e4ace6de$export$2e2bcd8739ae039()}`;
    }
    mergeConfig(config1) {
        Object.assign(this.store, config1);
        if (config1.events) this.store.events = [
            ...config1.events,
            ...$38c4467188a38376$export$2e2bcd8739ae039(config1)
        ];
        else this.store.events = $38c4467188a38376$export$2e2bcd8739ae039(config1);
    }
    addClassNamesByType() {
        if (this.store.style || this.store.classNames !== 'ojsButton') return;
        this.store.classNames += $c503fccc4f31c3cb$var$classNamesByTypeObject[this.store.type];
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
    getId() {
        return this.store.id;
    }
    build() {
        this.addClassNamesByType();
        const { attributes: attributes , classNames: classNames , disabled: disabled , events: events , style: style , text: text ,  } = this.store;
        const button = $6l6W9$ojscore('button').attr([
            ...$c503fccc4f31c3cb$var$buttonAttributesArray(this.store),
            ...attributes
        ]).class(classNames).event(events).ref(this.buttonRef).text(text);
        if (disabled) button.attr({
            disabled: disabled
        });
        if (style) button.style(style);
        return button.init();
    }
    init() {
        return this.build();
    }
}
var $c503fccc4f31c3cb$export$2e2bcd8739ae039 = $c503fccc4f31c3cb$var$OButton;






class $d0f4e6692216ea55$var$OSelect {
    constructor(config){
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
            selectStyle: false
        };
        this.selectRef = $6l6W9$oRef();
        this.mergeConfig(config);
        this.store.id = config.id ? `${config.id}--ojsSelect` : `ojsSelect--${$9b4e7d16e4ace6de$export$2e2bcd8739ae039()}`;
    }
    mergeConfig(config1) {
        Object.assign(this.store, config1);
        if (config1.events) this.store.events = [
            ...config1.events,
            ...this.concatEvents(config1)
        ];
        else this.store.events = this.concatEvents(config1);
    }
    concatEvents(config2) {
        const defaultEvents = [
            {
                name: 'change',
                fn: ({ target: { value: value , name: name  }  })=>{
                    const { db: db , index: index  } = this.store;
                    if (db[name] instanceof Array) {
                        db[name][index] = value;
                        return;
                    }
                    db[name] = value;
                }
            }, 
        ];
        return defaultEvents.concat($38c4467188a38376$export$2e2bcd8739ae039(config2));
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
        const { db: db , name: name , options: options  } = store;
        options.unshift({
            text: '',
            value: '',
            blank: true
        });
        return options.map((option)=>{
            const oOption = $6l6W9$ojscore('option').text(option.text).attr({
                value: option.value
            });
            if (db[name] === option.value) oOption.attr({
                selected: 'true'
            });
            if (option.blank) oOption.style('display: none');
            return oOption.init();
        });
    }
    build() {
        const { attributes: attributes , disabled: disabled , events: events , id: id , label: label , labelClass: labelClass , labelStyle: labelStyle , name: name , required: required , selectClass: selectClass , selectStyle: selectStyle ,  } = this.store;
        const mappedOptions = this.mapOptions(this.store);
        const select = $6l6W9$ojscore('select').attr([
            {
                name: 'name',
                val: name || id
            },
            ...attributes
        ]).add([
            mappedOptions
        ]).event(events).ref(this.selectRef);
        if (selectStyle) select.style(selectStyle);
        if (selectClass) select.class(selectClass);
        if (disabled) select.attr({
            disabled: disabled
        });
        if (required) select.attr({
            required: required
        });
        const oLabelElement = $6l6W9$ojscore('label').class(!labelStyle && labelClass).add([
            $6l6W9$ojscore('span').text(label).init(),
            select.init(), 
        ]).id(id);
        if (labelStyle) oLabelElement.style(labelStyle);
        return oLabelElement.init();
    }
    init() {
        return this.build();
    }
}
var $d0f4e6692216ea55$export$2e2bcd8739ae039 = $d0f4e6692216ea55$var$OSelect;






function $ee7ce2551efdfb4c$var$oInputElement({ checkboxClass: checkboxClass , checkboxStyle: checkboxStyle , db: db , disabled: disabled , events: events , name: name , required: required ,  }, checkboxRef) {
    const input = $6l6W9$ojscore('input').ref(checkboxRef).disabled(disabled).event(events).type('checkbox').name(name);
    if (db[name] === true) input.attr({
        checked: 'true'
    });
    if (required) input.attr({
        required: required
    });
    if (checkboxClass) input.class(checkboxClass);
    if (checkboxStyle) input.style(checkboxStyle);
    return input;
}
function $ee7ce2551efdfb4c$var$oSpanElement({ spanClass: spanClass , spanStyle: spanStyle , label: label  }) {
    const span = $6l6W9$ojscore('span').text(label).class(!spanStyle && spanClass);
    if (spanStyle) span.style(spanStyle);
    return span;
}
class $ee7ce2551efdfb4c$var$OCheckbox {
    constructor(config){
        this.store = {
            db: '',
            disabled: false,
            checkboxClass: '',
            checkboxStyle: '',
            label: '',
            labelClass: 'ojsCheckbox__label',
            labelStyle: '',
            name: '',
            required: false,
            spanClass: 'ojsCheckbox__span',
            spanStyle: ''
        };
        this.checkboxRef = $6l6W9$oRef();
        this.mergeConfig(config);
        this.store.id = config.id ? `${config.id}--ojsCheckbox` : `ojsCheckbox--${$9b4e7d16e4ace6de$export$2e2bcd8739ae039()}`;
    }
    mergeConfig(config1) {
        Object.assign(this.store, config1);
        if (config1.events) this.store.events = [
            ...config1.events,
            ...this.concatEvents(config1)
        ];
        else this.store.events = this.concatEvents(config1);
    }
    concatEvents(config2) {
        const defaultEvents = [
            {
                name: 'change',
                fn: ({ target: { checked: checked , name: name  }  })=>{
                    const { db: db  } = this.store;
                    db[name] = checked;
                }
            }, 
        ];
        return defaultEvents.concat($38c4467188a38376$export$2e2bcd8739ae039(config2));
    }
    enabled() {
        this.checkboxRef.target.disabled = false;
    }
    disabled() {
        this.checkboxRef.target.disabled = true;
    }
    getId() {
        return this.store.id;
    }
    build() {
        const { id: id , labelClass: labelClass , labelStyle: labelStyle  } = this.store;
        const oLabelElement = $6l6W9$ojscore('label').id(id).class(!labelStyle && labelClass).add([
            $ee7ce2551efdfb4c$var$oInputElement(this.store, this.checkboxRef),
            $ee7ce2551efdfb4c$var$oSpanElement(this.store), 
        ]);
        if (labelStyle) oLabelElement.style(labelStyle);
        return oLabelElement.init();
    }
    init() {
        return this.build();
    }
}
var $ee7ce2551efdfb4c$export$2e2bcd8739ae039 = $ee7ce2551efdfb4c$var$OCheckbox;






function $a1c99d1d9696f167$var$oInputElement({ label: label , radioClass: radioClass , radioStyle: radioStyle , db: db , disabled: disabled , events: events , name: name , required: required , value: value ,  }, ref) {
    const input = $6l6W9$ojscore('input').ref(ref).disabled(disabled).event(events).type('radio').name(name).value(value || label);
    if (db[name] === (value || label)) input.attr({
        checked: 'true'
    });
    if (required) input.attr({
        required: required
    });
    if (radioClass) input.class(radioClass);
    if (radioStyle) input.style(radioStyle);
    return input;
}
function $a1c99d1d9696f167$var$oSpanElement({ spanClass: spanClass , spanStyle: spanStyle , label: label  }) {
    const span = $6l6W9$ojscore('span').text(label).class(!spanStyle && spanClass);
    if (spanStyle) span.style(spanStyle);
    return span;
}
class $a1c99d1d9696f167$var$ORadio {
    constructor(config){
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
            value: ''
        };
        this.oRadioRef = $6l6W9$oRef();
        this.mergeConfig(config);
        this.store.id = config.id ? `${config.id}--ojsRadio` : `ojsRadio--${$9b4e7d16e4ace6de$export$2e2bcd8739ae039()}`;
    }
    mergeConfig(config1) {
        Object.assign(this.store, config1);
        if (config1.events) this.store.events = [
            ...config1.events,
            ...this.concatEvents(config1)
        ];
        else this.store.events = this.concatEvents(config1);
    }
    concatEvents(config2) {
        const defaultEvents = [
            {
                name: 'change',
                fn: ({ target: { value: value , name: name  }  })=>{
                    const { db: db  } = this.store;
                    db[name] = value;
                }
            }, 
        ];
        return defaultEvents.concat($38c4467188a38376$export$2e2bcd8739ae039(config2));
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
        const { id: id , labelClass: labelClass , labelStyle: labelStyle  } = this.store;
        const oLabelElement = $6l6W9$ojscore('label').id(id).class(!labelStyle && labelClass).add([
            $a1c99d1d9696f167$var$oInputElement(this.store, this.oRadioRef).init(),
            $a1c99d1d9696f167$var$oSpanElement(this.store).init(), 
        ]).init();
        if (labelStyle) oLabelElement.style(labelStyle);
        return oLabelElement;
    }
    init() {
        return this.build();
    }
}
var $a1c99d1d9696f167$export$2e2bcd8739ae039 = $a1c99d1d9696f167$var$ORadio;




export {$84db3a0f5154b6a6$export$2e2bcd8739ae039 as OInput, $c503fccc4f31c3cb$export$2e2bcd8739ae039 as OButton, $d0f4e6692216ea55$export$2e2bcd8739ae039 as OSelect, $ee7ce2551efdfb4c$export$2e2bcd8739ae039 as OCheckbox, $a1c99d1d9696f167$export$2e2bcd8739ae039 as ORadio};
//# sourceMappingURL=components.js.map
