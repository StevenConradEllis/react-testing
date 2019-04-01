export interface Fish {
    id: number,
    name: string,
    pic: string,
    description: string,
    branchIds: number[],
    tags: string[]
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
  