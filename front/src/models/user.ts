export default class User {

    // 1. Typage des propiétés d'un pokémon.
  name: string;
  email: string;
  password: string;
  role: string;
  payement: Array<string>;
  reserv: Array<any>;
  eventOwner: Array<string>;
  _id: string;

    // 2. Définition des valeurs par défaut des propriétés d'un pokémon.
    constructor(
        name: string = '',
        email: string = '',
        password: string = '',
        role: string = '',
        payement: Array<string> = [''],
        reserv: Array<any> = [[]],
        eventOwner: Array<string> = [''],
        _id: string = "",
    ) {
        // 3. Initialisation des propiétés d'un pokémons.
        this.name = name;
        this.email = email;
        this.password = password;
        this.role = role;
        this.payement = payement;
        this.reserv = reserv;
        this.eventOwner = eventOwner;
        this._id = _id;


    }
}