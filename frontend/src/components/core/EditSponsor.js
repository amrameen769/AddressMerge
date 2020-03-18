import React from 'react';
import {connect} from "react-redux";
import UpdateSponsor from "./UpdateSponsor";

export function EditSponsor(props) {
    let {sponsor, client} = props;
    return (
        client.id === sponsor.owner ? (
            <div>
            <h1>Edit Sponsor {sponsor.firstName}</h1>
            <UpdateSponsor sponsor={sponsor}/>
        </div>
        ) : (
            <p>You can't Edit this Sponsor</p>
        )

    );
}

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id;
    return {
        client: state.authentication.client,
        sponsor: state.sponsors.sponsors.find(sponsor => sponsor.id == id)
    }
};

export default connect(mapStateToProps)(EditSponsor);