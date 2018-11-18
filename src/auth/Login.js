import React, { Component } from "react";
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            passwordhash: ''
        };
    }
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    handleSubmit = (event) => {
        fetch("http://localhost:3000/api/login", {
            method: 'POST',
            body: JSON.stringify({user:this.state}),
            headers: new Headers({
                'Content-Type': 'application/json'
              })
        }).then(
            (response) => response.json()
        ).then((data) => {
            this.props.setToken(data.sessionToken)
        }) 
        event.preventDefault()
    }
    render() {
        return (
            <div>
                <h1>Login</h1>
                <h6>Welcome to the Place For All Things Technics!!!</h6>
                <Form>
                    <FormGroup>
                        <Label for="username">Username</Label>
                        <Input id="li_username" type="text" name="username" placeholder="enter username" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Password</Label>
                        <Input id="li_password" type="password" name="passwordhash" placeholder="enter password" />
                    <Button type="submit"> Submit </Button>
                    </FormGroup>
                </Form>
            </div>
        )
    }
}
export default Login;