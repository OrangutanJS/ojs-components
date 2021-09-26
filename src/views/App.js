import oView from 'ojs-view';
import o from 'ojs-core';
import Input from '../oInput/Input';
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
        this.input = new Input({
            label: 'Podaj swoje imię',
            name: 'name',
            db: this.store,
        });

        this.oInput = new oInput({
            label: 'Testujemy',
            name: 'name',
            db: this.store,
            // placeholder: 'tescik',
            change: () => this.rerender(),
        });
    }

    build() {
        return o('div').style('width: 50%').add([
            this.input.init(),
            this.oInput.init(),
            o('p').text(this.store.name).init(),
        ]).init();
    }
}

export default App;
