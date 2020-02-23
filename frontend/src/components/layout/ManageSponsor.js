import React, {Component, Fragment} from 'react';
import AddSponsor from "../core/AddSponsor";
import Sponsors from "../core/Sponsors";

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