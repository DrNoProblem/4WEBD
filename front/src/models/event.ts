export default class Event {

    // 1. Typage des propiétés d'un pokémon.
    classe: string;
    picture: string;
    color: Array<string>;
    object: Array<string>;
    favorite: number;
    creator: string;
    _id: string;

    // 2. Définition des valeurs par défaut des propriétés d'un pokémon.
    constructor(
        classe: string = 'name',
        picture: string = 'http://...',
        color: Array<string> = ['color'],
        object: Array<string> = ['object'],
        favorite: 0,
        creator: string = 'maxleroux',
        _id: string = ""
    ) {
        // 3. Initialisation des propiétés d'un pokémons.
        this.classe = classe;
        this.picture = picture;
        this.color = color;
        this.object = object;
        this.favorite = favorite
        this.creator = creator
        this._id = _id
    }
}