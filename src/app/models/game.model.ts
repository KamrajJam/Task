
interface Items {
    name:string;
    timings:String[]
}

interface Country {
    name:string;
    icon:string;
    items:Items[]
}
export interface Game {
    name:string;
    icon:string;
    countries:Country[]
}