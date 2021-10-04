import oView from 'ojs-view';
import o from 'ojs-core';
import oInput from '../oInput/oInput';

class App extends oView {
    constructor() {
        super();
        this.store = {
            name: '',
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
                },
            }],
            change: () => this.rerender(),
            input: () => console.log('input'),
        });
    }

    build() {
        return o('div').style('width: 50%').add([
            this.oInput.init(),
            o('p').text(this.store.name).init(),
        ]).init();
    }
}

export default App;
