import React from 'react';

class ProfileCustom extends React.Component {

  render() {
    return(
      <div style={{display: 'flex', flexDirection: "column", alignItems: "center"}}>
        <div className="profile-pic">
        </div>
        <p style={{textAlign: 'center', borderBottom: "4px solid #d76179", width: "30%"}}>
          Who Am I?
        </p>
        <p className="profile-text">
          {this.props.bio}
        </p>
      </div>
    );
  }
};

export default ProfileCustom;
