// CarbonEmissionDetails.tsx
import React, { useState, useEffect } from 'react';
import { CarbonEmissionDetails as CarbonEmissionDetailsType, AxiosInstance } from '../Interfaces';

interface CarbonEmissionDetailsProps {
  modelId: string;
  axiosInstance: AxiosInstance;
  distance: number; 
  distanceUnit: string; 
}

const CarbonEmissionDetails: React.FC<CarbonEmissionDetailsProps> = ({ modelId, distance, distanceUnit, axiosInstance }) => {
  const [details, setDetails] = useState<CarbonEmissionDetailsType | null>(null);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const response = await axiosInstance.post('/estimates', {
          type: "vehicle",
          vehicle_model_id: modelId,
          distance_unit: distanceUnit, 
          distance_value: distance, 
        });
        setDetails(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchDetails();
  }, [modelId, distance, distanceUnit, axiosInstance]);

  if (!details) return <div>Loading carbon emission details...</div>;

  return (
    <div className="model-item">
      <p>Carbon Emission: {details.attributes.carbon_kg} kg</p>
      {/* Display additional carbon emission details here */}
    </div>
  );
};

export default CarbonEmissionDetails;
