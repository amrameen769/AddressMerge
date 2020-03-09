import React, {Component, Fragment} from 'react';
import Candidates from "./Candidates";
import AddCandidate from "./AddCandidate";

export class ManageCandidate extends Component {
    render() {
        return (
            <Fragment>
                <AddCandidate/>
                <Candidates/>
            </Fragment>
        )
    }
}

export default ManageCandidate;