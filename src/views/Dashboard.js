import React, { Component } from 'react';
import { connect } from 'react-redux';

import { styled } from '@material-ui/styles';

import {
  addEntry,
  deleteEntry
} from '../store/actions';

import {
  EntryForm,
  Timeline
} from '../components/dashboard';

const Container = styled(`div`)({
  padding: '0 12px'
});

class Dashboard extends Component {
  render() {
    return (
      <Container>
        <EntryForm
          addEntry={this.props.addEntry}
        />
        <Timeline
          deleteEntry
          entries={this.props.entries}
        />
      </Container>
    );
  }
}

const mapState = state => ({
  entries: state.entries
});

const mapDispatch = {
  addEntry,
  deleteEntry
};

export default connect(
  mapState,
  mapDispatch
)(Dashboard);