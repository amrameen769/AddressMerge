import React, {Component} from 'react';
import {connect} from "react-redux";
import {updateFund} from "../../../actions/donations";
import PropTypes from 'prop-types';
import {Button, Container, Input} from "@material-ui/core";
import {Form} from "react-bootstrap";
import TextField from "@material-ui/core/TextField";
import Col from "react-bootstrap/Col";
import ActionAlert from "../../layout/ActionAlert";

class UpdateFund extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: null,
            donationName: '',
            donationDescription: '',
            donationDate: '',
            donationAmount: '',
            donationBy: 1,
            donationTo: 1
        };
    }

    static propTypes = {
        updateFund: PropTypes.func.isRequired
    };

    handleOnChange = e => this.setState({[e.target.id]: e.target.value});

    onSubmit = e => {
        e.preventDefault();
        // console.log("Submitted");
    };

    onAgree = (e) => {
        const {id, donationName, donationDescription, donationDate, donationAmount, donationBy, donationTo} = this.state;
        const fund = {id, donationName, donationDescription, donationDate, donationAmount, donationBy, donationTo};
        this.props.updateFund(fund);
    };

    componentDidMount() {
        const {fund} = this.props;
        this.setState({
            id: fund.id,
            donationName: fund.donationName,
            donationDescription: fund.donationDescription,
            donationDate: fund.donationDate,
            donationAmount: fund.donationAmount,
            donationBy: fund.donationBy,
            donationTo: fund.donationTo
        })
    }

    render() {
        const {
            id,
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
                        <input
                            id="donationDate"
                            type="datetime-local"
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
                        <ActionAlert
                            action={"Update"}
                            title={"Confirm Update"}
                            id={id}
                            content={"Update this Fund Details?"}
                            initaction={this.onAgree}
                            variant={"contained"}
                            color={"primary"}
                        >
                            Update
                        </ActionAlert>
                    </Form.Row>
                </Form>
            </Container>
        );
    }
}

const mapStateToProps = state => ({
    sponsors: state.sponsors.sponsors,
    candidates: state.candidates.candidates
});

export default connect(mapStateToProps, {updateFund})(UpdateFund);