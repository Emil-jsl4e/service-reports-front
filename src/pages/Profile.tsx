import React, {useState} from 'react';
import Layout from "../components/Layout";
import {Button, TextField} from "@material-ui/core";

const Profile = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');

    return (
        <Layout>
            <h3>Account Information</h3>
            <form>
                <div className="mb-3">
                    < TextField label="First Name" onChange={e => setFirstName(e.target.value)}/>
                </div>
                <div className="mb-3">
                    < TextField label="Last Name" onChange={e => setLastName(e.target.value)}/>
                </div>
                <div className="mb-3">
                    < TextField label="Email" onChange={e => setEmail(e.target.value)}/>
                </div>
                <Button variant="contained" color="primary" type="submit">Submit</Button>
            </form>
            <h3 className="mt-4">Change Password</h3>
            <form>
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