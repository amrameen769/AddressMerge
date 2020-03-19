import React, {Component} from 'react';
import {connect} from "react-redux";
import PropTypes, {number} from 'prop-types';
import {Container, Form, FormGroup, Row} from "react-bootstrap";
import {addFund} from '../../../actions/donations';
import TextField from "@material-ui/core/TextField";
import {Button} from "@material-ui/core";
import Col from "react-bootstrap/Col";

class AddFunds extends Component {
    constructor(props) {
        super(props);
        this.state = {
            donationName: '',
            donationDescription: '',
            donationDate: '',
            donationAmount: '',
            donationBy: 1,
            donationTo: 1
        };
    }

    static propTypes = {
        addFund: PropTypes.func.isRequired
    };

    handleOnChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    };

    render() {
        const {
            donationName,
            donationDescription,
            donationDate,
            donationAmount,
            donationBy,
            donationTo
        } = this.state;

        const style = {
            margin: '10px'
        };

        return (
            <Container>
                <h1>Add Donations</h1>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Row>
                        <TextField style={style} id="donationName" value={donationName} label="Donation Name"
                                   variant="filled"
                                   onChange={this.handleOnChange}/>
                        <TextField style={style} id="donationDescription" multiline rows={8} fullWidth
                                   value={donationDescription}
                                   label="Donation Description"
                                   variant="filled"
                                   onChange={this.handleOnChange}/>
                    </Form.Row>
                    <Form.Row>
                        <TextField style={style} id="donationAmount" value={donationAmount} type={"number"}
                                   label="Donation Amount" variant="filled"
                                   onChange={this.handleOnChange}/>
                        <TextField
                            id="donationDate"
                            label="Donation Date"
                            type="datetime-local"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant={"filled"}
                            value={donationDate}
                            style={style}
                            onChange={this.handleOnChange}
                        />
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col}>
                            <Form.Label>Sponsor</Form.Label>
                            <Form.Control as="select"
                                          id="donationBy"
                                          onChange={this.handleOnChange}
                                          defaultValue={donationBy}
                            >
                                {this.props.sponsors.map(sponsor => (
                                    <option key={sponsor.id}
                                            value={sponsor.id}>{sponsor.firstName + sponsor.lastName}</option>
                                ))}
                            </Form.Control>
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>Candidate</Form.Label>
                            <Form.Control as="select"
                                          id="donationTo"
                                          onChange={this.handleOnChange}
                                          defaultValue={donationTo}
                            >
                                {this.props.candidates.map(candidate => (
                                    <option key={candidate.id}
                                            value={candidate.id}>{candidate.candidateFirstName + candidate.candidateLastName}</option>
                                ))}
                            </Form.Control>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Button style={style} variant="contained" type={"submit"} color="primary">
                            Add Donation
                        </Button>
                    </Form.Row>
                </Form>
            </Container>
        );
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const {
            donationName,
            donationDescription,
            donationDate,
            donationAmount,
            donationBy,
            donationTo
        } = this.state;

        const candidate = {
            donationName,
            donationDescription,
            donationDate,
            donationAmount,
            donationBy,
            donationTo
        };

        this.props.addFund(candidate);

        this.setState({
            donationName: '',
            donationDescription: '',
            donationDate: '',
            donationAmount: '',
            donationBy: donationBy,
            donationTo: donationTo
        })
    }
}

const mapStateToProps = state => ({
    donations: state.donations.donations,
    sponsors: state.sponsors.sponsors,
    candidates: state.candidates.candidates
});

export default connect(mapStateToProps, {addFund})(AddFunds);