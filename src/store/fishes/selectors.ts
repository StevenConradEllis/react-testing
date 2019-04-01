import { FishState, Fish } from './types';

export function allTags(state: FishState) {
  return state.fishes
    .reduce((all, fish) => all.concat(fish.tags), <string[]>[])
    .filter((trackName, index, array) => array.indexOf(trackName) === index)
    .sort();
}

export function allFiltered(state: FishState) {
  let searchFishes = searchText(state.searchText);
  let searchTags = filterByTrack(state.trackFilters);

  return state.fishes
    .filter(searchFishes)
    .filter(searchTags);
}

export function favoritesFiltered(state: FishState) {
  let searchFishes = searchText(state.searchText);
  let searchTags = filterByTrack(state.trackFilters);

  function isFavorite(fish: Fish) {
    return state.favoriteFishes.indexOf(fish.id) !== -1;
  }

  return state.fishes
    .filter(isFavorite)
    .filter(searchFishes)
    .filter(searchTags);
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
    fish.tags.some(fishTrackName => (
      trackFilters.some(trackName => trackName === fishTrackName)
    ))
  );
}
