import React, {SyntheticEvent, useEffect, useState} from 'react';
import Layout from "../components/Layout";
import {Button, TextField} from "@material-ui/core";
import axios from "axios";

const Profile = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');

    useEffect(() =>{
        (
            async () => {
                const {data} = await axios.get('user');

                setFirstName(data.firstName);
                setFirstName(data.lastName);
                setFirstName(data.email);
            }
        )();
    },[]);

    const submit = async (e:SyntheticEvent) => {
        e.preventDefault();

        await axios.put('user/data', {
            firstName,
            lastName,
            email
        })
    }

    const submitPassword = async (e:SyntheticEvent) =>{
        e.preventDefault();

        await axios.put('user/password', {
            password,
            passwordConfirm
        })
    }

    return (
        <Layout>
            <h3>Account Information</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    < TextField label="First Name" value={firstName} onChange={e => setFirstName(e.target.value)}/>
                </div>
                <div className="mb-3">
                    < TextField label="Last Name" value={lastName} onChange={e => setLastName(e.target.value)}/>
                </div>
                <div className="mb-3">
                    < TextField label="Email" value={email} onChange={e => setEmail(e.target.value)}/>
                </div>
                <Button variant="contained" color="primary" type="submit">Submit</Button>
            </form>
            <h3 className="mt-4">Change Password</h3>
            <form onSubmit={submitPassword}>
                <div className="mb-3">
                    < TextField label="Password" type="password" onChange={e => setPassword(e.target.value)}/>
                </div>
                <div className="mb-3">
                    < TextField label="Password Confirm" type="password" onChange={e => setPasswordConfirm(e.target.value)}/>
                </div>
                <Button variant="contained" color="primary" type="submit">Submit</Button>
            </form>
        </Layout>
    );
};

export default Profile;