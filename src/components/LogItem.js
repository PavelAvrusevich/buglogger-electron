import React from 'react';
import Moment from 'react-moment';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';

const LogItem = ({ log: { _id, text, priopity, user, created } }) => {
    const setVariant = () => {
        if (priopity === 'low') {
            return 'primary';
        } else if (priopity === 'moderate') {
            return 'warning';
        } else {
            return 'danger';
        }
    };

    return (
        <tr>
            <td>
                <Badge variant={setVariant()} className="p-2">
                    {priopity.charAt(0).toUpperCase() + priopity.slice(1)}
                </Badge>
            </td>
            <td>{text}</td>
            <td>{user}</td>
            <td>
                <Moment format="MMMM Do YYYY, hh:mm:ss a">{new Date(created)}</Moment>
            </td>
            <td>
                <Button variant="danger" size="sm">
                    x
                </Button>
            </td>
        </tr>
    );
};

export default LogItem;
