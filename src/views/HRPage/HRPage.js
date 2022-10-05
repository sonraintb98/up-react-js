import React from "react";
import './HrPage.scss';
import AddEmployee from "./AddEmployee";
import { toast } from "react-toastify";

class HRPage extends React.Component {
    state = {
        listEmployees: [
            {
                username: 'sonnh',
                password: '123',
                fullName: 'Nguyen Hoai Son',
                birthDay: '27-05-1998',
                address: 'Quang Nam',
                phoneNumber: '0945006158',
                email: 'hoaisonkt1998@gmail.com',
                skill: 'java, reactJs, #C, Python',
                experience: '2 years',
                position: 'DEV',
            },
            {
                username: 'hainv',
                password: '123',
                fullName: 'Nguyen van Hai',
                birthDay: '01-01-2000',
                address: 'Quang Nam',
                phoneNumber: '0945006158',
                email: 'hoaisonkt1998@gmail.com',
                skill: 'java, reactJs, #C, Python',
                experience: '2 years',
                position: 'DEV',
            },
            {
                username: 'hungnb',
                password: '123',
                fullName: 'Nguyen Ba Hung',
                birthDay: '20-10-2000',
                address: 'Quang Nam',
                phoneNumber: '0945006158',
                email: 'hoaisonkt1998@gmail.com',
                skill: 'java, reactJs, #C, Python',
                experience: '2 years',
                position: 'DEV',
            }
        ],
        editEmployee: {

        }
    }
    addNewEmployee = (employee) => {
        this.setState({
            listEmployees: [...this.state.listEmployees, employee]
        })
        toast.success("Add new Employee success")
    }
    onClickEditEmp = () => {
        alert("This is editEmployee");
    }
    onClickDeleteEmp = () => {
        alert("This is deleteEmployee");
    }
    render() {
        let { listEmployees } = this.state;
        return (
            <>
                <div className="content">
                    <h2>Welcome to Hr Page</h2>
                    <AddEmployee
                        addNewEmployee={this.addNewEmployee} />
                    <div className="listEmployees">
                        {
                            listEmployees && listEmployees.length > 0 &&
                            listEmployees.map((item, index) => {
                                return (
                                    <div className="todo-child" key={item.username}>
                                        {
                                            <span>
                                                {index + 1} - {item.username} - {item.fullName}
                                            </span>
                                        }
                                        <button
                                            className="editEmployee"
                                            onClick={() => { this.onClickEditEmp() }}
                                            type="button">
                                            Edit
                                        </button>
                                        <button
                                            className="deleteEmployee"
                                            onClick={() => { this.onClickDeleteEmp() }}
                                            type="button">
                                            Delete
                                        </button>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </>
        )
    }
}
export default HRPage;