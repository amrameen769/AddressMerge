import React, {Component} from 'react';
import {Form, Button, FormControl, Container} from 'react-bootstrap';
import Col from "react-bootstrap/Col";
import {CountryDropdown, RegionDropdown, CountryRegionData} from 'react-country-region-selector';
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import {getCandidateCategory, addCandidate} from "../../actions/candidates";
import AddCategory from "./AddCategory";
import {addCandidateCategory} from "../../actions/candidates";

class AddCandidate extends Component {
    constructor(props) {
        super(props);
        this.state = {
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
        const {candidateFirstName, candidateLastName, email, phoneNo, address, country, region, city, zip, candidateCategory, sponsorId} = this.state;
        const candidate = {
            candidateFirstName,
            candidateLastName,
            email,
            phoneNo,
            address,
            country,
            region,
            city,
            zip,
            candidateCategory,
            sponsorId
        };
        this.props.addCandidate(candidate);
        // console.log(candidate);
        this.setState({
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
            candidateCategory: candidateCategory,
            sponsorId: sponsorId,
            donationId: null,
            owner: null
        })
    };

    static propTypes = {
        getCandidateCategory: PropTypes.func.isRequired
    };

    componentDidMount() {
        this.props.getCandidateCategory();
    }

    render() {
        const {candidateFirstName, candidateLastName, email, phoneNo, address, country, region, city, zip, candidateCategory, sponsorId} = this.state;
        return (
            <Container>
                <h1>Add Candidates</h1>
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
                        <Form.Group as={Col} controlId="formGridEmailCandidate">
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

                    <Form.Group controlId="formGridAddress1Candidate">
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

                        <Form.Group as={Col} controlId="formGridStateCandidate">
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

                        <Form.Group as={Col} controlId="formGridZipCandidate">
                            <Form.Label>Zip</Form.Label>
                            <Form.Control name="zip" onChange={this.onChange} value={zip}/>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridStateCategory">
                            <Form.Label>Candidate Category</Form.Label>
                            <Form.Control as="select"
                                          name="candidateCategory"
                                          onChange={this.onChange}
                                          defaultValue={candidateCategory}
                            >
                                {this.props.candidatecategory.map(category => (
                                    <option key={category.id}
                                            value={category.id}>{category.categoryName}</option>
                                ))}
                            </Form.Control>
                            <AddCategory
                                name={"candidateCategory"}
                                action={"Add Candidate Group"}
                                method={this.props.addCandidateCategory}
                            />
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

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Container>
        );
    }
}

const mapStateToProps = state => ({
    candidatecategory: state.candidates.candidatecategory,
    sponsors: state.sponsors.sponsors
});

export default connect(mapStateToProps, {getCandidateCategory, addCandidate, addCandidateCategory})(AddCandidate);