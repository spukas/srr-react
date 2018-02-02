import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../../actions';

class UsersList extends Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  renderUsers = () =>
    this.props.users(user => <li key={user.id}>{user.name}</li>);

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

export default connect(mapStateToProps, { fetchUsers })(UsersList);
