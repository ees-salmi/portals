export const checkProductAvailablity = (product) => {
    if(product == null){
      const newProduct = { title: 'product test',
       name: 'test ',
       description: 'a new product descpription',
       price: 23, quantity: 45,
       iamge: '../assets/img_avatar.png'
      };
      product = newProduct;
      return newProduct;
    }
    else return product;
  }

  
export const getShortDescription = (description, end) => {
    const shortDescription = description.substr(0,end)+"..." ;
    return shortDescription;
  }

