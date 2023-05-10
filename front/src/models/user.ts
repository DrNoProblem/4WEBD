export default class User {

    // 1. Typage des propiétés d'un pokémon.
    pseudo: string;
    email: string;
    password: string;
    eventFavorite: Array<string>;
    eventOwner: Array<string>;
    role: string;
    _id: string;

    // 2. Définition des valeurs par défaut des propriétés d'un pokémon.
    constructor(
        pseudo: string = 'name',
        email: string = 'name',
        password: string = 'name',
        eventFavorite: Array<string> = ['_id'],
        eventOwner: Array<string> = ['_id'],
        role: string = 'user',
        _id: string = "",
    ) {
        // 3. Initialisation des propiétés d'un pokémons.
        this.pseudo = pseudo;
        this.email = email;
        this.password = password;
        this.eventFavorite = eventFavorite;
        this.eventOwner = eventOwner;
        this.role = role;
        this._id = _id;


    }
}