import {
  CCard,
  CCardBody,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react';
import useAsync from 'hooks/useAsync';
import { Spinner } from 'react-bootstrap';
import AuthService from 'services/AuthService';

const UserList = () => {
  const { data, isLoading, isSuccess, isError, error } = useAsync(
    AuthService.users
  );

  return (
    <div>
      <CCard>
        <CCardBody>
          <CTable>
            <CTableHead>
              <CTableRow>
                <CTableHeaderCell>User Id</CTableHeaderCell>
                <CTableHeaderCell>Name</CTableHeaderCell>
                <CTableHeaderCell>Email</CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
              {isLoading && <Spinner animation="border" />}
              {isSuccess &&
                data?.map((user) =>
                  user.role === 'user' ? (
                    <CTableRow key={user._id}>
                      <CTableDataCell>{user._id}</CTableDataCell>
                      <CTableDataCell>{user.name}</CTableDataCell>
                      <CTableDataCell>{user.email}</CTableDataCell>
                      <CTableDataCell></CTableDataCell>
                    </CTableRow>
                  ) : (
                    ''
                  )
                )}
              {isError && <h3>{error}</h3>}
            </CTableBody>
          </CTable>
        </CCardBody>
      </CCard>
    </div>
  );
};

export default UserList;
