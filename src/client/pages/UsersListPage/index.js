import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { fetchUsers } from '../../actions';

class UsersList extends Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  renderUsers() {
    return this.props.users.map(({ id, name }) => <li key={id}>{name}</li>);
  }

  renderHead() {
    return (
      <Helmet>
        <title>{`${this.props.users.length} Users Loaded`}</title>
        <meta property="og:title" content="User list" />
      </Helmet>
    );
  }

  render() {
    return (
      <div>
        {this.renderHead()}
        Here's user list:
        <ul>{this.renderUsers()}</ul>
      </div>
    );
  }
}

function mapStateToProps({ users }) {
  return { users };
}

function loadData(store) {
  return store.dispatch(fetchUsers());
}

export default {
  component: connect(mapStateToProps, { fetchUsers })(UsersList),
  loadData,
};
