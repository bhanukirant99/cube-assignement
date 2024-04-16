import React, { useEffect, useState } from 'react';
import { fetchRandomPhotos } from '../../api/unsplashApiService';
import './CustomerDetails.css';

interface Customer {
  name: string;
  title: string;
  address: string;
}

interface Props {
  customer: Customer | null;
}

const randomTerms = ['summer', 'winter', 'autumn', 'spring', 'night', 'day', 'rain', 'sunny', 'snow'];

const CustomerDetails: React.FC<Props> = ({ customer }) => {
  let isMounted = true; 

  const [photos, setPhotos] = useState<string[]>([]);
  const [query, setQuery] = useState<string>('');
  const fetchPhotos = async () => {
    const newPhotos = await fetchRandomPhotos(query);
    if (isMounted) {
      setPhotos(newPhotos);
    }
  };
  useEffect(() => {
    fetchPhotos();
   
    if (customer) {
      // Initialize the query with the customer title and a random term
      setQuery(`${customer.title} ${randomTerms[Math.floor(Math.random() * randomTerms.length)]}`);
      const interval = setInterval(() => {
        // Update the query with a new random term every 10 seconds
        setQuery(`${customer.title} ${randomTerms[Math.floor(Math.random() * randomTerms.length)]}`);
      }, 10000);

      return () => {
        isMounted = false;
        clearInterval(interval);
      };
    }
  }, [customer]);

  useEffect(() => {
    fetchPhotos();
  }, [query]); // Depend on query

  if (!customer) return <div>Select a customer to view details.</div>;

  return (
    <div>
      <h2>{customer.name}</h2>
      <p>{customer.title}</p>
      <p>{customer.address}</p>
      <div className="photo-grid">
        {photos.map((url, index) => (
          <div key={index} className="photo">
            <img src={url} alt={`Customer ${customer.name} photo ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerDetails;
