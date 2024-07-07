import { useQuery } from '@tanstack/react-query';
import fetchSpeciesSearchOptions from './fetchSpeciesSeachOptions';



export default function useSpeciesSearchOptions(species: string) {
  const results = useQuery(["speciesSearchOptions", species], fetchSpeciesSearchOptions)

  return [results.data ?? {}, results.status];
}
