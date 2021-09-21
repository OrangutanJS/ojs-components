import oView from "ojs-view";
import o from "ojs-core";
import Input from "../oInput/Input";

class App extends oView {
    constructor() {
        super();
        this.store = {
            name: ''
        }
    }

    components() {
        this.input = new Input({
            label: 'Podaj swoje imię',
            name: 'name',
            db: this.store
        })
    }

    build() {
        return o('div').style('width: 50%').add([
            this.input.init()
        ]).init()
    }
}

export default App;
