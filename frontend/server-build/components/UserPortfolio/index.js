"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _react = _interopRequireDefault(require("react"));
var _client = require("react-dom/client");
require("bootstrap/dist/js/bootstrap.bundle.min.js");
require("bootstrap/dist/css/bootstrap.min.css");
require("./index.css");
require("./components/UserPortfolio/portfolio.css");
require("@fortawesome/fontawesome-free/css/all.min.css");
var _App = _interopRequireDefault(require("./App"));
// index.js

// Import createRoot

// Import the App component

// Find the root element in your HTML
const container = document.getElementById('root');

// Create a root.
const root = (0, _client.createRoot)(container); // Create a root for your application

// Initial render: Render the App component to the root.
root.render( /*#__PURE__*/_react.default.createElement(_react.default.StrictMode, null, /*#__PURE__*/_react.default.createElement(_App.default, null), " "));