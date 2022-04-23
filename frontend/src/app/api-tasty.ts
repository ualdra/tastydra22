export interface Recipes{
    count: Number;
    results: Recipe[];
}

export interface Recipe{
    id: number;
    thumbnail_url: string;
    name: string;
    tags: tags[];
    instructions: Instructions[];
    sections: Section[]
}

interface tags{
    id: Number;
    display_name: String;
    type: String;
    name: String;
}
interface Instructions{
    id: number;
    display_text: string;
    position: number;
}
interface Section{
    components: Component[]
}
interface Component{
    id: number;
    raw_text: string;
    ingredient: Ingredient;
}
interface Ingredient{
    id: number;
    display_singular: string;
}