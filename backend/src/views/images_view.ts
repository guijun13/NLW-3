import Image from '../models/Image';

export default{
  render(image: Image){
    return {
      id: image.id,
      // url: `http://localhost:3333/uploads/${image.path}`, // para web
      url: `http://192.168.0.63:3333/uploads/${image.path}`, // para mobile
    };
  },

  renderMany(images: Image[]){
    return images.map(image => this.render(image));
  }
};