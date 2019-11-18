import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { PageHeader, Empty, Descriptions } from 'antd';

import Car from '@client/types/Car';
import { getCarDetails } from '@client/store/cars/actions';

type Props = {
  id: string,
  car: Car,
  getCarDetails(id: string): void,
}

const CarDetail = (props: Props) => {
  useEffect(() => {
    props.getCarDetails(props.id);
  }, []);
  
  if (!props.car) return <Empty />
  return (
    <PageHeader
      ghost={false}
      onBack={() => window.history.back()}
      title={props.car.teaser.title}
      subTitle={props.car.pricing.price + ' €'}>
      <Descriptions column={3}>
        <Descriptions.Item label="Make">{props.car.car.make}</Descriptions.Item>
        <Descriptions.Item label="Model">{props.car.car.model}</Descriptions.Item>
        <Descriptions.Item label="Version">{props.car.car.version}</Descriptions.Item>
        <Descriptions.Item label="Gear">{props.car.car.gearingType}</Descriptions.Item>
        <Descriptions.Item label="Fuel">{props.car.car.fueltype}</Descriptions.Item>
        <Descriptions.Item label="Emission Label">{props.car.car.environment.emissionLabel}</Descriptions.Item>
        <Descriptions.Item label="Emission Class">{props.car.car.environment.emissionClass}</Descriptions.Item>
        <Descriptions.Item label="Emission CO2">{props.car.car.environment.emissionCO2}</Descriptions.Item>
      </Descriptions>
    </PageHeader>
  );
}

const mapStateToProps = (state: any, ownProps: any) => {
  const paramsId = ownProps.match.params.id;
  return {
    id: paramsId,
    car: state.cars.byIds[paramsId],
  }
}

export default connect(mapStateToProps, { getCarDetails })(CarDetail);
