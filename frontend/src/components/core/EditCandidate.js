import React, {Component} from 'react';
import {connect} from "react-redux";
import UpdateCandidate from "./UpdateCandidate";

export function EditCandidate(props) {
    let {candidate, client} = props;
    return (
        client.id === candidate.owner ? (
            <div>
            <h1>Edit Candidate {candidate.candidateFirstName}</h1>
            <UpdateCandidate candidate={candidate}/>
        </div>
        ) : (
            <p>You can't Edit this Candidate</p>
        )

    );
}

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id;
    return {
        client: state.authentication.client,
        candidate: state.candidates.candidates.find(candidate => candidate.id == id)
    }
};

export default connect(mapStateToProps)(EditCandidate);