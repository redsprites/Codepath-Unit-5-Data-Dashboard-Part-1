// Interfaces.ts
export interface Brand {
  data : {
    id: string;
    type: string;
    attributes: {
      name: string;
      number_of_models: number;
    };
  }
  }
  
  export interface Model {
    data :{
    id: string;
    type: string;
    attributes: {
      name: string;
      year: number;
      vehicle_make: string;
    };
  }
  }
  
  export interface CarbonEmissionDetails {
    id: string;
    type: string;
    attributes: {
      distance_value: number;
      vehicle_make: string;
      vehicle_model: string;
      vehicle_year: number;
      distance_unit: string;
      estimated_at: string;
      carbon_g: number;
      carbon_lb: number;
      carbon_kg: number;
      carbon_mt: number;
    };
  }
  
  export interface AxiosInstance {
    get: (url: string) => Promise<any>;
    post: (url: string, data: object) => Promise<any>;
  }
  