import React, {Component} from 'react';
import {editSponsor} from "../../actions/core";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {Button, Form} from "react-bootstrap";

class EditSponsor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sponsor_id: null,
            sponsor: []
        };
    }

    static propTypes = {
        editSponsor: PropTypes.func.isRequired
    };

    componentDidMount() {
        if (this.props.match) {
            const {id} = this.props.match.params;
            this.setState({
                sponsor_id: id
            });
            this.props.editSponsor(id);
        }
    }

    onChange = e => this.setState({[e.target.name]: e.target.value});

    render() {
        const {sponsor} = this.props;
        return (
            <div>
                <h1>Edit Sponsor {sponsor.firstName}</h1>
                <Form>

                </Form>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    sponsor: state.sponsors.sponsor,
    client: state.authentication.client,
    sponsorgroups: state.sponsors.sponsorgroups
});

export default connect(mapStateToProps, {editSponsor})(EditSponsor);