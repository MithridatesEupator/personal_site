import React from 'react';

class BarCustom extends React.Component {

  render() {
    return(
      <div className="container-welcome">
        {this.props.value}
      </div>
    );
  }
};

export default BarCustom;
