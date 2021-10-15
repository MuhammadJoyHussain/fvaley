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
import React from 'react';
import { Spinner } from 'react-bootstrap';
import { FaEdit, FaPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import StoreService from 'services/StoreService';
import imageUrlParser from 'utils/imageUrlParser';

const StoreList = () => {
  const { data, isLoading, isSuccess, isError, error } = useAsync(
    StoreService.getStores
  );
  return (
    <div>
      <CCard>
        <CCardHeader className="d-flex justify-content-between">
          Product List
          <Link to="/dashboard/add-product">
            <CButton variant="outline" color="primary">
              <FaPlus /> Add Product
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
                <CTableHeaderCell>Store ID</CTableHeaderCell>
                <CTableHeaderCell>Action</CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
              {isLoading && <Spinner animation="border" />}
              {isSuccess &&
                data?.map((store) => (
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
                      <CButton variant="outline" color="primary">
                        <FaEdit />
                      </CButton>
                    </CTableDataCell>
                  </CTableRow>
                ))}
              {isError && <h3>{error}</h3>}
            </CTableBody>
          </CTable>
        </CCardBody>
      </CCard>
    </div>
  );
};

export default StoreList;
