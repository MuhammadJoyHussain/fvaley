import React from 'react'
import store from 'redux/store'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const MerchantDashboard = React.lazy(() => import('./views/dashboard/MerchantDashboard'))
const UserList = React.lazy(() => import('./views/userList/UserList'))
// const ProductList = React.lazy(() => import('./views/productList/ProductList'))
const MerchantStore = React.lazy(() => import('./views/MerchantStore/MerchantStore'))
const StoreList = React.lazy(() => import('./views/StoreList/StoreList'))
// const AddProduct = React.lazy(() => import('./views/addProduct/AddProduct'))



const { auth: { data } } = store.getState();

const selectDashboard = () => {
  switch (data?.role && data?.id) {
    case 'merchant':
      return MerchantDashboard
    case "admin":
      return Dashboard
    default:
      return null
  }
}


const routes = [
  { exact: true, path: '/dashboard', name: 'Dashboard', component: selectDashboard(), role: ["admin", "merchant"] },
  {
    exact: true, path: '/dashboard/users', name: 'User List', component: UserList,
    role: ["admin"]
  },
  {
    exact: true, path: '/dashboard/store', name: 'User List', component: StoreList,
    role: ["admin"]
  },
  {
    exact: true, path: '/dashboard/merchant', name: 'User List', component: MerchantStore,
    role: ["admin", "merchant"]
  },
  // {
  //   exact: true, path: '/dashboard/products', name: 'User List', component: ProductList,
  //   role: ["merchant"]
  // },
  // {
  //   exact: true, path: '/store/:id/add-product', name: 'Add Product', component: AddProduct,
  //   role: ["merchant"]
  // }
]

export default routes
