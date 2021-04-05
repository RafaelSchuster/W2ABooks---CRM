import React from 'react';
import JobsTable from './JobsTable';

class JobsList extends React.Component {
    deleting(date) {
        this.props.onJobDelete(date);
    }
    jobChanging(title, projectName, payment,
        date, startDate, endDate, status, description) {
        this.props.jobChange(title, projectName, payment,
            date, startDate, endDate, status, description);
    }
    render() {
        return <ul >
            <JobsTable jobs={this.props.jobs}
                onDeleting={date => this.deleting(date)}
                onEditing={(title, projectName, payment,
                    date, startDate, endDate, status, description) =>
                    this.jobChanging(title, projectName, payment,
                        date, startDate, endDate, status, description)} />
        </ul>
    }
}

export default JobsList;