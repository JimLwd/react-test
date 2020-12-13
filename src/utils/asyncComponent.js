import { Component } from "react";
import { Spin } from "antd";

const asyncComponent = (importComponent) => {
  return class extends Component {
    constructor() {
      super();
      this.state = {
        component: null,
        styleObj: {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          fontSize: "40px",
        },
      };
    }
    componentDidMount() {
      importComponent().then((cmp) => {
        this.setState({ component: cmp.default });
      });
    }
    render() {
      const c = this.state.component;
      return c ? (
        <c {...this.props} />
      ) : (
        <div style={this.state.styleObj}>
          <Spin tip="Loading..." />
        </div>
      );
    }
  };
};

export default asyncComponent;
