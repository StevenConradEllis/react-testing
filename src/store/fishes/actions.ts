import { createAction, createAsyncAction } from 'typesafe-actions';
import { Fish } from './types';

export const fetchFishes = createAsyncAction(
  'fishes/FETCH_REQUEST',
  'fishes/FETCH_SUCCESS',
  'fishes/FETCH_FAILURE'
)<void, Fish[], Error>();

export const updateFishes = createAction('fishes/UPDATE_FISHES', resolve =>
  () => resolve()
);

export const setSearchText = createAction('fishes/SET_SEARCH_TEXT', resolve =>
  (searchText: string) => resolve(searchText)
);

export const addTrackFilter = createAction('fishes/ADD_TRACK_FILTER', resolve =>
  (trackName: string) => resolve(trackName)
);

export const removeTrackFilter = createAction('fishes/REMOVE_TRACK_FILTER', resolve =>
  (trackName: string) => resolve(trackName)
);

export const updateTrackFilters = createAction('fishes/UPDATE_TRACK_FILTERS', resolve =>
  (trackNames: string[]) => resolve(trackNames)
);

export const addFavorite = createAction('fishes/ADD_FAVORITE', resolve =>
  (fishId: number) => resolve(fishId)
);

export const removeFavorite = createAction('fishes/REMOVE_FAVORITE', resolve =>
  (fishId: number) => resolve(fishId)
);

export const updateFavoriteFilter = createAction('fishes/UPDATE_FAVORITE_FILTER', resolve =>
  (fishIds: number[]) => resolve(fishIds)
);
