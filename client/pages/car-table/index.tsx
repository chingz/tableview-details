import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Table, Layout } from 'antd';

import columns from '@client/pages/car-table/columns.config';
import Car from '@client/types/Car';
import { fetchCarList } from '@client/store/cars/actions';

type Props = {
  cars: Car[],
  fetchCarList(): void,
};

const CarTable = (props: Props) => {
  useEffect(() => {
    props.fetchCarList();
  }, [])

  return (
    <Layout>
      <Layout.Content>
        <Table dataSource={props.cars} columns={columns} rowKey="id" />
      </Layout.Content>
    </Layout>
  );
}

const mapStateToProps = (state: any) => {
  return {
    cars: state.cars.list
  }
}

export default connect(mapStateToProps, { fetchCarList })(CarTable);
