import oView from 'ojs-view';
import o from 'ojs-core';
import oInput from '../components/oInput/oInput';
import oButton from '../components/oButton/oButton';
import oSelect from '../components/oSelect/oSelect';

class App extends oView {
    constructor() {
        super();
        this.store = {
            name: '',
            fruit: '',
            array: [
                'witam',
                'dwa',
            ],
        };
    }

    components() {
        this.oInput = new oInput({
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

        this.oButtonPrimary = new oButton({
            text: 'Primary',
            name: 'witam',
            type: 'primary',
            click: () => {
                console.log('no elo xd');
            },
            // click: () => this.rerender(),
        });

        this.oButtonSecondary = new oButton({
            text: 'Secondary',
            type: 'secondary',
        });
        this.oButtonPrimaryConfirm = new oButton({
            text: 'Primary confirm',
            type: 'primary-confirm',
        });
        this.oButtonSecondaryConfirm = new oButton({
            text: 'Secondary confirm',
            type: 'secondary-confirm',
        });
        this.oButtonPrimaryCancel = new oButton({
            text: 'Primary cancel',
            type: 'primary-cancel',
        });
        this.oButtonSecondaryCancel = new oButton({
            text: 'Secondary cancel',
            type: 'secondary-cancel',
        });
        this.oButtonLink = new oButton({
            text: 'Link',
            type: 'link',
        });
        this.oButtonLinkConfirm = new oButton({
            text: 'Link confirm',
            type: 'link-confirm',
        });
        this.oButtonLinkCancel = new oButton({
            text: 'Link cancel',
            type: 'link-cancel',
        });

        this.oSelect = new oSelect({
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
    }

    build() {
        return o('div').style('width: 50%').add([
            this.oInput.init(),
            o('h2').text('Buttons').init(),
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
            this.oSelect.init(),
            o('p').text(this.store.name).init(),
            o('p').text(`Ulubiony owoc: ${this.store.fruit}`).init(),
        ]).init();
    }
}

export default App;
