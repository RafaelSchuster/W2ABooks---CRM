import React from 'react';
import '../Styles/Jobs.css';
import JobsForm from './JobsForm';
import JobForm from './JobsForm';
import JobsList from './JobsList';

class Jobs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            jobs: []
        }
    }
    handleNewJobs(newJob) {
        this.setState(state => {
            if (state.jobs) return { jobs: [...state.jobs, newJob] }
            else if (!state.jobs) return { jobs: [newJob] }
        })
    }
    handleDeletes(date) {
        let confirmation = window.confirm("Are you sure you want to delete this job?");
        if (confirmation) {
            let arr = this.state.jobs;
            let indexForDelete;
            arr.forEach(element => {
                if (element.date === date) {
                    indexForDelete = arr.indexOf(element);
                };
            });
            arr.splice(indexForDelete, 1);
            this.setState({ jobs: arr });
        };
    }

    changeJob(title, projectName, payment,
        date, startDate, endDate, status, description) {
        let confirmation = window.confirm("Are you sure you want to change this job?");
        let arr2 = this.state.jobs;
        if (confirmation) {
            let indexForEdit;
            arr2.forEach(element => {
                if (element.date === date) {
                    indexForEdit = arr2.indexOf(element);
                }
            })
            if (title) { arr2[indexForEdit].title = title };
            if (projectName) { arr2[indexForEdit].projectName = projectName };
            if (payment) { arr2[indexForEdit].payment = payment };
            if (startDate) { arr2[indexForEdit].startDate = startDate };
            if (endDate) { arr2[indexForEdit].endDate = endDate };
            if (status) { arr2[indexForEdit].status = status };
            if (description) { arr2[indexForEdit].title = description }; arr2[indexForEdit].date = new Date().toString().split(' ').slice(0, 5).join(' ')
        };
        this.setState({ jobs: arr2 });
        ;
    }

    componentWillMount() {
        this.setState({ jobs: JSON.parse(localStorage.getItem('jobs')) });
    }

    componentWillUpdate(nextProps, nextState) {
        localStorage.setItem('jobs', JSON.stringify(nextState.jobs));
    }


    render() {
        return (
            <div>
                <JobsForm onAddJob={newJob => this.handleNewJobs(newJob)} />
                <JobsList jobs={this.state.jobs}
                    onJobDelete={date => this.handleDeletes(date)}
                    jobChange={(title, projectName, payment,
                        date, startDate, endDate, status, description) => this.changeJob(title, projectName, payment,
                            date, startDate, endDate, status, description)} />
            </div>
        )
    }
}

export default Jobs;
