import React, { Component } from "react";
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

class Signup extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',  //1
            password: ''

        };
    }
    handleChange = (event) => {
        //2
this.setState({
        //3                     //4
    [event.target.name]: event.target.value,
});
}
    render() {
        return (
            <div>
                <h1>Sign Up</h1>
                <h6>Welcome to the Place For All Things Technics!!!</h6>
                <Form>
                    <FormGroup>
                        <Label for="username">Username</Label>
                        <Input id="username" type="text" name="username" placeholder="enter username" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Password</Label>
                        <Input id="su_password" type="password" name="password" placeholder="enter password" />
                    </FormGroup>
                </Form>
                <Button type="submit"> Submit </Button>
            </div>
        )
    }
}
handleSubmit = (event) => {
    //1
    fetch("http://localhost:3000/api/user", {
        method: 'POST', 
        body: JSON.stringify({user:this.state}), 
        headers: new Headers({
            'Content-Type': 'application/json' 
        })
    }).then(
        (response) => response.json() //5
    ).then((data) => {
        this.props.setToken(data.sessionToken) 
    }) 
    event.preventDefault()
}
export default Signup;