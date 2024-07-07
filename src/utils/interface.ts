export interface Species {
    species: "cat" | "dog"
}

export interface SpeciesSelectionResponse {
    status: string;
    age: SubObject[];
    sex: SubObject[];
    hair: SubObject[];
    geo_range: SubObject[];
    breed_id: SubObject[];
    color_id: SubObject[];
}

export interface SubObject {
    label: string;
    value: string;
}

export interface Pet {
    sex: string;
    age: string;
    size: string;
    order: number;
    pet_id: string;
    pet_name: string;
    primary_breed: string;
    secondary_breed: string;
    addr_city: string;
    addr_state_code: string;
    details_url: string;
    results_photo_url: string;
    results_photo_width: number;
    results_photo_height: number;
    large_results_photo_url: string;
    large_results_photo_width: number;
    large_results_photo_height: number;
}

export interface IndividualPetDetail {
    status: string;
    pet: IndividualPet;
}

export interface IndividualPet {
    primary_breed: string;
    species: string;
    act_quickly: number;
    addr_city: string;
    addr_state_code: string;
    age: string;
    automap: number;
    color: string;
    hair_length: null;
    pet_id: number;
    pet_name: string;
    pet_code: string;
    last_modified: Date;
    purebred: number;
    secondary_breed: null;
    sex: string;
    size: string;
    special_needs: null;
    images: Image[];
    video_url: null;
    pet_details_url: string;
    status: string;
}

export interface Image {
    thumbnail_url: string;
    thumbnail_width: number;
    thumbnail_height: number;
    original_url: string;
    original_width: number;
    original_height: number;
}