import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Alert from 'react-bootstrap/Alert';
import LogItem from './LogItem';
import AddLogItem from './AddLogItem';

const App = () => {
    const [logs, setLogs] = useState([
        {
            _id: 1,
            text: 'This is log one',
            priority: 'low',
            user: 'pasha',
            created: new Date().toString(),
        },
        {
            _id: 2,
            text: 'This is log two',
            priority: 'moderate',
            user: 'andrew',
            created: new Date().toString(),
        },
        {
            _id: 3,
            text: 'This is log three',
            priority: 'high',
            user: 'den',
            created: new Date().toString(),
        },
    ]);

    const [alert, setAlert] = useState({
        show: false,
        message: '',
        variant: 'success',
    });

    const addItem = (log) => {
        if (!log.text || !log.user || !log.priority) {
            showAlert('Please enter all fields', 'danger');
            return;
        }

        log._id = Math.floor(Math.random() * 90000) + 10000;
        log.created = new Date().toString();
        setLogs([...logs, log]);
        showAlert('Log added!');
    };

    const deleteItem = (_id) => {
        setLogs(logs.filter((log) => log._id !== _id));
        showAlert('Log deleted!');
    };

    const showAlert = (message, variant = 'success', delay = 3000) => {
        setAlert({ show: true, message, variant });

        setTimeout(() => {
            setAlert({ show: false, message: '', variant: 'success' });
        }, delay);
    };

    return (
        <Container>
            <AddLogItem addItem={addItem} />
            {alert.show && <Alert variant={alert.variant}>{alert.message}</Alert>}
            <Table>
                <thead>
                    <tr>
                        <th>Priority</th>
                        <th>Log text</th>
                        <th>User</th>
                        <th>Created</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {logs.map((log) => (
                        <LogItem key={log._id} log={log} deleteItem={deleteItem} />
                    ))}
                </tbody>
            </Table>
        </Container>
    );
};

export default App;
