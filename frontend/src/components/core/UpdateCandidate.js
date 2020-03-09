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
import {updateCandidate} from "../../actions/candidates";

class UpdateCandidate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: null,
            candidateFirstName: "",
            candidateLastName: "",
            email: "",
            phoneNo: "",
            address: "",
            country: "",
            region: "",
            city: "",
            zip: "",
            created_at: "",
            status: null,
            candidateCategory: 1,
            sponsorId: 1,
            donationId: null
        };
    }

    static propTypes = {
        updateCandidate: PropTypes.func.isRequired
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
        const {id, candidateFirstName, candidateLastName, email, phoneNo, address, country, region, city, zip, candidateCategory, sponsorId} = this.state;
        const candidate = {id, candidateFirstName, candidateLastName, email, phoneNo, address, country, region, city, zip, candidateCategory, sponsorId};
        this.props.updateCandidate(candidate);
    };


    componentDidMount() {
        const {candidate} = this.props;
        this.setState({
            id: candidate.id,
            candidateFirstName: candidate.candidateFirstName,
            candidateLastName: candidate.candidateLastName,
            email: candidate.email,
            phoneNo: candidate.phoneNo,
            address: candidate.address,
            country: candidate.country,
            region: candidate.region,
            city: candidate.city,
            zip: candidate.zip,
            candidateCategory: candidate.candidateCategory,
            sponsorId: candidate.sponsorId
        })
    }

    render() {
        const {id, candidateFirstName, candidateLastName, email, phoneNo, address, country, region, city, zip, candidateCategory, sponsorId} = this.state;
        return (
            <Container>
                <Form onSubmit={this.onSubmit}>
                    <Form.Row>
                        <Col>
                            <Form.Control placeholder="First name" name="candidateFirstName" onChange={this.onChange}
                                          value={candidateFirstName}/>
                        </Col>
                        <Col>
                            <Form.Control placeholder="Last name" name="candidateLastName" onChange={this.onChange}
                                          value={candidateLastName}/>
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
                            <InputLabel id="candidate-category">Sponsor Group</InputLabel>
                            <Select
                                labelId="candidate-category"
                                id="candidate-category"
                                name={"candidateCategory"}
                                value={candidateCategory}
                                onChange={this.onChange}
                            >
                                {this.props.candidateCategory.map(category => (
                                    <MenuItem key={category.id}
                                              value={category.id}>{category.categoryName}</MenuItem>
                                ))}
                            </Select>
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridStateSponsor">
                            <Form.Label>Sponsor</Form.Label>
                            <Form.Control as="select"
                                          name="sponsorId"
                                          onChange={this.onChange}
                                          defaultValue={sponsorId}
                            >
                                {this.props.sponsors.map(sponsor => (
                                    <option key={sponsor.id}
                                            value={sponsor.id}>{sponsor.firstName + sponsor.lastName}</option>
                                ))}
                            </Form.Control>
                        </Form.Group>
                    </Form.Row>

                    <ActionAlert
                        action={"Update"}
                        title={"Confirm Update"}
                        id={id}
                        content={"Update this Candidate Details?"}
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
    candidateCategory: state.candidates.candidatecategory,
    sponsors: state.sponsors.sponsors
});

export default connect(mapStateToProps, {updateCandidate})(UpdateCandidate);