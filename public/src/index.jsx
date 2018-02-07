import * as React from 'react';
import ReactDOM from 'react-dom';
import { LocaleProvider, LocaleLabel, LocaleValue } from './LocaleProvider.jsx';
import zh_CN from '../locales/zh_CN';
import en_US from '../locales/en_US';

class App extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            "locale": zh_CN
        }
    }

    Change(locale) {
        this.setState({
            "locale": locale
        });
    }

    render() {
        return (
            <LocaleProvider locale={this.state.locale}>
                {LocaleValue(this.state.locale, "Button.confirm")}
                <br />
                <a href='javascript:(0)' onClick={() => this.Change(zh_CN)}><LocaleLabel value="Button.confirm" /></a>
                <br />
                <a href='javascript:(0)' onClick={() => this.Change(en_US)}><LocaleLabel value="Button.cancel" /></a>
            </LocaleProvider>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));