import CarDetails from '@client/types/CarDetails';
import Pricing from '@client/types/Pricing';
import Image from '@client/types/Image';

type Car = {
  id: string;
  detailUrl: string;
  portfolio: string;
  pricing: Pricing;
  images: Image[];
  available: boolean,
  visible: boolean;
  car: CarDetails;
  segment: string;
  labels: Array<{ name: string }>;
  conditions: {
    minimumAge: number;
    maximumAge: number;
    minLicenseDuration: number
  }
  teaser: {
    title: string;
    teaserImage: string;
  }
};

export default Car;
