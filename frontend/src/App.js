// App.js 
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { Provider } from 'react-redux'; // Import Provider from react-redux
import store from './store/store'; // Import store from your store.js file



import WebsiteRoutes from './components/WebsiteRoutes';
import DashboardRoutes from './components/DashboardRoutes';



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

            </Routes>
        </div>
    );
}

function App() {
    return (
        <Provider store={store}> {/* Wrap your app with the Provider and pass the store as a prop */}
            <Router>
                <Content />
            </Router>
        </Provider>
    );
}

export default App;
