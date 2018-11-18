import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';


class TurntableCreate extends Component {

    constructor(props) {
        super(props)
        this.state = {
            id: '',
            result: '',
            description: '',
            definition: ''
        };
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        fetch(`http://localhost:3000/api/log/`, {
            method: 'POST',
            body: JSON.stringify({ log: this.state }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.token
            })
        })
            .then((res) => res.json())
            .then((logData) => {
                // after we create a log we want to pull that data from the server.
                this.props.updateTurntableArray()
                this.setState({
                    id: '',
                    result: '',
                    description: '',
                    definition: ''
                })
            })
    }

    render() {
        return (
            <div>
                <h3>Enter A Technics Turntable</h3>
                <hr />
                {/* after the form is submitted the data gets sent to the method above*/}
                <Form onSubmit={this.handleSubmit} >
                    <FormGroup>
                        <Label for="result">Result</Label>
                        <Input id="result" type="text" name="result" value={this.state.result} placeholder="enter result" onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="def">Type</Label>
                        <Input type="select" name="definition" id="definition" value={this.state.definition} onChange={this.handleChange} placeholder="Type">
                            <option></option>
                            <option value="Motor">Motor</option>
                            <option value="Pitch">Pitch</option>
                            <option value="Weight">Weight</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="description">Notes</Label>
                        <Input id="description" type="text" name="description" value={this.state.description} placeholder="enter description" onChange={this.handleChange} />
                    </FormGroup>
                    <Button type="submit" color="primary"> Submit </Button>
                </Form>
            </div>
        )
    }
}

export default TurntableCreate;