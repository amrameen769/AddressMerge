import React, {Fragment} from 'react';
import Candidates from "./Candidates";
import AddCandidate from "./AddCandidate";

export default function ManageCandidate() {
    return (
        <Fragment>
            <AddCandidate/>
            <Candidates/>
        </Fragment>
    )
}
