// App.js 
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { Provider } from 'react-redux'; // Import Provider from react-redux
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store/store'; // Make sure to import persistor here




import WebsiteRoutes from './components/WebsiteRoutes';
import DashboardRoutes from './components/DashboardRoutes';
 
 
import UserPortfolioRoutes from './components/UserPortfolioRoutes';




function Content() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <div className="min-h-screen flex flex-col bg-dark text-white">
            <Routes>
            <Route path="/*" element={<WebsiteRoutes />} />
                    <Route path="/dashboard/*" element={<DashboardRoutes />} />
                    <Route path="/portfolio/*" element={<UserPortfolioRoutes />} />


            </Routes>
        </div>
    );
}

function App() {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <Router>
                    <Content />
                </Router>
            </PersistGate>
        </Provider>
    );
}

export default App;
