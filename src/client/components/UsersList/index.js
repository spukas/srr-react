import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../../actions';

class UsersList extends Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  renderUsers() {
    return this.props.users.map(({ id, name }) => <li key={id}>{name}</li>);
  }

  render() {
    return (
      <div>
        Here's user list:
        <ul>{this.renderUsers()}</ul>
      </div>
    );
  }
}

function mapStateToProps({ users }) {
  return { users };
}

function loadData() {
  console.log('Trying to load some data in UserList component');
}

export { loadData };
export default connect(mapStateToProps, { fetchUsers })(UsersList);
