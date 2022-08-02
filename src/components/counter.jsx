import { render } from "@testing-library/react";
import React from "react";
import './Counter.css';

export class MainPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isModal: false,
            text: '',
            requestedText: '',
        }

        this.submitModalHandler = this.submitModalHandler.bind(this);
        this.cancelModalHandler = this.cancelModalHandler.bind(this);
        this.getRequest = this.getRequest.bind(this);
        this.clearRequestField = this.clearRequestField.bind(this);
    }

    openModalHandler = () => {
        this.setState({
            isModal: true,
        })
    }

    submitModalHandler(text) {

        this.setState({
            isModal: false,
            text: text,
        })
    }

    cancelModalHandler() {

        this.setState({
            isModal: false,
        })
    }

    getRequest() {

        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => {
                this.setState({
                    requestedText: JSON.stringify(data, null, 4),
                })
            });
    }

    clearRequestField() {

        this.setState({
            requestedText: '',
        })
    }

    render() {
        const modalProps = {
            submitModalHandler: this.submitModalHandler,
            cancelModalHandler: this.cancelModalHandler,
            getRequest: this.getRequest,
            clearRequestField: this.clearRequestField,
        }

        return (
            <div>
                <button onClick={this.openModalHandler}>1</button>
                <p>{this.state.text}</p>
                <button onClick={this.getRequest}>Сделать запрос на сервер</button>
                {this.state.isModal && <ModalWindow modalProps={modalProps} />}
                <p>{this.state.requestedText}</p>
            </div>
        )
    }
}

export class ModalWindow extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            text: '',
        }
    }

    componentDidMount() {
        const { getRequest } = this.props.modalProps;
        getRequest();
    }

    componentWillUnmount() {
        const { clearRequestField } = this.props.modalProps;
        clearRequestField();
    }

    inputChangeHandler(text) {
        this.setState({
            text: text
        })
    }

    submitModalHandler(text) {
        const { submitModalHandler } = this.props.modalProps;
        submitModalHandler(text);
    }

    cancelModalHandler() {
        const { cancelModalHandler } = this.props.modalProps;
        this.setState({
            text: '',
        })
        cancelModalHandler();
    }

    render() {

        return (
            <div className="modalWrapper">
                <div className="modalWindow">
                    <div className='closeModalButtonDiv'>
                        <button className="closeButton" onClick={() => { this.cancelModalHandler() }}>X</button>
                    </div>
                    <form onSubmit={(e) => { e.preventDefault(); this.submitModalHandler(this.state.text) }}>
                        <input onChange={(e) => { this.inputChangeHandler(e.target.value) }} type="text" aria-multiline='true' value={this.state.text} />
                        <input type="submit" value="Применить" />
                        <button onClick={() => { this.cancelModalHandler() }}>Отмена</button>
                    </form>
                </div>
            </div>
        )
    }
}