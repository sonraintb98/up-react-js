import React from "react";

class MyComponent extends React.Component {
    state = {
        name: 'Ronaldo',
        position: 'Developer'
    }
    handleOnChangeName = (event) => {
        this.setState({
            name: event.target.value
        })
    }
    handleClickButton = () => {
        alert("Click me")
    }
    render() {
        return (
            <>
                <div className="first">
                    <input value={this.state.name} type="text"
                        onChange={(event) => this.handleOnChangeName(event)} /><br />
                    Hello {this.state.name} - Position: {this.state.position}
                </div>
                <div className="second">
                    <button onClick={() => this.handleClickButton()}>Click Me</button>
                </div>
            </>
        )
    }
}
export default MyComponent;