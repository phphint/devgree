"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("react");
var _reactRouterDom = require("react-router-dom");
var _reactRedux = require("react-redux");
var _userPortfolioThunks = require("./userPortfolioThunks");
var _UserPortfolioView = _interopRequireDefault(require("./UserPortfolioView"));
// userportfoliocontainer.js

// Import UserPortfolioView

const UserPortfolioContainer = () => {
  const {
    id
  } = (0, _reactRouterDom.useParams)(); // This is the UUID from the URL
  const dispatch = (0, _reactRedux.useDispatch)();
  const portfolioData = (0, _reactRedux.useSelector)(state => state.userPortfolio.data); // Get the portfolio data from Redux store
  const token = (0, _reactRedux.useSelector)(state => state.auth.token); // Get the auth token from Redux store

  (0, _react.useEffect)(() => {
    if (id) {
      // Dispatch the thunk to fetch portfolio data with the UUID and token
      dispatch(_userPortfolioThunks.userPortfolioThunks.fetchUserPortfolio({
        identifier: id,
        token
      }));
    }
  }, [id, token, dispatch]);

  // Render UserPortfolioView and pass the portfolioData as a prop
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_UserPortfolioView.default, {
    portfolioData: portfolioData
  }));
};
var _default = exports.default = UserPortfolioContainer;