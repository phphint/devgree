"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactRouterDom = require("react-router-dom");
var _reactRedux = require("react-redux");
var _react2 = require("redux-persist/integration/react");
var _store = require("./store/store");
var _WebsiteRoutes = _interopRequireDefault(require("./components/WebsiteRoutes"));
var _DashboardRoutes = _interopRequireDefault(require("./components/DashboardRoutes"));
var _UserPortfolioRoutes = _interopRequireDefault(require("./components/UserPortfolioRoutes"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
// App.js 

// Import Provider from react-redux

// Make sure to import persistor here

function Content() {
  const {
    pathname
  } = (0, _reactRouterDom.useLocation)();
  (0, _react.useEffect)(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "min-h-screen flex flex-col bg-dark text-white"
  }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Routes, null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/*",
    element: /*#__PURE__*/_react.default.createElement(_WebsiteRoutes.default, null)
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/dashboard/*",
    element: /*#__PURE__*/_react.default.createElement(_DashboardRoutes.default, null)
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/portfolio/*",
    element: /*#__PURE__*/_react.default.createElement(_UserPortfolioRoutes.default, null)
  })));
}
function App() {
  return /*#__PURE__*/_react.default.createElement(_reactRedux.Provider, {
    store: _store.store
  }, /*#__PURE__*/_react.default.createElement(_react2.PersistGate, {
    loading: null,
    persistor: _store.persistor
  }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.BrowserRouter, null, /*#__PURE__*/_react.default.createElement(Content, null))));
}
var _default = exports.default = App;