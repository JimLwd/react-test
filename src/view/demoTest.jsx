import React, { Component } from "react";
import PropTypes from "prop-types";
import { Button } from "antd";

class Demo extends Component {
  constructor() {
    super();
    this.state = {
      name: "wd",
    };
  }
  changeFather = (obj) => {
    const { name } = obj;
    this.setState({ name: name });
  };
  render() {
    return (
      <div>
        <Child name={this.state.name} changeFather={this.changeFather()} />
      </div>
    );
  }
}

class Child extends Component {
  static propTypes = {
    name: PropTypes.string,
  };
  click = () => {
    this.props.changeFather({ name: "cs" });
  };
  render() {
    return (
      <div>
        <h3>这是父组件传入的值{this.props.name}</h3>
        <Button type="primary" onClick={this.click}>
          点击改变父元素值
        </Button>
      </div>
    );
  }
}

export default Demo;
