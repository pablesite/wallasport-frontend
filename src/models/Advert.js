//Actualizar modelo de anuncio aquí y en el backend

export default class Advert {
  description;
  name;
  photo;
  price;
  tags;  
  type;
  _id
  

  constructor(value) {
    //this.description = value.description;
    this.name = value.nombre;
    this.photo = value.foto;
    this.price = value.precio;
    this.tags = value.tags;
    this.type = value.venta;
    this._id = value._id;

  }

}



