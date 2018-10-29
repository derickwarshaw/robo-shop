import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const mapState = state => {
  return {
    email: state.user.email
  };
};

export const UserHome = props => {
  const { email } = props;

  return (
    <div>
      <h3>Welcome, {email}</h3>
    </div>
  );
};

export default connect(mapState)(UserHome);

UserHome.propTypes = {
  email: PropTypes.string
};
