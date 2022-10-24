import React, {useEffect, useState} from 'react';
import {SpareParts} from "../../models/spare-parts";
import axios from "axios";
import Layout from "../../components/Layout";
import {Table, TableBody, TableCell, TableHead, TableRow} from "@mui/material";

const SpareParts = () => {
    const [spareParts, setSpareParts] = useState<SpareParts[]>([]);

    useEffect(() => {
        (
           async () => {
                const {data} = await axios.get('spareParts');

                setSpareParts(data)
            }
        )();
    },[])
    return (
        <Layout>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>#</TableCell>
                        <TableCell>Id</TableCell>
                        <TableCell>Title</TableCell>
                        <TableCell>Description</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {spareParts.map((part) => {
                        return (
                            <TableRow key={part.id}>
                                <TableCell>{part.title}</TableCell>
                                <TableCell>{part.description}</TableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </Layout>
    );
};

export default SpareParts;