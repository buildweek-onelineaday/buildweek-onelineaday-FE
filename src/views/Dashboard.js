import React from 'react';
// import PropTypes from 'prop-types';
import clsx from 'clsx';
import moment from 'moment';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import {
  Drawer,
  AppBar,
  Toolbar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Divider,
  Button,
  IconButton,
  Container,
} from '@material-ui/core';
import {
  Menu as MenuIcon,
  ChevronLeft as ChevronLeftIcon,
  Dashboard as DashboardIcon,
  // BarChart as BarChartIcon,
  // Settings as SettingsIcon,
  PowerSettingsNew as LogoutIcon,
} from '@material-ui/icons';

import { addEntry, deleteEntry, updateEntry, closeModal, logout } from '../store/actions';
import { EntryForm, EntryModal, Timeline, QuoteCard } from '../components/dashboard/';

const mainListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary='Dashboard' />
    </ListItem>
    {/* <ListItem button>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary='10 Year Overview' />
    </ListItem> */}
  </div>
);

const secondaryListItems = (
  <div>
    {/* <ListItem button>
      <ListItemIcon>
        <SettingsIcon />
      </ListItemIcon>
      <ListItemText primary='Settings' />
    </ListItem> */}
  </div>
);

const drawerWidth = 200;
const today = moment();

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    backgroundColor: theme.palette.primary.light,
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
  button: {
    backgroundColor: theme.palette.primary.main,
  },
}));

function Dashboard(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const [loggedIn, setLogin] = React.useState(localStorage.getItem('userToken'));
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const handleLogout = (e) => {
    e.preventDefault();
    props.logout();
    setLogin(false);
  };

  return loggedIn ? (
    <div className={classes.root}>
      <AppBar position='absolute' className={clsx(classes.appBar, open && classes.appBarShift)}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge='start'
            color='inherit'
            aria-label='Open drawer'
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
          >
            <MenuIcon />
          </IconButton>
          <Typography component='h1' variant='h6' color='inherit' noWrap className={classes.title}>
            Welcome to the One Line a Day Journal!
          </Typography>
          <Button
            variant='contained'
            color='inherit'
            className={classes.button}
            onClick={handleLogout}
          >
            <LogoutIcon />
            Log Out
          </Button>
        </Toolbar>
      </AppBar>
      <Drawer
        variant='permanent'
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>{mainListItems}</List>
        <Divider />
        <List>{secondaryListItems}</List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth='lg' className={classes.container}>
          {props.entries[0] && today.isSame(moment(props.entries[0].date), 'day') ? (
            <QuoteCard />
          ) : (
            <EntryForm addEntry={props.addEntry} />
          )}
          <EntryModal
            activeEntry={props.activeEntry}
            onClose={props.closeModal}
            open={props.modalOpen}
            updateEntry={props.updateEntry}
          />
          <Timeline deleteEntry entries={props.entries} />
        </Container>
      </main>
    </div>
  ) : (
    <Redirect to='/' />
  );
}

Dashboard.propTypes = {
  //datatype validation goes here for provided props
};

const mapStateToProps = (state) => ({
  activeEntry: state.activeEntry,
  entries: state.entries,
  modalOpen: state.modalOpen,
});

const mapDispatch = {
  addEntry,
  deleteEntry,
  updateEntry,
  closeModal,
  logout,
};

export default connect(
  mapStateToProps,
  mapDispatch,
)(Dashboard);
