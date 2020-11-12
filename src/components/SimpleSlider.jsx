import React, { Component } from "react";
import Slider from "@material-ui/core/Slider";
import Typography from "@material-ui/core/Typography";

export default class SimpleSlider extends React.Component {
  state = {
    // sliders: [50, 50]
  };

  handleChange = (index, value) => {
    this.setState(previousState => {
      const sliders = [...previousState.sliders];
      sliders[index] = value;
      return { sliders };
    });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <Typography id="label">Slider label</Typography>
        {/* {this.state.sliders.map((slider, index) => ( */}
          <Slider
            key={index}
            value={slider}
            aria-labelledby="label"
            onChange={(event, value) => this.handleChange(index, value)}
          />

          
        {/* ))} */}
      </div>
    );
  }
}