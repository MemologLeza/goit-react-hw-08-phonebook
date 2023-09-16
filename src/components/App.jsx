import Layouts from 'layouts/Layouts';
import ContactsPage from 'pages/ContactsPage';
import HomePage from 'pages/HomePage';
import LoginPage from 'pages/LoginPage';
import RegisterPage from 'pages/RegisterPage';
import { Route, Routes } from 'react-router-dom';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';
import NotFound from 'pages/NotFound';

const App = () => {
  return (
    <Routes>
      <Route path="/goit-react-hw-08-phonebook" element={<Layouts />}>
        <Route index element={<HomePage />} />
        <Route
          path="register"
          element={
            <RestrictedRoute
              redirectTo="/goit-react-hw-08-phonebook/contacts"
              component={<RegisterPage />}
            />
          }
        />
        <Route
          path="login"
          element={
            <RestrictedRoute
              redirectTo="/goit-react-hw-08-phonebook/contacts"
              component={<LoginPage />}
            />
          }
        />
        <Route
          path="contacts"
          element={
            <PrivateRoute
              redirectTo="/goit-react-hw-08-phonebook/login"
              component={<ContactsPage />}
            />
          }
        />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
