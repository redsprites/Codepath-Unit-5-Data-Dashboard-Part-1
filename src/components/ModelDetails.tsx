// ModelDetails.tsx
import React, { useState } from 'react';
import { Model } from '../Interfaces';
import CarbonEmissionDetails from './CarbonEmissionDetails'; 

interface ModelDetailsProps {
  model: Model;
  axiosInstance: any; 
}

const ModelDetails: React.FC<ModelDetailsProps> = ({ model, axiosInstance }) => {
  const [showDetails, setShowDetails] = useState(false);
  const distance = 100; 
  const distanceUnit = "mi"; 

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="accordion-content" style={{ marginLeft: '20px', padding: '10px', borderLeft: '2px solid #ccc' }}>
      <div onClick={toggleDetails} style={{ cursor: 'pointer' }}>
        {model.data.attributes.name} - {model.data.attributes.year}
      </div>
      {showDetails && <CarbonEmissionDetails modelId={model.data.id}  distance={distance} distanceUnit={distanceUnit} axiosInstance={axiosInstance} />}
    </div>
  );
};

export default ModelDetails;
