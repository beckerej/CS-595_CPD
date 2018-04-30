/**
 * ReactCalculator.js
 *
 * Created by kylewbanks on 2016-08-07.
 */
'use strict';

import React, { Component } from 'react';
import {
    View,
    Text,
    AppRegistry
} from 'react-native';

import Style from './Style';
import InputButton from './InputButton';

// Define the input buttons that will be displayed in the calculator.
const inputButtons = [
    [1, 2, 3, '/'],
    [4, 5, 6, '*'],
    [7, 8, 9, '-'],
    [0, '.', '=', '+'],
    ['c', 'ce']
];

class ReactCalculator extends Component {

    constructor(props) {
        super(props);

        this.initialState = {
            previousInputValue: 0,
            inputValue: 0,
            selectedSymbol: null,
            isDecimal: false,
            numOfDigits: 0
        };

        this.state = this.initialState;
    }

    render() {
        return (
            <View style={Style.rootContainer}>
                <View style={Style.displayContainer}>
                    <Text style={Style.displayText}>{this.state.inputValue}</Text>
                </View>
                <View style={Style.inputContainer}>
                    {this._renderInputButtons()}
                </View>
            </View>
        );
    }

    _renderInputButtons() {

        let views = inputButtons.map((row, idx) => {
            let inputRow = row.map((buttonVal, columnIdx) => {
                return <InputButton
                            value={buttonVal}
                            highlight={this.state.selectedSymbol === buttonVal}
                            onPress={this._onInputButtonPressed.bind(this, buttonVal)}
                            key={'butt-' + columnIdx} />;
            });

            return <View style={Style.inputRow} key={'row-' + idx}>{inputRow}</View>;
        });

        return views;
    }

    _round(value, decimals) {
        return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
    }
      

    _onInputButtonPressed(input) {
        switch (typeof input) {
            case 'number':
                return this._handleNumberInput(input);
            default:
                return this._handleStringInput(input);
        }
    }

    _handleNumberInput(num) {
        let inputValue = ""
        if(this.state.isDecimal && this.state.numOfDigits >= 1){
            inputValue = this._round(((this.state.inputValue) + (num / Math.pow(10, this.state.numOfDigits))), this.state.numOfDigits);
            this.setState({
                numOfDigits: this.state.numOfDigits+1
            });
        }
        else
            inputValue = (this.state.inputValue * 10) + num;

        this.setState({
            inputValue: inputValue
        });
    }

    _handleStringInput(str) {
        switch (str) {
            case '/':
            case '*':
            case '+':
            case '-':
                this.setState({
                    selectedSymbol: str,
                    previousInputValue: this.state.inputValue,
                    inputValue: 0, 
                    isDecimal: false,
                    numOfDigits: 0
                });
                break;

            case '=':
                let symbol = this.state.selectedSymbol,
                    inputValue = this.state.inputValue,
                    previousInputValue = this.state.previousInputValue;

                if (!symbol) {
                    return;
                }

                this.setState({
                    previousInputValue: 0,
                    inputValue: eval(previousInputValue + symbol + inputValue),
                    selectedSymbol: null, 
                    isDecimal: false,
                    numOfDigits: 0
                });
                break;

            case ".":
                this.setState({
                    isDecimal: true,
                    numOfDigits: 1
                 })
                    break;

            case 'ce':
                this.setState(this.initialState);
                    break;

            case 'c':
                this.setState({
                    inputValue: 0, 
                    isDecimal: false,
                    numOfDigits: 0
                });
                break;

        }
    }

}

AppRegistry.registerComponent('ReactCalculator', () => ReactCalculator);
