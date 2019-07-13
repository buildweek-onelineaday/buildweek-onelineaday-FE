import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import {
  Avatar,
  Button,
  Card,
  Checkbox,
  Container,
  FormControlLabel,
  TextField,
  Typography,
} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { withStyles } from '@material-ui/core/styles';
import BackgroundImage from '../assets/sky.png';
import BackgroundVideo from '../assets/sky.mp4';
import { login } from '../store/actions';

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
    display: 'flex',
    flexFlow: 'column nowrap',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.75)',
  },
  avatar: {
    backgroundColor: props.palette.secondary.main,
    margin: '0 auto',
  },
  header: {
    textAlign: 'center',
    marginBottom: '1rem',
    color: 'rgba(0, 0, 0, .87)',
  },
});

const initialState = {
  credentials: {
    email: '',
    password: '',
  },
  rememberMe: false,
};

class LoginPage_ extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState;
    this.classes = props.classes;
  }
  handleInput = (e) => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value,
      },
    });
  };
  toggleSave = () => {
    this.setState({
      ...this.state,
      rememberMe: !this.state.rememberMe,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.login({ ...this.state.credentials });
    this.setState({ ...initialState });
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
        <div className={this.classes.cardContainer}>
          <Card className={this.classes.card}>
            <Avatar className={this.classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography className={this.classes.header} component='h1' variant='h3'>
              Sign In
            </Typography>
            <form onSubmit={(e) => e.preventDefault()}>
              <TextField
                variant='outlined'
                margin='normal'
                required
                fullWidth
                id='email'
                label='Email Address'
                name='email'
                autoComplete='email'
                autoFocus
                value={this.state.credentials.email}
                onChange={this.handleInput}
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
                onChange={this.handleInput}
              />
              <FormControlLabel
                control={<Checkbox value='remember' color='secondary' onClick={this.toggleSave} />}
                label='Remember me'
              />
              <Button
                type='submit'
                fullWidth
                variant='contained'
                color='secondary'
                onClick={this.handleSubmit}
              >
                Sign In
              </Button>
            </form>
          </Card>
        </div>
      </Container>
    );
  }
}

LoginPage_.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  return {
    error: state.loginReducer.error,
    pending: state.loginReducer.pending,
  };
};

const LoginPage = withStyles(styles)(LoginPage_);

export default connect(
  mapStateToProps,
  {
    login,
  },
)(LoginPage);
