import React from 'react';
import { Link } from 'react-router-dom';
import { Tag } from 'antd';
import Car from '@client/types/Car';
import Equipments from '@client/pages/car-table/available-equipments';

export default [
  {
    title: 'Car',
    key: 'car',
    render: (_: string, record: Car) => (
      <Link to={`/cars/${record.id}`} className="ant-dropdown-button">
        <strong>{record.teaser.title}</strong>
      </Link>
    )
  },
  {
    title: 'Price',
    dataIndex: 'pricing.price',
    sorter: (a: Car, b: Car) => b.pricing.price - a.pricing.price,
    render: (price: Number) => (
      <strong className="ant-dropdown-button">{price} €</strong>
    )
  },
  {
    title: 'Delivery Time',
    dataIndex: 'estimatedDeliveryTime',
    render: (text: string) => <span className="ant-dropdown-button">{text}</span>
  },
  {
    title: 'Fuel',
    dataIndex: 'car.fueltype',
    filters: ['Benzin','Diesel','Elektrisch/Benzin','Elektrisch'].map(value => ({ text: value, value })),
    onFilter: (value: string, record: Car) => record.car.fueltype.includes(value),
  },
  {
    title: 'Gear',
    dataIndex: 'car.gearingType',
    filters: ['Automatik','Schaltgetriebe'].map(value => ({ text: value, value })),
    onFilter: (value: string, record: Car) => record.car.gearingType.includes(value),
  },  
  {
    title: 'Equipment',
    key: 'equipment',
    filters: Equipments.sort().map(value => ({ text: value, value })),
    onFilter: (value: string, record: Car) => record.car.equipmentDetails.some(eq => eq.name === value),
    render: (_: string, record: Car) => record.car.equipmentDetails
      .map((item, index) => <Tag key={index} color='blue'>{item.name}</Tag>)
  },
]
