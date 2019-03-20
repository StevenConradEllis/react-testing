export interface Fish {
    id: number,
    name: string,
    location: string,
    description: string,
    branchIds: number[],
    tracks: string[]
  }
  
  export interface FishState {
    searchText: string;
    trackFilters: string[];
    fishes: Fish[];
    favoriteFishes: number[];
  }
  
  export interface FishGroup {
    fishes: Fish[]
  }
  