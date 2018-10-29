import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Route, Switch } from "react-router-dom";
import PropTypes from "prop-types";
import { StripeProvider, Elements } from "react-stripe-elements";
import {
  Login,
  Signup,
  ProductCatalog,
  SingleProductPage,
  Home,
  ProductSearch,
  CheckoutComplete,
  CartPage,
  Checkout
} from "components";
import AdminRoutes from "./router/AdminRoutes";
import UserRoutes from "./router/UserRoutes";
import { me } from "store";

const mapState = state => {
  return {
    isLoggedIn: !!state.user.id,
    isAdmin: state.user.isAdmin
  };
};

const mapDispatch = dispatch => {
  return {
    loadInitialData() {
      dispatch(me());
    }
  };
};

class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData();
  }

  render() {
    const { isLoggedIn, isAdmin } = this.props;

    return (
      <Switch>
        {/* Routes placed here are available to all visitors */}
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route exact path="/cart" component={CartPage} />
        <Route path="/products/product/:id" component={SingleProductPage} />
        <Route path="/products/search/:searchText" component={ProductSearch} />
        <Route
          path="/catalog/:categoryId/products"
          component={ProductCatalog}
        />
        <Route path="/cart/checkout/complete" component={CheckoutComplete} />
        <Route
          path="/cart/checkout"
          render={routeProps => (
            <StripeProvider apiKey="pk_test_UniUJcxzZgf0zmgciwrViyLC">
              <Elements>
                <Checkout {...routeProps} />
              </Elements>
            </StripeProvider>
          )}
        />
        {isAdmin && <AdminRoutes />}
        {isLoggedIn && <UserRoutes />}
        <Route path="/" component={Home} />
      </Switch>
    );
  }
}

export default withRouter(connect(mapState, mapDispatch)(Routes));

Routes.propTypes = {
  loadInitialData: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
};
