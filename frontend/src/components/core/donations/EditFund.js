import React from 'react';
import {connect} from "react-redux";
import UpdateFund from "./UpdateFund";

export function EditFund(props) {
    let {fund, client} = props;
    return (
        client.id === fund.owner ? (
            <div>
            <h1>Edit Donation {fund.donationName}</h1>
            <UpdateFund fund={fund}/>
        </div>
        ) : (
            <p>You can't Edit this Donation</p>
        )

    );
}

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id;
    return {
        client: state.authentication.client,
        fund: state.donations.donations.find(donation => donation.id == id)
    }
};

export default connect(mapStateToProps)(EditFund);