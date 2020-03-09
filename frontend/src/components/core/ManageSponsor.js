import React, {Component, Fragment} from 'react';
import AddSponsor from "./AddSponsor";
import Sponsors from "./Sponsors";

export class ManageSponsor extends Component {
    render() {
        return (
            <Fragment>
                <AddSponsor/>
                <Sponsors/>
            </Fragment>
        )
    }
}

export default ManageSponsor;