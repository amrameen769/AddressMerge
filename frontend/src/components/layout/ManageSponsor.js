import React, {Component, Fragment} from 'react';
import AddSponsor from "../core/AddSponsor";
import Sponsors from "../core/Sponsors";
import Toolbar from "./Toolbar";

export class ManageSponsor extends Component {
    render() {
        return (
            <Fragment>
                <Toolbar/>
                <AddSponsor/>
                <Sponsors/>
            </Fragment>
        )
    }
}

export default ManageSponsor;