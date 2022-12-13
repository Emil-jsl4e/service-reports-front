import React, {SyntheticEvent, useState} from 'react';
import Layout from "../../components/Layout";
import {Button, TextField} from "@material-ui/core";
import axios from "axios";
import {Redirect} from "react-router-dom";

const SparePartsForm = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [redirect, setRedirect] = useState(false);

    const submit = async (e: SyntheticEvent) => {
        e.preventDefault();

        await axios.post('spareParts', {
            title,
            description
        });
        setRedirect(true);
    }

    if (redirect) {
        return <Redirect to={'/spareparts'}/>
    }

    return (
        <Layout>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <TextField label="Title" onChange={e=> setTitle(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <TextField label="Description" onChange={e=>setDescription(e.target.value)}/>
                </div>
                <Button variant="contained" color="primary" type="submit">Submit</Button>
            </form>
        </Layout>
    );
};

export default SparePartsForm;