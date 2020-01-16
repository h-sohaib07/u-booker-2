import React from 'react';
import PhoneInput from "react-phone-input-2";
import { Navbar, Form, Row, Col, Button, Container } from 'react-bootstrap';
import '../index.css'
const initialtState = {
    Firstname: "",
    Surname: "",
    Companyname: "",
    Companyemail: "",
    Companyaddress: "",
    Confirmemail: "",
    Password: "",
    Postcode: "",
    Companywebpagelink: "",
    LinkedInlink: "",
    Instagramlink: "",
    Industry: "",
    Role: "",
    FirstnameError: "",
    SurnameError: "",
    CompanynameError: "",
    CompanyemailError: "",
    CompanyaddressError: "",
    ConfirmemailError: "",
    PasswordError: "",
    PostcodeError: "",
    CompanywebpagelinkError: "",
    LinkedInlinkError: "",
    InstagramlinkError: "",
    IndustryError: "",
    RoleError: ""
};
class Signup extends React.Component {


    state = initialtState

    handleChange = event => {
        console.log(event.target.value)
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    validate = () => {
        let isError = false;
        let FirstnameError = ""
        let SurnameError= ""
        let CompanynameError= ""
        let CompanyemailError= ""
        let CompanyaddressError= ""
        let ConfirmemailError= ""
        let PasswordError= ""
        let PostcodeError= ""
        let CompanywebpagelinkError= ""
        let LinkedInlinkError= ""
        let InstagramlinkError= ""
        let IndustryError= ""
        let RoleError= ""
        if (!this.state.Firstname) {
            FirstnameError = "*This field is required"
        }else{
            FirstnameError = ""
            this.setState({ FirstnameError })
        }
        if (!this.state.Surname) {
            SurnameError = "*This field is required"
        }else{
            SurnameError = ""
            this.setState({ SurnameError })
        }
        if (!this.state.Companyaddress) {
            CompanyaddressError = "*This field is required"
        }else{
            CompanyaddressError = ""
            this.setState({ CompanyaddressError })
        }
        if (!this.state.Companyname) {
            CompanynameError = "*This field is required"
        }else{
            CompanynameError = ""
            this.setState({ CompanynameError })
        }
        if (!this.state.Companyemail) {
            CompanyemailError = "*This field is required"
        }else{
            CompanyemailError = ""
            this.setState({ CompanyemailError })
        }
        if (!this.state.Confirmemail) {
            ConfirmemailError = "*This field is required"
        }else{
            ConfirmemailError = ""
            this.setState({ ConfirmemailError })
        }
        if (!this.state.Password) {
            PasswordError = "*This field is required"
        }else{
            PasswordError = ""
            this.setState({ PasswordError })
        }
        if (!this.state.Postcode) {
            PostcodeError = "*This field is required"
        }else{
            PostcodeError = ""
            this.setState({ PostcodeError })
        }
        if (!this.state.Companywebpagelink) {
            CompanywebpagelinkError = "*This field is required"
        }else{
            CompanywebpagelinkError = ""
            this.setState({ CompanywebpagelinkError })
        }
        if (!this.state.LinkedInlink) {
            LinkedInlinkError = "*This field is required"
        }else{
            LinkedInlinkError = ""
            this.setState({ LinkedInlinkError })
        }
        if (!this.state.Instagramlink) {
            InstagramlinkError = "*This field is required"
        }else{
            InstagramlinkError = ""
            this.setState({ InstagramlinkError })
        }
        if (!this.state.Industry) {
            IndustryError = "*This field is required"
        }else{
            IndustryError = ""
            this.setState({ IndustryError })
        }
        if (!this.state.Role) {
            RoleError = "*This field is required"
        }else{
            RoleError = ""
            this.setState({ RoleError })
        }
        if (FirstnameError) {
            this.setState({ FirstnameError })
            isError = true
        } if (SurnameError) {
            this.setState({ SurnameError })
            isError = true
        } if (CompanynameError) {
            this.setState({ CompanynameError })
            isError = true
        } if (CompanyemailError) {
            this.setState({ CompanyemailError })
            isError = true
        } if (CompanyaddressError) {
            this.setState({ CompanyaddressError })
            isError = true
        } if (ConfirmemailError) {
            this.setState({ ConfirmemailError })
            isError = true
        } if (PasswordError) {
            this.setState({ PasswordError })
            isError = true
        } if (PostcodeError) {
            this.setState({ PostcodeError })
            isError = true
        } if (CompanywebpagelinkError) {
            this.setState({ CompanywebpagelinkError })
            isError = true
        } if (LinkedInlinkError) {
            this.setState({ LinkedInlinkError })
            isError = true
        } if (InstagramlinkError) {
            this.setState({ InstagramlinkError })
            isError = true
        }
        if (IndustryError) {
            this.setState({ IndustryError })
            isError = true
        }
        if (RoleError) {
            this.setState({ RoleError })
            isError = true
        }

        if(isError == true){
            return false;
        }else{
            return true;
        }
        
    }

    handleSubmit = event => {
        event.preventDefault();
        const isValid = this.validate();
        if (isValid) {
            console.log(this.state)
            this.setState(initialtState)
        }
    }
    render() {

        const input = {
            border: "1px solid #f75011"
        }
        return (
            <React.Fragment>
                <Navbar style={{ backgroundColor: "#f75011" }}>
                    <Navbar.Brand className="font-weight-bold text-white">JOIN NOW</Navbar.Brand>
                </Navbar>
                <div>

                    <Container className="mt-5">
                        <Form onSubmit={this.handleSubmit}>
                            <Row className="mb-2">
                                <Col xs={12} md={4}>
                                    <Form.Control style={input} name="Firstname" placeholder="First name"
                                        value={this.state.Firstname}
                                        onChange={this.handleChange} />
                                    <div className="errormsg">{this.state.FirstnameError}</div>
                                </Col>
                                <Col xs={12} md={4}>
                                    <Form.Control style={input} placeholder="Surname" name="Surname"
                                    value={this.state.Surname}
                                    onChange={this.handleChange} />
                                    <div className="errormsg">{this.state.SurnameError}</div>
                                </Col>
                                <Col xs={12} md={4}>
                                    <Form.Control style={input} placeholder="Company name" 
                                    name="Companyname"
                                    value={this.state.Companyname}
                                    onChange={this.handleChange}/>
                                    <div className="errormsg">{this.state.CompanynameError}</div>
                                </Col>
                            </Row><Row className="mb-2">
                                <Col xs={12} md={4}>
                                    <Form.Control style={input} placeholder="Company email"
                                    name="Companyemail"
                                    value={this.state.Companyemail}
                                    onChange={this.handleChange} />
                                    <div className="errormsg">{this.state.CompanyemailError}</div>
                                </Col>
                                <Col xs={12} md={4}>
                                    <Form.Control style={input} placeholder="Confirm email"
                                    name="Confirmemail"
                                    value={this.state.Confirmemail}
                                    onChange={this.handleChange} />
                                    <div className="errormsg">{this.state.ConfirmemailError}</div>
                                </Col>
                                <Col xs={12} md={4}>
                                    <Form.Control style={input} placeholder="Password"
                                    name="Password"
                                    value={this.state.Password}
                                    onChange={this.handleChange} />
                                    <div className="errormsg">{this.state.PasswordError}</div>
                                </Col>
                            </Row>
                            <Row className="mb-2">
                                <Col xs={12} md={4}>
                                    <Form.Control style={input} placeholder="Company address"
                                    name="Companyaddress"
                                    value={this.state.Companyaddress}
                                    onChange={this.handleChange} />
                                    <div className="errormsg">{this.state.CompanyaddressError}</div>
                                </Col>
                                <Col xs={12} md={4}>
                                    <div>
                                        <PhoneInput
                                            inputStyle={input}
                                            country={'us'}
                                        />
                                        <div className="errormsg">{this.state.PhoneInputError}</div>
                                    </div>
                                </Col>
                                <Col xs={12} md={4}>
                                    <Form.Control style={input} placeholder="Zip / Post code"
                                    name="Postcode"
                                    value={this.state.Postcode}
                                    onChange={this.handleChange} />
                                    <div className="errormsg">{this.state.PostcodeError}</div>
                                </Col>
                            </Row><Row className="mb-2">
                                <Col xs={12} md={4}>
                                    <Form.Control style={input} placeholder="Company webpage link" 
                                    name="Companywebpagelink"
                                    value={this.state.Companywebpagelink}
                                    onChange={this.handleChange} />
                                    <div className="errormsg">{this.state.CompanywebpagelinkError}</div>
                                </Col>
                                <Col xs={12} md={4}>
                                    <Form.Control style={input} placeholder="LinkedIn link" 
                                    name="LinkedInlink"
                                    value={this.state.LinkedInlink}
                                    onChange={this.handleChange} />
                                    <div className="errormsg">{this.state.LinkedInlinkError}</div>
                                </Col>
                                <Col xs={12} md={4}>
                                    <Form.Control style={input} placeholder="Instagram link" 
                                    name="Instagramlink"
                                    value={this.state.Instagramlink}
                                    onChange={this.handleChange} />
                                    <div className="errormsg">{this.state.InstagramlinkError}</div>
                                </Col>
                            </Row>
                            <Row className="mb-2">
                                <Col xs={12} md={4}>
                                    <Form.Control as="select" style={input}
                                    name="Industry"
                                    value={this.state.Industry}
                                    onChange={this.handleChange}>
                                        <option value="">Industry</option>
                                        <option value="1" >1</option>
                                        <option value="2" >2</option>
                                        <option value="3" >3</option>
                                    </Form.Control>
                                    <div className="errormsg">{this.state.IndustryError}</div>
                                </Col>
                                <Col xs={12} md={4}>
                                    <Form.Control as="select" style={input}
                                    name="Role"
                                    value={this.state.Role}
                                    onChange={this.handleChange}>
                                         <option value="">Your Role</option>
                                        <option value="1" >1</option>
                                        <option value="2" >2</option>
                                        <option value="3" >3</option>
                                    </Form.Control>
                                    <div className="errormsg">{this.state.RoleError}</div>

                                </Col>
                            </Row>
                            <Row className="mb-2">
                                <Col>
                                    <Form.Check
                                        type='checkbox'
                                        label={`I have read and I accepted the Privacy Policy and the License Agreement`}
                                    />
                                </Col>
                            </Row>
                            <Row className="mb-2">
                                <Col sm={5}>
                                </Col>
                                <Col sm={2}>
                                    <Button variant="secondary" type="submit">
                                        Submit
                            </Button>
                                </Col>
                                <Col sm={5}>
                                </Col>


                            </Row>
                        </Form>
                    </Container>

                </div>
            </React.Fragment>
        );
    };
}

export default Signup;
