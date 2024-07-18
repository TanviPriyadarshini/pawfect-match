import { QueryFunction } from "@tanstack/react-query";
import { IndividualPetDetail } from "./interface";

const fetchPetDetail: QueryFunction<IndividualPetDetail, ["details", string]> = async ({
    queryKey
}): Promise<IndividualPetDetail> => {
    const id = queryKey[1];

    const apiRes = await fetch(`https://api-staging.adoptapet.com/search/limited_pet_details?key=hg4nsv85lppeoqqixy3tnlt3k8lj6o0c&v=3&output=json&pet_id=${id}`)

    if (!apiRes.ok) {
        throw new Error(`details/${id} fetch not ok`);
    }

    return apiRes.json();
};

export default fetchPetDetail;