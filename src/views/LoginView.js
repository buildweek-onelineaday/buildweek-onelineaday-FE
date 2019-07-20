import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import {
  AppBar,
  Avatar,
  Button,
  Card,
  Checkbox,
  Container,
  Dialog,
  FormControlLabel,
  Slide,
  TextField,
  Toolbar,
  Typography,
} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { withStyles } from '@material-ui/core/styles';
import BackgroundImage from '../assets/sky.png';
import BackgroundVideo from '../assets/sky.mp4';
import { login, signUp } from '../store/actions';

const styles = (props) => ({
  container: {
    position: 'relative',
    height: '100vh',
    width: '100vw',
    background: `url(${BackgroundImage}) no-repeat fixed center`,
    backgroundSize: 'cover',
  },
  videoContainer: {
    position: 'absolute',
    top: '0',
    left: '0',
    bottom: '0',
    right: '0',
    overflow: 'hidden',
  },
  video: {
    position: 'fixed',
    right: '0',
    bottom: '0',
    minWidth: '100%',
    minHeight: '100%',
    transform: 'translateX(calc((100% - 100vw) / 2))',
    filter: 'blur(2px)',
  },
  cardContainer: {
    position: 'absolute',
    top: '0',
    left: '0',
    bottom: '0',
    right: '0',
    padding: '2rem',
    display: 'flex',
    alignItems: 'center',
  },
  card: {
    padding: '2rem 1rem',
    margin: '0 auto',
    display: 'flex',
    flexFlow: 'column nowrap',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.85)',
  },
  avatar: {
    backgroundColor: props.palette.secondary.main,
    color: 'rgba(0, 0, 0, .87)',
    margin: '0 auto',
  },
  header: {
    textAlign: 'center',
    marginBottom: '1rem',
    color: 'rgba(0, 0, 0, .87)',
  },
  signUp: {
    marginTop: '.5rem',
    textDecoration: 'underline',
  },
  dialog: {
    padding: '0',
  },
  appBar: {
    backgroundColor: props.palette.background.paper,
    top: 'auto',
    bottom: '0',
  },
  toolBar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
});

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction='up' ref={ref} {...props} />;
});

const initialState = {
  credentials: {
    username: '',
    password: '',
  },
  signupCredentials: {
    username: '',
    email: '',
    password: '',
    phone: '',
    birthdate: '',
  },
  rememberMe: false,
  signupAccess: false,
};

