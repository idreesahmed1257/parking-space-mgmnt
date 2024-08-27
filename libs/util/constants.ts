import { LocationInfo } from './types'

export const initialViewState = {
  latitude: 31.5204,
  longitude: 74.3587,
  zoom: 11.5,
}

export const majorCitiesLocationInfo: LocationInfo[] = [
  {
    placeName: 'Karachi, Sindh, Pakistan',
    latLng: [24.8607, 67.0011],
  },
  {
    placeName: 'Lahore, Punjab, Pakistan',
    latLng: [31.5497, 74.3436],
  },
  {
    placeName: 'Islamabad, Islamabad Capital Territory, Pakistan',
    latLng: [33.6844, 73.0479],
  },
  {
    placeName: 'Rawalpindi, Punjab, Pakistan',
    latLng: [33.5651, 73.0169],
  },
  {
    placeName: 'Faisalabad, Punjab, Pakistan',
    latLng: [31.4504, 73.135],
  },
  {
    placeName: 'Peshawar, Khyber Pakhtunkhwa, Pakistan',
    latLng: [34.0151, 71.5249],
  },
  {
    placeName: 'Quetta, Balochistan, Pakistan',
    latLng: [30.1798, 66.975],
  },
  {
    placeName: 'Multan, Punjab, Pakistan',
    latLng: [30.1575, 71.5249],
  },
  {
    placeName: 'Gujranwala, Punjab, Pakistan',
    latLng: [32.1877, 74.1945],
  },
  {
    placeName: 'Sialkot, Punjab, Pakistan',
    latLng: [32.4945, 74.5229],
  },
]


export const VALET_CHARGE_PER_METER = 0.005

export const TAKE_COUNT = 12
