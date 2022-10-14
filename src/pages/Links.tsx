import React, {useEffect, useState} from 'react';
import Layout from "../components/Layout";
import {Link} from "../models/link";
import axios from "axios";

const Links = (props: any) => {
    const [links, setLinks] = useState<Link[]>([]);

    useEffect(() => {
        (
            async () => {
                const {data} = await axios.get(`users/${props.match.params.id}`);

                setLinks(data);
            }
        )()
    },[])

    return (
        <Layout>
            <table className="table table-striped table-sm">
                <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {links.map((link) => {
                    return (
                        <tr>
                            <td>{link.id}</td>
                            <td>
                                {link.code}
                            </td>
                            <td>{link.orders}</td>
                        </tr>
                    );
                })}
                </tbody>
            </table>
        </Layout>
    );
};

export default Links;