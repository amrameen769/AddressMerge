import React, {Component, Fragment} from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {getSponsors, deleteSponsor, editSponsor} from "../../actions/core";
import {Button, Form} from "react-bootstrap";
import {Table} from "react-bootstrap";

export class Sponsors extends Component {
    static propTypes = {
        sponsors: PropTypes.array.isRequired,
        deleteSponsor: PropTypes.func.isRequired,
        getSponsors: PropTypes.func.isRequired,
        editSponsor: PropTypes.func.isRequired
    };

    componentDidMount() {
        this.props.getSponsors();
    }

    render() {
        const buttonStyle = {width: "90px"};
        return (
            <Fragment>
                <h1>Sponsors List</h1>
                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Address</th>
                        <th>City</th>
                        <th>State</th>
                        <th>Country</th>
                        <th>Zip Code</th>
                        <th>Created At</th>
                        <th>Status</th>
                        <th>Edit/Delete</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.props.sponsors.map(sponsor => (
                        <tr key={sponsor.id}>
                            <td>{sponsor.id}</td>
                            <td>{sponsor.firstName + " " + sponsor.lastName}</td>
                            <td>{sponsor.email}</td>
                            <td>{sponsor.phoneNo}</td>
                            <td>{sponsor.address}</td>
                            <td>{sponsor.city}</td>
                            <td>{sponsor.region}</td>
                            <td>{sponsor.country}</td>
                            <td>{sponsor.zip}</td>
                            <td>{sponsor.created_at}</td>
                            <td>
                                <Form.Check
                                    disabled
                                    checked={sponsor.status}
                                    type="checkbox"
                                    id="default-checkbox"
                                />
                            </td>
                            <td>
                                <Button onClick={this.props.editSponsor.bind(this, sponsor.id)}
                                        style={buttonStyle}
                                        variant="secondary"
                                >
                                    Edit
                                </Button>
                                <Button
                                    onClick={this.props.deleteSponsor.bind(
                                        this,
                                        sponsor.id
                                    )}
                                    style={buttonStyle}
                                    variant="danger"
                                >
                                    Delete
                                </Button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </Table>
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    sponsors: state.sponsors.sponsors
});

export default connect(mapStateToProps, {getSponsors, deleteSponsor, editSponsor})(
    Sponsors
);
