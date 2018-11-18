import React, { Component } from "react";
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import APIURL from '../helpers/environment';
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
handleSubmit = (event) => {
    //1
    fetch(`${APIURL}/user/createuser`, {
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
    render() {
        const submitHandler = !this.state.username ? this.validateSignUp : this.handleSubmit
        return (
            <div>
                <h1>Sign Up</h1>
                <h6>Welcome to the Place For All Things Technics!!!</h6>
                <Form onSubmit={this.handleSubmit} >
                    <FormGroup>
                        <Label for="username">Username</Label>
                        <Input id="username" type="text" name="username" placeholder="enter username" onChange={this.handleChange} required />
                        {this.state.errorMessage && <span className="error">user name is required</span>}
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Password</Label>
                        <Input id="su_password" type="password" name="password" placeholder="enter password" onChange={this.handleChange} required />
                    </FormGroup>
                    <Button type="submit"> Submit </Button>
                    </Form>
  
                
                
                
            </div>
            
            
        );
    }
}

export default Signup;