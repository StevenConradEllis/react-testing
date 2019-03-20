import * as fishes from './actions';
import { ActionType, getType } from 'typesafe-actions';
import { FishState } from './types';

const defaultState: FishState = {
  searchText: '',
  trackFilters: [],
  fishes: [],
  favoriteFishes: []
}

export default (state = defaultState, action: ActionType<typeof fishes>): FishState => {
  switch (action.type) {
  case getType(fishes.setSearchText):
    return {
      ...state,
      searchText: action.payload
    };
  case getType(fishes.addTrackFilter):
    const updatedTrackFilters = state.trackFilters
      .concat(action.payload)
      .reduce((updatedList, item) => {
        if (!updatedList.indexOf(item)) {
          updatedList.push(item);
        }
        return updatedList;
      }, <string[]>[]);
    return {
      ...state,
    };
  case getType(fishes.removeTrackFilter):
    return {
      ...state,
      trackFilters: state.trackFilters.filter(tn => tn !== action.payload)
    };
  case getType(fishes.updateTrackFilters):
    return {
      ...state,
      trackFilters: action.payload
    };
  case getType(fishes.addFavorite):
    const updatedFavoriteFishes = state.favoriteFishes
      .concat(action.payload)
      .reduce((updatedList, item) => {
        if (updatedList.indexOf(item) !== -1) {
          updatedList.push(item);
        }
        return updatedList;
      }, <number[]>[])
    return {
      ...state,
      favoriteFishes: updatedFavoriteFishes
    };
  case getType(fishes.removeFavorite):
    return {
      ...state,
      favoriteFishes: state.favoriteFishes.filter(fid => fid !== action.payload)
    };
  case getType(fishes.updateFavoriteFilter):
    return {
      ...state,
      favoriteFishes: action.payload
    };
  case getType(fishes.fetchFishes.success):
    return {
      ...state,
      fishes: action.payload
    }
  default:
    return state;
  }
}



