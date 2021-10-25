import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import DefaultLayout from 'components/layout/DefaultLayout';
import PrivateRoute from 'components/authGaurd/PrivateRoute';

const Home = React.lazy(() => import('./pages/Home/Home'));
const Help = React.lazy(() => import('./pages/Help/Help'));
const Login = React.lazy(() => import('./pages/Login/Login'));
const Checkout = React.lazy(() => import('./pages/Checkout/Checkout'));
const Dashboard = React.lazy(() => import('./admin/layout/DefaultLayout'));
// const StoreProduct = React.lazy(
//   () => import('./admin/views/storeProduct/StoreProduct')
// );
// const AddProduct = React.lazy(
//   () => import('./admin/views/addProduct/AddProduct')
// );
const ProductDetails = React.lazy(
  () => import('pages/ProductDetails/ProductDetails')
);

const AppRouter: React.FC = () => {
  return (
    <Router>
      <DefaultLayout>
        <Switch>
          <Suspense fallback={<div>Loading...</div>}>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route path="/help" component={Help} />
            <Route path="/product/:id" component={ProductDetails} />
            {/* <Route path="/store/:id/product" component={StoreProduct} /> */}
            {/* <Route path="/store/:id/add-product" component={AddProduct} /> */}
            <Route path="/checkout/" component={Checkout} />
            <PrivateRoute path="/dashboard" component={Dashboard} />
          </Suspense>
        </Switch>
      </DefaultLayout>
    </Router>
  );
};

export default AppRouter;
