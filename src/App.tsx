//App.tsx
import React, { useState } from 'react';
import CustomerList from './components/CustomerList/CustomerList';
import CustomerDetails from './components/CustomerDetails/CustomerDetails';
import './App.css';

const customers = Array.from({ length: 10 }, (_, i) => ({
  id: i + 1,
  name: `Customer ${i + 1}`,
  title: `This is the Description of the project ${i + 1}`,
  address: `This is the Address ${i + 1}`
}));

const App: React.FC = () => {
  const [selectedCustomerValue, setselectedCustomerValueValue] = useState<any>(null);

  return (
    <div className="app-container">
      <div className="app_title">
        Customer Listing page
      </div>
      <div className="app_Body">
       <div className="app_customerList">
        <CustomerList customers={customers} onSelect={setselectedCustomerValueValue} selectedCustomerValueId={selectedCustomerValue?.id} />
      </div>
      <div className="app_customerDetails">
        <CustomerDetails customer={selectedCustomerValue} />

      </div>
      </div>      
    </div>
  );
};

export default App;
