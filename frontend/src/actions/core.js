import axios from "axios";
import { GET_SPONSORS, DELETE_SPONSOR } from "./types";

// GET SPONSORS
export const getSponsors = () => dispatch => {
    axios
        .get("/api/sponsors/")
        .then(res => {
            dispatch({
                type: GET_SPONSORS,
                payload: res.data
            });
        })
        .catch(err => console.log(err));
};

//DELETE SPONSOR
export const deleteSponsor = id => dispatch => {
    axios
        .delete(`/api/sponsors/${id}/`)
        .then(res => {
            dispatch({
                type: DELETE_SPONSOR,
                payload: id
            });
        })
        .catch(err => console.log(err));
};
