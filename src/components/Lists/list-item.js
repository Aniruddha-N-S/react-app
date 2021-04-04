import React from 'react';

class ListItem extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            editing: false
        }
    }


    renderTasks() {

        const { name, isComplete } = this.props;

        const taskStyle = {
            cursor: 'pointer',
            fontWeight: 'bold',
            color: isComplete ? 'green' : 'red'
        }


        if (this.state.editing) {
            return (
                <div key={name}>
                    <form onSubmit={this.handleSave}>
                        <input name={name} type="text" defaultValue={name} ref="editInput" />
                    </form>
                </div>
            )
        }


        return (
            <div key={name} style={taskStyle} onClick={this.handleToggleComplete}>
                {name}
            </div>

        )
    }


    renderButtons() {

        if (this.state.editing) {
            return (
                <div>
                    <button onClick={this.handleToggleEdit}>Cancel</button>
                    <button onClick={this.handleDelete}>Delete</button>
                    <button onClick={this.handleSave}>Save</button>
                </div>
            )
        }


        return (
            <div>
                <button onClick={this.handleToggleEdit}>Edit</button>
            </div>
        )
    }


    render() {
        return (
            <div>
                {this.renderTasks()}
                {this.renderButtons()}
            </div>
        )
    }


    handleToggleComplete = () => {
        const taskToToggle = this.props;
        this.props.toggleTask(taskToToggle);
    }


    handleDelete = () => {
        const taskToDelete = this.props.name;
        this.props.deleteTask(taskToDelete);

        this.handleToggleEdit();
    }


    handleSave = (event) => {
        event.preventDefault();

        const oldTask = this.props.name;
        const newTask = this.refs.editInput.value;
        this.props.saveTask(oldTask, newTask);


        this.setState({ editing: false });
    }


    handleToggleEdit = () => {
        this.setState(prevState => ({ editing: !prevState.editing }));
    }
}

export default ListItem;