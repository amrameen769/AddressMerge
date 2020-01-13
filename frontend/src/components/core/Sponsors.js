import React, {Component, Fragment} from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {getSponsors, deleteSponsor, editSponsor} from "../../actions/core";
import {Row, Card, Button} from "react-bootstrap";

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
                <Row>
                    {this.props.sponsors.map(sponsor => (
                        <Card
                            key={sponsor.id}
                            bg="dark"
                            text="white"
                            style={{width: "18rem"}}
                        >
                            <Card.Header>
                                {sponsor.firstName + " " + sponsor.lastName}
                            </Card.Header>
                            <Card.Body>
                                <Card.Title>
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
                                </Card.Title>
                                    <Card.Text>
                                        <p>Email: {sponsor.email}</p>
                                        <p>Phone No: {sponsor.phoneNo}</p>
                                        <p>Address: {sponsor.address}</p>
                                        <p>City: {sponsor.city}</p>
                                        <p>State: {sponsor.region}</p>
                                        <p>Country: {sponsor.country}</p>
                                        <p>
                                            Created At:
                                            {sponsor.created_at}
                                        </p>
                                    </Card.Text>
                            </Card.Body>
                        </Card>
                    ))}
                </Row>
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
