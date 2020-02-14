//Actualizar modelo de anuncio aquí y en el backend

export default class Advert {
  _id;
  creationDate;
  userOwner;
  name;
  slugName;
  description;
  photo;
  type;
  price;
  tags;
  reserved;
  sold;
  // chat;

  constructor(value) {
    this._id = value._id;
    this.creationDate = value.creationDate;
    this.userOwner = value.userOwner;
    this.name = value.name;
    this.slugName = value.slugName;
    this.description = value.description;
    this.photo = value.photo;
    this.type = value.type;
    this.price = value.price;
    this.tags = value.tags;
    this.reserved = value.reserved;
    this.sold = value.sold;
    //this.chat = value.chat;
    

  }

}



