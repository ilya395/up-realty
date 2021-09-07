import React from "react";

export const MainContainerHOC = (WrappedComponent, props = {}) => {
  return class Container extends React.Component {
    render() {
      return (
        <>
          <WrappedComponent props={{...this.props, data: 1}} />
        </>
      );
    }
  }
}