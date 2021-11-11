import oView from 'ojs-view';
import o from 'ojs-core';

import {
    OInput, OButton, OSelect, ORadio, OCheckbox,
} from '../../npm/components';

class App extends oView {
    constructor() {
        super();
        this.store = {
            name: '',
            fruit: '',
            checkbox_field: '',
            radio_field: '',
            array: [
                'witam',
                'dwa',
            ],
        };
    }

    components() {
        this.oInput = new OInput({
            label: 'Testujemy',
            name: 'name',
            db: this.store,
            typeSpanText: true,
            events: [{
                name: 'change',
                fn: () => {
                    console.log('change from events');
                    this.oButtonPrimary.enabled();
                },
            }],
            change: () => this.rerender(),
            input: () => console.log('input'),
        });
        console.log(this.oInput.init());

        this.oButtonPrimary = new OButton({
            text: 'Primary',
            name: 'witam',
            type: 'primary',
            click: () => {
                console.log('no elo xd');
            },
            // click: () => this.rerender(),
        });

        this.oButtonSecondary = new OButton({
            text: 'Secondary',
            type: 'secondary',
        });
        this.oButtonPrimaryConfirm = new OButton({
            text: 'Primary confirm',
            type: 'primary-confirm',
        });
        this.oButtonSecondaryConfirm = new OButton({
            text: 'Secondary confirm',
            type: 'secondary-confirm',
        });
        this.oButtonPrimaryCancel = new OButton({
            text: 'Primary cancel',
            type: 'primary-cancel',
        });
        this.oButtonSecondaryCancel = new OButton({
            text: 'Secondary cancel',
            type: 'secondary-cancel',
        });
        this.oButtonLink = new OButton({
            text: 'Link',
            type: 'link',
        });
        this.oButtonLinkConfirm = new OButton({
            text: 'Link confirm',
            type: 'link-confirm',
        });
        this.oButtonLinkCancel = new OButton({
            text: 'Link cancel',
            type: 'link-cancel',
        });

        this.oSelect = new OSelect({
            label: 'Twój ulubiony owoc',
            name: 'fruit',
            db: this.store,
            change: () => {
                console.log(this.store);
                this.rerender();
            },
            options: [
                { text: 'Jabłko', value: 'apple' },
                { text: 'Gruszka', value: 'pear' },
            ],
        });

        this.oCheckboxList = new OCheckbox({
            label: 'I like apples',
            name: 'checkbox_field',
            db: this.store,
            change: () => this.rerender(),
        });

        this.oRadioFirst = new ORadio({
            label: 'Apple',
            name: 'radio_field',
            db: this.store,
            change: () => this.rerender(),
        });
        this.oRadioSecond = new ORadio({
            label: 'Pear',
            name: 'radio_field',
            db: this.store,
            change: () => this.rerender(),
        });
    }

    build() {
        return o('div').style('width: 50%').add([
            o('h2').text('Input section:').init(),
            this.oInput,
            o('p').text(this.store.name).init(),
            o('h2').text('Buttons section:').init(),
            o('div').style('width: 900px; display: flex; flex-wrap: wrap; justify-content: center').add([
                this.oButtonPrimary.init(),
                this.oButtonSecondary.init(),
                this.oButtonPrimaryConfirm.init(),
                this.oButtonSecondaryConfirm.init(),
                this.oButtonPrimaryCancel.init(),
                this.oButtonSecondaryCancel.init(),
                this.oButtonLink.init(),
                this.oButtonLinkConfirm.init(),
                this.oButtonLinkCancel.init(),
            ]).init(),
            o('h2').text('Select section:').init(),
            this.oSelect.init(),
            o('p').text(`Ulubiony owoc: ${this.store.fruit}`).init(),
            o('h2').text('Checkbox section:').init(),
            this.oCheckboxList.init(),
            o('p').text(`He likes apples? ${this.store.checkbox_field ? 'Yes' : 'No'}`),
            o('h2').text('Radio section:').init(),
            this.oRadioFirst.init(),
            this.oRadioSecond.init(),
            o('p').text(`He chose: ${this.store.radio_field}`),
        ]).init();
    }
}

export default App;
