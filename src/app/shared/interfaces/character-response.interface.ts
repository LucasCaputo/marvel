export interface CharacterResponseData {
    data: CharacterResponse;
}

export interface CharacterResponse {
    count: number;
    limit: number;
    offset: number;
    results: Results[];
    total: number;
}

interface Results {
    id: number,
    name: string;
    series: Series;
    stories: Stories;
    thumbnail: Thumbnail;
}

interface Series {
    items: Items[];
}

interface Stories {
    items: Items[];
}

interface Items {
    name: string
}

interface Thumbnail {
    extension: string;
    path: string;
}
