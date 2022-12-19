import React from 'react';
import Layout from "../components/Layout";
import {Button, TextField} from "@material-ui/core";

const Profile = () => {
    return (
        <Layout>
            <h3>Account Information</h3>
            <form>
                <div className="mb-3">
                    < TextField label="First Name"/>
                </div>
                <div className="mb-3">
                    < TextField label="First Name"/>
                </div>
                <div className="mb-3">
                    < TextField label="First Name"/>
                </div>
                <Button variant="contained" color="primary" type="submit">Submit</Button>
            </form>
            <h3 className="mt-4">Change Password</h3>
            <form>
                <div className="mb-3">
                    < TextField label="Password" type="password"/>
                </div>
                <div className="mb-3">
                    < TextField label="Password Confirm" type="password"/>
                </div>
                <Button variant="contained" color="primary" type="submit">Submit</Button>
            </form>
        </Layout>
    );
};

export default Profile;