class LoginPage_ extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState;
    this.classes = props.classes;
  }
  handleLoginInput = (e) => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value,
      },
    });
  };
  handleSignUpInput = (e) => {
    this.setState({
      signupCredentials: {
        ...this.state.signupCredentials,
        [e.target.name]: e.target.value,
      },
    });
  };
  toggleRememberMe = () => {
    this.setState({
      ...this.state,
      rememberMe: !this.state.rememberMe,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.login({ ...this.state.credentials });
    this.setState({
      ...this.state,
      credentials: initialState.credentials,
    });
  };
  handleSignUpOpen = (e) => {
    e.preventDefault();
    this.setState({
      ...this.state,
      signupAccess: true,
    });
  };
  handleSignUpClose = (e) => {
    e.preventDefault();
    this.setState({
      ...this.state,
      signupAccess: false,
    });
  };
  handleSignUp = (e) => {
    e.preventDefault();
    this.props.signUp({ ...this.state.signupCredentials });
    // .then(console.log(`${this.props.message}`));
    this.setState({
      ...this.state,
      signupCredentials: initialState.signupCredentials,
      signupAccess: false,
    });
  };

  render() {
    // if (localStorage.getItem('userToken')) {
    //   return <Redirect to='/' />;
    // }
    return (
      <Container className={this.classes.container}>
        <div className={this.classes.videoContainer}>
          <video className={this.classes.video} autoPlay muted loop>
            <source src={BackgroundVideo} type='video/mp4' />
          </video>
        </div>
        <Container className={this.classes.cardContainer} maxWidth='sm'>
          <Card className={this.classes.card}>
            <Avatar className={this.classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography className={this.classes.header} component='h1' variant='h3'>
              {`Sign In`}
            </Typography>
            <form onSubmit={(e) => e.preventDefault()}>
              <TextField
                variant='outlined'
                margin='normal'
                required
                fullWidth
                id='username'
                label='Username'
                name='username'
                autoComplete='username'
                autoFocus
                value={this.state.credentials.username}
                onChange={this.handleLoginInput}
              />
              <TextField
                variant='outlined'
                margin='normal'
                required
                fullWidth
                name='password'
                label='Password'
                type='password'
                id='password'
                autoComplete='current-password'
                value={this.state.credentials.password}
                onChange={this.handleLoginInput}
              />
              <FormControlLabel
                control={
                  <Checkbox value='remember' color='secondary' onClick={this.toggleRememberMe} />
                }
                label='Remember me'
              />
              <Button
                type='submit'
                fullWidth
                variant='contained'
                color='secondary'
                onClick={this.handleSubmit}
              >
                {`Sign In`}
              </Button>
              <Button
                type='button'
                fullWidth
                variant='text'
                size='small'
                className={this.classes.signUp}
                onClick={this.handleSignUpOpen}
              >
                {`No account? Sign Up`}
              </Button>
            </form>
          </Card>
          {/* </div> */}
        </Container>
        <Dialog
          fullscreen='true'
          open={this.state.signupAccess}
          TransitionComponent={Transition}
          className={this.classes.dialog}
        >
          <AppBar position='fixed' className={this.classes.appBar}>
            <Toolbar className={this.classes.toolBar}>
              <Button type='button' variant='contained' onClick={this.handleSignUpClose}>
                {`Cancel`}
              </Button>
              <Button
                type='submit'
                variant='contained'
                color='secondary'
                onClick={this.handleSignUp}
              >
                {`Sign Up`}
              </Button>
            </Toolbar>
          </AppBar>
          <Card className={this.classes.card}>
            <Typography className={this.classes.header} component='h1' variant='h6'>
              {`Sign Up Form`}
            </Typography>
            <form onSubmit={(e) => e.preventDefault()}>
              <TextField
                variant='outlined'
                margin='dense'
                required
                fullWidth
                id='userName'
                label='User Name'
                name='username'
                autoComplete='userName'
                autoFocus
                value={this.state.signupCredentials.username}
                onChange={this.handleSignUpInput}
              />
              <TextField
                variant='outlined'
                margin='dense'
                required
                fullWidth
                id='email'
                label='Email Address'
                name='email'
                autoComplete='email'
                value={this.state.signupCredentials.email}
                onChange={this.handleSignUpInput}
              />
              <TextField
                variant='outlined'
                margin='dense'
                required
                fullWidth
                name='password'
                label='Password'
                type='password'
                id='password'
                autoComplete='current-password'
                value={this.state.signupCredentials.password}
                onChange={this.handleSignUpInput}
              />
              <TextField
                variant='outlined'
                margin='dense'
                fullWidth
                id='phone'
                label='Phone Number'
                name='phone'
                autoComplete='(000)000-0000'
                value={this.state.signupCredentials.phone}
                onChange={this.handleSignUpInput}
              />
              <TextField
                variant='outlined'
                margin='dense'
                required
                fullWidth
                id='birthdate'
                label='Date of Birth'
                name='birthdate'
                autoComplete='00/00/00'
                value={this.state.signupCredentials.birthdate}
                onChange={this.handleSignUpInput}
              />
            </form>
          </Card>
        </Dialog>
      </Container>
    );
  }
}

LoginPage_.propTypes = {
  classes: PropTypes.object.isRequired,
};

const LoginPage = withStyles(styles)(LoginPage_);

const mapStateToProps = (state) => {
  return {
    message: state.loginReducer.message,
    pending: state.loginReducer.pending,
  };
};

export default connect(
  mapStateToProps,
  {
    login,
    signUp,
  },
)(LoginPage);
