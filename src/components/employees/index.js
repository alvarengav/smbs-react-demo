import React from 'react'
import Table from '../table'
import fechtEmployees from '../../services/employee'
import fetchEmployees from '../../services/employee'

class Employee extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            employeeList: []
        }
    }
    componentDidMount() {
        this.fetchData()
    }

    fetchData = async () => {
        const { data } = await fetchEmployees()
        this.setState(_prevState => {
            return { employeeList: data }
        }, () => console.log("this.state", this.state))
    }

    render() {
        return (
            <div className="Employee">
                <div className="container">
                    <h1 className="Employee-title">Employee</h1>
                    <Table list={this.state.employeeList} />
                </div>
            </div >
        )
    }
}

export default Employee