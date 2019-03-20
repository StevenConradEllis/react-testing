import { FishState, Fish } from './types';

export function allTracks(state: FishState) {
  return state.fishes
    .reduce((all, fish) => all.concat(fish.tracks), <string[]>[])
    .filter((trackName, index, array) => array.indexOf(trackName) === index)
    .sort();
}

export function allFiltered(state: FishState) {
  let searchFishes = searchText(state.searchText);
  let searchTracks = filterByTrack(state.trackFilters);

  return state.fishes
    .filter(searchFishes)
    .filter(searchTracks);
}

export function favoritesFiltered(state: FishState) {
  let searchFishes = searchText(state.searchText);
  let searchTracks = filterByTrack(state.trackFilters);

  function isFavorite(fish: Fish) {
    return state.favoriteFishes.indexOf(fish.id) !== -1;
  }

  return state.fishes
    .filter(isFavorite)
    .filter(searchFishes)
    .filter(searchTracks);
}

function searchText(searchText: string) {
  if (!searchText) {
    return () => true;
  }
  const lowerSearchText = searchText.toLowerCase();
  return (fish: Fish) => fish.name.toLowerCase().indexOf(lowerSearchText) !== -1;
}

function filterByTrack(trackFilters: string[]) {
  if (trackFilters.length === 0) {
    return () => true;
  }
  return (fish: Fish) => (
    fish.tracks.some(fishTrackName => (
      trackFilters.some(trackName => trackName === fishTrackName)
    ))
  );
}
