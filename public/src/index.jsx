import * as React from 'react';
import ReactDOM from 'react-dom';
import { LocaleProvider, LocaleLabel } from './LocaleProvider.jsx';

class App extends React.Component {
    render() {
        return (
            <LocaleProvider>
                <LocaleLabel value="Button.confirm" /> 
            </LocaleProvider>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));