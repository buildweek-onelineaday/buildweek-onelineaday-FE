import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  CircularProgress,
  Container,
  Typography,
  withStyles,
} from '@material-ui/core';
import { getCardQuote } from '../../store/actions';
import cardImage from '../../assets/ronswanson.jpg';

const styles = (props) => ({
  progress: {},
  card: {
    marginBottom: '1rem',
  },
});

class QuoteCard_ extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.props.getCardQuote();
  }

  render() {
    return (
      <Container maxWidth='sm'>
        {this.props.pending ? (
          <CircularProgress className={this.props.classes.progress} color='secondary' />
        ) : (
          <Card className={this.props.classes.card} maxWidth='sm'>
            <CardHeader title='Entry Submitted. All Done!' />
            <CardMedia
              component='img'
              alt='The Great and Mighty Ron Swanson!'
              height='280'
              image={cardImage}
              title='The Great and Mighty Ron Swanson!'
            />
            <CardContent>
              <Typography variant='body2' color='textSecondary' component='p'>
                {`${this.props.quote}`}
              </Typography>
              <Typography variant='body1' color='textSecondary' component='p' align='right'>
                {`- Ron Swanson`}
              </Typography>
            </CardContent>
          </Card>
        )}
      </Container>
    );
  }
}

QuoteCard_.propTypes = {
  classes: PropTypes.object.isRequired,
};

const QuoteCard = withStyles(styles)(QuoteCard_);

const mapStateToProps = (state) => {
  return {
    error: state.quoteCardReducer.error,
    pending: state.quoteCardReducer.pending,
    quote: state.quoteCardReducer.quote,
  };
};

export default connect(
  mapStateToProps,
  {
    getCardQuote,
  },
)(QuoteCard);
