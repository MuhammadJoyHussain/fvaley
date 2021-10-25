import {
  cilPuzzle,
  cilSpeedometer
} from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import { CNavGroup, CNavItem } from '@coreui/react'
import store from 'redux/store'

const { auth: { data } } = store.getState();

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: `/dashboard`,
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    role: ["admin", "merchant"],

  },

  {
    component: CNavGroup,
    name: 'User Management',
    to: '/dashboard/users',
    role: ["admin"],
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'User List',
        to: '/dashboard/users',
      },
      {
        component: CNavItem,
        name: 'Merchants',
        to: '/dashboard/merchants',
      },
      {
        component: CNavItem,
        name: 'Admins',
        to: '/dashboard/admins',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Store Management',
    to: '/dashboard/stores',
    role: ["admin"],
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Stores',
        to: '/dashboard/store',
      },
    ],
  },
  // For Merchant
  {
    component: CNavGroup,
    name: 'Store Management',
    to: '/dashboard/merchant',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    role: ["merchant"],

    items: [
      {
        component: CNavItem,
        name: 'Store',
        to: `/dashboard/${data?.id}/merchant`,
      },
    ],
  },
]

export default _nav
