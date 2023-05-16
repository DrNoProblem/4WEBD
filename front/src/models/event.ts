export default class Event {

    // 1. Typage des propiétés d'un pokémon.
    name: string;
    picture: string;
    date: string;
    locality: string;
    cost: number;
    maxPlace: number;
    dispoPlace: number;
    usersReserve: Array<string>;
    _id: string;

    // 2. Définition des valeurs par défaut des propriétés d'un pokémon.
    constructor(
        name: string = '',
        picture: string = 'http://...',
        date: string = '',
        locality: string = '',
        cost: number = 0,
        maxPlace: number = 0,
        dispoPlace: number = 0,
        usersReserve: Array<string> = [''],
        _id: string = ""
    ) {
        // 3. Initialisation des propiétés d'un pokémons.
        this.name = name;
        this.picture = picture;
        this.date = date;
        this.locality = locality;
        this.cost = cost;
        this.maxPlace = maxPlace;
        this.dispoPlace = dispoPlace;
        this.usersReserve = usersReserve;
        this._id = _id;
    }
}