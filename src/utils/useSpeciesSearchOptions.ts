import { QueryStatus, useQuery } from '@tanstack/react-query';
import fetchSpeciesSearchOptions from './fetchSpeciesSeachOptions';
import { SpeciesSelectionResponse } from './interface';

export default function useSpeciesSearchOptions(species: string): [SpeciesSelectionResponse | {}, string] {
  const results = useQuery(["speciesSearchOptions", species], fetchSpeciesSearchOptions)

  return [results.data ?? {}, results.status] as [string[], QueryStatus];
}
