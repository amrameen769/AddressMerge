import React, {Component} from 'react';
import InputLabel from "@material-ui/core/InputLabel";
import {CountryDropdown, RegionDropdown, CountryRegionData} from 'react-country-region-selector';
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {Container, Form} from "react-bootstrap";
import Col from "react-bootstrap/Col";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import ActionAlert from "../layout/ActionAlert";
import {updateSponsor} from "../../actions/core";

class UpdateSponsor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: null,
            firstName: "",
            lastName: "",
            email: "",
            phoneNo: "",
            address: "",
            country: "",
            region: "",
            city: "",
            zip: "",
            sponsorgroup: 1
        };
    }

    static propTypes = {
        updateSponsor: PropTypes.func.isRequired
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
    };

    onAgree = (e) => {
        const {id, firstName, lastName, email, phoneNo, address, country, region, city, zip, sponsorgroup} = this.state;
        const sponsor = {id, firstName, lastName, email, phoneNo, address, country, region, city, zip, sponsorgroup};
        this.props.updateSponsor(sponsor);
    };


    componentDidMount() {
        const {sponsor} = this.props;
        this.setState({
            id: sponsor.id,
            firstName: sponsor.firstName,
            lastName: sponsor.lastName,
            email: sponsor.email,
            phoneNo: sponsor.phoneNo,
            address: sponsor.address,
            country: sponsor.country,
            region: sponsor.region,
            city: sponsor.city,
            zip: sponsor.zip,
            sponsorgroup: sponsor.sponsorgroup
        })
    }

    render() {
        const {id, firstName, lastName, email, phoneNo, address, country, region, city, zip, sponsorgroup} = this.state;
        return (
            <Container>
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
                        <Form.Group as={Col} controlId="formGridSelect">
                            <InputLabel id="sponsor-group">Sponsor Group</InputLabel>
                            <Select
                                labelId="sponsor-group"
                                id="sponsor-group"
                                name={"sponsorgroup"}
                                value={sponsorgroup}
                                onChange={this.onChange}
                            >
                                {this.props.sponsorgroups.map(sponsorgroup => (
                                    <MenuItem key={sponsorgroup.id}
                                              value={sponsorgroup.id}>{sponsorgroup.groupName}</MenuItem>
                                ))}
                            </Select>
                        </Form.Group>
                    </Form.Row>

                    <ActionAlert
                        action={"Update"}
                        title={"Confirm Update"}
                        id={id}
                        content={"Update this Sponsor Details?"}
                        initaction={this.onAgree}
                        variant={"contained"}
                        color={"primary"}
                    >
                        Update
                    </ActionAlert>
                </Form>
            </Container>
        );
    }
}

const mapStateToProps = state => ({
    sponsorgroups: state.sponsors.sponsorgroups
});

export default connect(mapStateToProps, {updateSponsor})(UpdateSponsor);