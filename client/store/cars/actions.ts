import carsService from '@client/services/cars';
import Car from '@client/types/Car';

export enum ActionTypes {
  'FETCH_CARS' = '[cars] fetch',
  'FETCH_CARS_SUCCESS' = '[cars] fetch success',
  'FETCH_CARS_FAILED' = '[cars] fetch failed',

  'FETCH_CAR_DETAIL' = '[cars] fetch detail',
  'FETCH_CAR_DETAIL_SUCCESS' = '[cars] fetch detail success',
  'FETCH_CAR_DETAIL_FAILED' = '[cars] fetch detail failed',
}

export interface FetchCarsAction {
  type: ActionTypes.FETCH_CARS
}

export interface FetchCarsSuccessAction {
  type: ActionTypes.FETCH_CARS_SUCCESS
  cars: Car[]
}

export interface FetchCarsFailedAction {
  type: ActionTypes.FETCH_CARS_FAILED
}

export interface FetchCarDetailAction {
  type: ActionTypes.FETCH_CAR_DETAIL
}

export interface FetchCarDetailSuccessAction {
  type: ActionTypes.FETCH_CAR_DETAIL_SUCCESS
  car: Car
}

export interface FetchCarDetailFailedAction {
  type: ActionTypes.FETCH_CAR_DETAIL_FAILED
}

export const fetchCarList = () => (dispatch: Function) => {
  dispatch({ type: ActionTypes.FETCH_CARS });
  carsService.list()
    .then((cars: Car[]) => dispatch({ type: ActionTypes.FETCH_CARS_SUCCESS, cars }))
    .catch(error => dispatch({ type: ActionTypes.FETCH_CARS_FAILED, error }))
}

export const getCarDetails = (id: string) => (dispatch: Function) => {
  dispatch({ type: ActionTypes.FETCH_CAR_DETAIL });
  carsService.byId(id)
    .then((car: Car) => dispatch({ type: ActionTypes.FETCH_CAR_DETAIL_SUCCESS, car }))
    .catch(error => dispatch({ type: ActionTypes.FETCH_CAR_DETAIL_FAILED, error }))
}

export type Actions =
    FetchCarsAction
  | FetchCarsSuccessAction
  | FetchCarsFailedAction

  | FetchCarDetailAction
  | FetchCarDetailSuccessAction
  | FetchCarDetailFailedAction
;
