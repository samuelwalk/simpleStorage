import React, { Component } from 'react';
import './App.css';
import simpleStorage from './simpleStorage';
import web3 from './web3';

class App extends Component {

    state = {
        localStoredData: '',
        contractStoredData: ''
    };

    async componentDidMount() {
        const contractStoredData = await simpleStorage.methods.storedData().call();

        this.setState({ contractStoredData })
    }

    updateValue = async (event) => {
        event.preventDefault();

        this.setState({ contractStoredData: 'Loading...'})

        try {
            const accounts = await web3.eth.getAccounts();
            await simpleStorage.methods.set(this.state.localStoredData).send({
                from: accounts[0]
            });
        } catch (err) {
            console.error(err);
        }

        const contractStoredData = await simpleStorage.methods.storedData().call();

        this.setState({ contractStoredData })
    };

    render() {
        return (
            <div className="App">
                <h1>Simple Storage</h1>
                <form onSubmit={this.updateValue}>
                    <div>
                        <input
                            type="text"
                            value={this.state.localStoredData}
                            onChange={event => this.setState({ localStoredData: event.target.value })}
                        />
                    </div>
                    <button>Update Value</button>
                </form>
                <h3>Value stored in Contract is: </h3>
                <h3>{this.state.contractStoredData}</h3>
            </div>
        );
    }
}

export default App;
