import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { BrowserRouter, Link } from "react-router-dom";

const styles = theme => ({
  root: {
    width: '10%',
    minHeight: '1080px',
    position: 'absolute', 
    right: 0,
    backgroundColor: 'rgba(52, 52, 52, 0.0)'
  },
  button: {
    marginTop: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  actionsContainer: {
    marginBottom: theme.spacing.unit * 2,
  },
  resetContainer: {
    padding: theme.spacing.unit * 3,
    backgroundColor: 'rgba(52, 52, 52, 0.0)'
  },
});

function getSteps() {
  return ['Aufbau', 'Daten', 'Simulation', 'Anwendungsfelder'];
}

class VerticalLinearStepper extends React.Component {
  state = {
    activeStep: 0,
  };

  handleNext = () => {
    this.setState(state => ({
      activeStep: state.activeStep + 1,
    }));
  };

  handleBack = () => {
    this.setState(state => ({
      activeStep: state.activeStep - 1,
    }));
  };

  handleReset = () => {
    this.setState({
      activeStep: 0,
    });
  };

  render() {
    const { classes } = this.props;
    const steps = getSteps();
    const { activeStep } = this.state;

    return (
      <div className={classes.root}>
        <Stepper activeStep={activeStep} orientation="vertical" style={{backgroundColor: 'rgba(0, 0, 0, 0.0)'}}>
          {steps.map((label, index) => (
            <Step key={label}>
              <StepLabel style={{textAlign: 'left', typography: {marginLeft: '100px'}}}>{label}</StepLabel>
              <StepContent>
                <div className={classes.actionsContainer}>
                  <div style={{height:"74.7vh"}}>
                  <BrowserRouter>
                  <Link to="/"style={{ textDecoration: 'none', color: 'white' }}>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={this.handleNext}
                      className={classes.button}
                    >
                      {activeStep === steps.length -1 ? 'Fertig' : 'Weiter'}
                    </Button></Link></BrowserRouter>
                  </div>
                </div>
              </StepContent>
            </Step>
          ))}
        </Stepper>
        {activeStep === steps.length && (
          <Paper square elevation={0} className={classes.resetContainer}>
            <Typography>Jetzt weißt Du alles über den digitalen Zwilling!</Typography>
            <Button onClick={this.handleReset} className={classes.button}>
              Neu starten?
            </Button>
          </Paper>
        )}
      </div>
    );
  }
}

VerticalLinearStepper.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(VerticalLinearStepper);