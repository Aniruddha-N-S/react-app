import React from 'react';
import ListBody from './Lists/list-body';


class List extends React.Component {
    render() {

        const props = this.props;

        return (
            <div>

                <ListBody tasks={this.props.taskList} {...props} />
            </div>
        )
    }
}

export default List;