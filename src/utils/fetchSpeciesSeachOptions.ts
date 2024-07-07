import { get } from "./adapter";
import { QueryFunction } from "@tanstack/react-query";
import { SpeciesSelectionResponse } from './interface'

const fetchSpeciesSearchOptions: QueryFunction<SpeciesSelectionResponse, ["speciesSearchOptions", string]> = async ({
    queryKey,
}) => {
    const species = queryKey[1];

    if (!species) return {}

    const apiRes = await fetch(`https://api-staging.adoptapet.com/search/search_form?key=${process.env.REACT_APP_API_KEY}&v=3&output=json&species=${species}`);

    if (!apiRes.ok) {
        throw new Error(`details/${species} fetch not ok`);
    }

    return apiRes.json();
};

export default fetchSpeciesSearchOptions;