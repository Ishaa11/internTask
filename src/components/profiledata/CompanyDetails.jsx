import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CompanyDetails = () => {
  const [info, setInfo] = useState({});

  useEffect(() => {
    const fetchInfo = async () => {
      try {
        const response = await axios.get(
          'https://fakerapi.it/api/v1/companies?_quantity=1'
        );
        if (response.data.data && response.data.data.length > 0) {
          setInfo(response.data.data[0]);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchInfo();
  }, []);

  return (
    <div className="company-container ">
      <h2>Company Details</h2>
      {info.id && (
        <div>
          <h3>{info.name}</h3>
          <div className="company-address">
            <p>Street: {info.addresses[0].street}</p>
            <p>City: {info.addresses[0].city}</p>
            <p>Zipcode: {info.addresses[0].zipcode}</p>
          </div>
          <div className="company-contact">
            {info.contact && (
              <div>
                <p>Contact Name: {info.contact.firstname} {info.contact.lastname}</p>
                <p>Contact Email: {info.contact.email}</p>
                <p>Contact Phone: {info.contact.phone}</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CompanyDetails;