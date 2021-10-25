import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react';
import useAsync from 'hooks/useAsync';
import { Spinner } from 'react-bootstrap';
import { FaPlus } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { AppState } from 'redux/store';
import StoreService from 'services/StoreService';
import imageUrlParser from 'utils/imageUrlParser';

const MerchantStore = () => {
  const { data, isLoading, isSuccess, isError, error } = useAsync(
    StoreService.getStores
  );

  const auth = useSelector((state: AppState) => state.auth);

  return (
    <div>
      <CCard>
        <CCardHeader className="d-flex justify-content-between">
          Stores
          <Link to="/dashboard/add-product">
            <CButton variant="outline" color="primary">
              <FaPlus /> Add Store
            </CButton>
          </Link>
        </CCardHeader>
        <CCardBody>
          <CTable>
            <CTableHead>
              <CTableRow>
                <CTableHeaderCell>Image</CTableHeaderCell>
                <CTableHeaderCell>Name</CTableHeaderCell>
                <CTableHeaderCell>Price</CTableHeaderCell>
                <CTableHeaderCell>Owner ID</CTableHeaderCell>
                <CTableHeaderCell>Action</CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
              {isLoading && <Spinner animation="border" />}
              {isSuccess &&
                data?.map((store) =>
                  auth.data?.id === store.owner ? (
                    <CTableRow key={store._id}>
                      <CTableHeaderCell>
                        <img
                          width={100}
                          src={imageUrlParser(store.image)}
                          alt=""
                        />
                      </CTableHeaderCell>
                      <CTableDataCell>{store.name}</CTableDataCell>
                      <CTableDataCell>{store.location}</CTableDataCell>
                      <CTableDataCell>{store.owner}</CTableDataCell>
                      <CTableDataCell>
                        <Link to={`/dashboard/store/${store._id}/product`}>
                          <CButton
                            className="btn-sm"
                            variant="outline"
                            color="primary"
                          >
                            View Products
                          </CButton>
                        </Link>{' '}
                      </CTableDataCell>
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

export default MerchantStore;
