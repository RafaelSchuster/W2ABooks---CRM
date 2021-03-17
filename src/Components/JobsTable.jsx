import React, { useEffect } from 'react';
import { Container, Table } from 'react-bootstrap';
import JobsTableItems from './JobTableItem';

function JobsTable(props) {

    const deleting = (date) => {
        props.onDeleting(date);
    }

    const jobChanging = (title, projectName, payment,
        date, startDate, endDate, status, description) => {
        props.onEditing(title, projectName, payment,
            date, startDate, endDate, status, description);
    }

    return (
        <Container >
            <Table striped bordered hover className="jobs-table ">
                <thead>
                    <tr>
                        <th className="text-center purple">#</th>
                        <th className="text-center purple">Job Title</th>
                        <th className="text-center purple">Name</th>
                        <th className="text-center purple">Payment</th>
                        <th className="text-center purple">Start-Date</th>
                        <th className="text-center purple">End-Date</th>
                        <th className="text-center purple">Job Status</th>
                        <th className="text-center purple">More</th>
                    </tr>
                </thead>
                <tbody>
                    {props.jobs && props.jobs.map(job =>
                        <JobsTableItems
                            date={job.date}
                            key={job.date}
                            title={job.title}
                            projectName={job.projectName}
                            payment={job.payment}
                            startDate={job.startDate}
                            endDate={job.endDate}
                            status={job.status}
                            description={job.description}
                            jobDeleting={date => deleting(date)}
                            onEditing={(title, projectName, payment,
                                date, startDate, endDate, status, description) =>
                                jobChanging(title, projectName, payment,
                                    date, startDate, endDate, status, description)} />
                    )
                    }
                </tbody>
            </Table>
        </Container>
    )
}

export default JobsTable;
