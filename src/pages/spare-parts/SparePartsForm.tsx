import React from 'react';
import Layout from "../../components/Layout";
import {Button, TextField} from "@material-ui/core";

const SparePartsForm = () => {
    return (
        <Layout>
            <form>
                <div className="mb-3">
                    <TextField label="Id"/>
                </div>
                <div className="mb-3">
                    <TextField label="Title"/>
                </div>
                <div className="mb-3">
                    <TextField label="Description"/>
                </div>
                <Button variant="contained" color="primary">Submit</Button>
            </form>
        </Layout>
    );
};

export default SparePartsForm;