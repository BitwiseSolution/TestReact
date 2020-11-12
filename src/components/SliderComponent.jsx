import React, { Component } from "react";
import Slider from "@material-ui/core/Slider";

export class SliderComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      slider1: 0,
      slider2:40
    };
  }

  handleSliderChange = (event, newValue, name) => {
    console.log(name);
    this.setState({
      [name]: newValue
    });

    console.log("name", name + "value" , newValue)

    let contact = {
      slider1: this.state.slider1,
      slider2: this.state.slider2,
    };
    console.log("contactsssss in SliderComponent",contact)
  };

  render() {
    return (
      <div>
        <Slider
          defaultValue={this.state.slider1}
          onChange={(event, newValue) =>
            this.handleSliderChange(event, newValue, "slider1")
          }
          aria-labelledby="input-slider"
          valueLabelDisplay="auto"
        />
         <Slider
          defaultValue={this.state.slider2}
          onChange={(event, newValue) =>
            this.handleSliderChange(event, newValue, "slider2")
          }
          aria-labelledby="input-slider"
          valueLabelDisplay="auto"
        />
      </div>
    );
  }
}

export default Slider;
