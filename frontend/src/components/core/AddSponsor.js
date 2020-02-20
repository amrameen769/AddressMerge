import React, {Component} from "react";
import {Form, Button, FormControl} from 'react-bootstrap';
import Col from "react-bootstrap/Col";
import {CountryDropdown, RegionDropdown, CountryRegionData} from 'react-country-region-selector';
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import {addSponsor, getSponsorGroups} from "../../actions/core";

export class AddSponsor extends Component {
    state = {
        "firstName": "",
        "lastName": "",
        "email": "",
        "phoneNo": "",
        "address": "",
        "country": "",
        "region": "",
        "city": "",
        "zip": "",
        "sponsorgroup": "",
    };

    static propTypes = {
        addSponsor: PropTypes.func.isRequired,
        getSponsorGroups: PropTypes.func.isRequired
    };

    selectCountry(val) {
        this.setState({country: val})
    }

    selectRegion(val) {
        this.setState({region: val});
    }

    onChange = e => this.setState({[e.target.name]: e.target.value});

    onSubmit = e => {
        e.preventDefault();
        // console.log("Submitted");
        const {firstName, lastName, email, phoneNo, address, country, region, city, zip, sponsorgroup} = this.state;
        const sponsor = {firstName, lastName, email, phoneNo, address, country, region, city, zip, sponsorgroup};
        this.props.addSponsor(sponsor);
        this.setState({
            "firstName": "",
            "lastName": "",
            "email": "",
            "phoneNo": "",
            "address": "",
            "country": "",
            "region": "",
            "city": "",
            "zip": "",
            "sponsorgroup": "",
        })
    };

    componentDidMount() {
        this.props.getSponsorGroups();
    }

    render() {
        const {firstName, lastName, email, phoneNo, address, country, region, city, zip, sponsorgroup} = this.state;
        return (
            <div>
                <h1>Add Sponsors</h1>
                <Form onSubmit={this.onSubmit}>
                    <Form.Row>
                        <Col>
                            <Form.Control placeholder="First name" name="firstName" onChange={this.onChange}
                                          value={firstName}/>
                        </Col>
                        <Col>
                            <Form.Control placeholder="Last name" name="lastName" onChange={this.onChange}
                                          value={lastName}/>
                        </Col>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" name="email" onChange={this.onChange}
                                          value={email}/>
                        </Form.Group>

                        <Form.Group as={Col}>
                            <Form.Label>Phone</Form.Label>
                            <Form.Control type="number" placeholder="Phone Number" name="phoneNo"
                                          onChange={this.onChange} value={phoneNo}/>
                        </Form.Group>
                    </Form.Row>

                    <Form.Group controlId="formGridAddress1">
                        <Form.Label>Address</Form.Label>
                        <Form.Control as="textarea" rows="3" placeholder="1234 Main St" name="address"
                                      onChange={this.onChange} value={address}/>
                    </Form.Group>

                    <Form.Row>
                        <Form.Group as={Col}>
                            <Form.Label>Country</Form.Label>
                            <CountryDropdown className="form-control"
                                             value={country}
                                             name="country"
                                             onChange={(val) => this.selectCountry(val)}/>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridState">
                            <Form.Label>Region</Form.Label>
                            <RegionDropdown className="form-control"
                                            disableWhenEmpty={true}
                                            country={country}
                                            value={region}
                                            name="region"
                                            onChange={(val) => this.selectRegion(val)}/>
                        </Form.Group>

                        <Form.Group as={Col}>
                            <Form.Label>City</Form.Label>
                            <Form.Control type="text" placeholder="City" name="city" onChange={this.onChange}
                                          value={city}/>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridZip">
                            <Form.Label>Zip</Form.Label>
                            <Form.Control name="zip" onChange={this.onChange} value={zip}/>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridState">
                            <Form.Label>Sponsor Group</Form.Label>
                            <Form.Control as="select"
                                          name="sponsorgroup"
                                          onChange={this.onChange}
                                          defaultValue={0}
                            >
                                {this.props.sponsorgroups.map(sponsorgroup => (
                                    <option key={sponsorgroup.id} value={sponsorgroup.id}>{sponsorgroup.groupName}</option>
                                ))}
                            </Form.Control>
                        </Form.Group>
                    </Form.Row>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    sponsorgroups: state.sponsors.sponsorgroups
});


export default connect(mapStateToProps, {addSponsor, getSponsorGroups})(AddSponsor);
