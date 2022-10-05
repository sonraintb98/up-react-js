import React from "react";

class AddEmployee extends React.Component {
    state = {
        username: '',
        password: '',
        fullName: '',
        birthDay: '',
        address: '',
        phoneNumber: '',
        email: '',
        skill: '',
        experience: '',
        position: '',
    }
    handleOnChangeUsername = (event) => {
        this.setState({
            username: event.target.value
        })
    }
    handleOnChangePassword = (event) => {
        this.setState({
            password: event.target.value
        })
    }
    handleOnChangeFullname = (event) => {
        this.setState({
            fullName: event.target.value
        })
    }
    handleOnChangeBirthDay = (event) => {
        this.setState({
            birthDay: event.target.value
        })
    }
    handleOnChangeAddress = (event) => {
        this.setState({
            address: event.target.value
        })
    }
    handleOnChangePhoneNumber = (event) => {
        this.setState({
            phoneNumber: event.target.value
        })
    }
    handleOnChangeEmail = (event) => {
        this.setState({
            email: event.target.value
        })
    }
    handleOnChangeSkill = (event) => {
        this.setState({
            skill: event.target.value
        })
    }
    handleOnChangeExperience = (event) => {
        this.setState({
            experience: event.target.value
        })
    }
    handleOnChangePosition = (event) => {
        this.setState({
            position: event.target.value
        })
    }
    handleAddEmployee = () => {
        if (!this.state.username || !this.state.password ||
            !this.state.fullName || !this.state.birthDay ||
            !this.state.address || !this.state.phoneNumber ||
            !this.state.email || !this.state.skill ||
            !this.state.experience || !this.state.position) {
            alert("Missing fields")
            return;
        }
        let employee = {
            username: this.state.username,
            password: this.state.password,
            fullName: this.state.fullName,
            birthDay: this.state.birthDay,
            address: this.state.address,
            phoneNumber: this.state.phoneNumber,
            email: this.state.email,
            skill: this.state.skill,
            experience: this.state.experience,
            position: this.state.position
        }
        this.props.addNewEmployee(employee);
        this.setState({
            username: '',
            password: '',
            fullName: '',
            birthDay: '',
            address: '',
            phoneNumber: '',
            email: '',
            skill: '',
            experience: '',
            position: '',
        })
    }
    render() {
        return (
            <>
                <div className="AddEmployee">
                    <ul>
                        <li>
                            <input
                                value={this.state.username}
                                type="text" placeholder="Username..."
                                onChange={(event) => { this.handleOnChangeUsername(event) }}
                            />
                        </li>
                        <li>
                            <input
                                value={this.state.password}
                                type="text" placeholder="Password..."
                                onChange={(event) => { this.handleOnChangePassword(event) }}
                            />
                        </li>
                        <li>
                            <input
                                value={this.state.fullName}
                                type="text" placeholder="FullName..."
                                onChange={(event) => { this.handleOnChangeFullname(event) }}
                            />
                        </li>
                        <li>
                            <input
                                value={this.state.birthDay}
                                type="text" placeholder="BirthDay..."
                                onChange={(event) => { this.handleOnChangeBirthDay(event) }}
                            />
                        </li>
                        <li>
                            <input
                                value={this.state.address}
                                type="text" placeholder="Address..."
                                onChange={(event) => { this.handleOnChangeAddress(event) }}
                            />
                        </li>
                        <li>
                            <input
                                value={this.state.phoneNumber}
                                type="text" placeholder="PhoneNumber..."
                                onChange={(event) => { this.handleOnChangePhoneNumber(event) }}
                            />
                        </li>
                        <li>
                            <input
                                value={this.state.email}
                                type="text" placeholder="Email..."
                                onChange={(event) => { this.handleOnChangeEmail(event) }}
                            />
                        </li>
                        <li>
                            <input
                                value={this.state.skill}
                                type="text" placeholder="Skill..."
                                onChange={(event) => { this.handleOnChangeSkill(event) }}
                            />
                        </li>
                        <li>
                            <input
                                value={this.state.experience}
                                type="text" placeholder="Experience..."
                                onChange={(event) => { this.handleOnChangeExperience(event) }}
                            />
                        </li>
                        <li>
                            <input
                                value={this.state.position}
                                type="text" placeholder="Position    ..."
                                onChange={(event) => { this.handleOnChangePosition(event) }}
                            />
                        </li>
                        <li>
                            <button type="button" onClick={() => this.handleAddEmployee()}>
                                Add New Employee
                            </button>
                        </li>
                    </ul>
                </div>
            </>
        )
    }
}
export default AddEmployee;