import React, { Fragment } from "react";
import Sponsors from "./Sponsors";
import AddSponsor from "./AddSponsor";

export default function AddressBook() {
    return (
        <Fragment>
            <AddSponsor />
            <Sponsors />
        </Fragment>
    );
}
