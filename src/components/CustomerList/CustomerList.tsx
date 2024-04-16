//CustomerList.tsx
import React from 'react';
import './CustomerList.css';


interface Customer {
  id: number;
  name: string;
  title: string;
}

interface Props {
  customers: Customer[];
  onSelect: (customer: Customer) => void;
  selectedCustomerValueId: number | null;
}

const CustomerList: React.FC<Props> = ({ customers, onSelect, selectedCustomerValueId }) => {
  return (
    <div className="customer-list">
      {customers.map((customer) => (
        <div key={customer.id}
             className={`customer-card ${selectedCustomerValueId === customer.id ? 'selected' : ''}`}
             onClick={() => onSelect(customer)}>
          <div>{customer.name}</div>
          <div>{customer.title}</div>
        </div>
      ))}
    </div>
  );
};

export default CustomerList;
