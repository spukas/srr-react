import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCurrentUser, fetchUsers, fetchAdmins } from '../../actions';

class AdminsList extends Component {
  componentDidMount() {
    this.props.fetchAdmins();
  }

  renderAdmins() {
    return this.props.admins.map(({ id, name }) => <li key={id}>{name}</li>);
  }

  render() {
    return (
      <div>
        <h4>Protected list of admins</h4>
        <ul>{this.renderAdmins()}</ul>
      </div>
    );
  }
}

function mapStateToProps({ admins }) {
  return { admins };
}

function loadData(store) {
  return store.dispatch(fetchAdmins());
}

export default {
  component: connect(mapStateToProps, { fetchUsers })(AdminsList),
  loadData,
};
