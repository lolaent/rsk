declare module 'loo-api';

export interface Location {
  lat: number;
  lng: number;
}

export interface Loo {
  id?: string;
  name: string;
}

export interface LooDetails extends Loo {
  location: Location;
  babyChange: boolean;
}

export async function fetchLoos(): Promise<Loo[]>;

export async function fetchLoo(id: string): Promise<LooDetails>;

export async function addLoo(details: LooDetails): Promise<Loo>;

export const fixtures: Loo[];