export interface Recipes{
    count: Number;
    results: resultsRecipes[];
}

interface resultsRecipes{
    id: number;
    thumbnail_url: string;
    name: string;
    tags: tags;
}

interface tags{
    id: Number;
    display_name: String;
    type: String;
    name: String;
}