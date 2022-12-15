import React, {SyntheticEvent, useEffect, useState} from 'react';
import Layout from "../../components/Layout";
import {Button, TextField} from "@material-ui/core";
import axios from "axios";
import {Redirect} from "react-router-dom";
import {daDK} from "@mui/material/locale";

const SparePartsForm = (props: any) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [redirect, setRedirect] = useState(false);

    useEffect(() => {
        if(props.match.params.id) {
            (
                async () => {
                    const {data} = await axios.get(`spareParts/${props.match.params.id}`);

                    setTitle(data.title);
                    setDescription(data.description);
                }
            )();
        }
    },[])

    const submit = async (e: SyntheticEvent) => {
        e.preventDefault();
        const data = {
            title,
            description
        }
        if(props.match.params.id) {
            await axios.put(`spareParts/${props.match.params.id}`, data);
        } await axios.post('spareParts', data);
        setRedirect(true);
    }

    if (redirect) {
        return <Redirect to={'/spareparts'}/>
    }

    return (
        <Layout>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <TextField label="Title" value={title} onChange={e=> setTitle(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <TextField label="Description" value={description} onChange={e=>setDescription(e.target.value)}/>
                </div>
                <Button variant="contained" color="primary" type="submit">Submit</Button>
            </form>
        </Layout>
    );
};

export default SparePartsForm;