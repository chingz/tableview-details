import Car from '@client/types/Car';
import { ActionTypes, Actions } from '@client/store/cars/actions';

interface ICarState {
  list: Car[],
  byIds: Record<string, Car>,
}

const defaultState: ICarState = {
  list: [],
  byIds: {}
}

export default (state: ICarState = defaultState, action: Actions) => {
  switch(action.type) {
    case ActionTypes.FETCH_CARS_SUCCESS:
      return { ...state, list: action.cars };
    case ActionTypes.FETCH_CAR_DETAIL_SUCCESS:
      return { ...state, byIds: { ...state.byIds, [action.car.id]: action.car } };
    default: return state;
  }
}
