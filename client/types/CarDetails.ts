type CarDetails = {
  fueltype: 'Benzin' | 'Diesel' | 'Elektrisch/Benzin' | 'Elektrisch';
  gearingType: 'Automatik' | 'Schaltgetriebe';
  ps: number;
  kw: number;
  offerExtColor: string;
  version: string;
  make: string;
  drive: string;
  model: string,
  ccm: string;
  doors: string;
  equipmentDetails: Array<{ name: string }>;
  environment: {
    emissionLabel: string;
    emissionClass: string;
    consumptionCity: number;
    emissionCO2: number;
    consumptionCombined: number;
    consumptionCountry: number;
  }
}

export default CarDetails;
