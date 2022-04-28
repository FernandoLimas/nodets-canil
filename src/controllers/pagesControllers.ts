import { Request, Response } from 'express';
import { createMenuObj } from '../helpers/createMenuObj';
import { Pet } from '../models/Pets';

 const home = (req: Request, res: Response) => {

  let list = Pet.getAll();

 res.render('pages/page', {

    menu: createMenuObj('all'),
    banner: {
      title: `Todos os animais`,
      background: `allanimals.jpg`,
    },
    list
  });
};

 const dogs = (req: Request, res: Response) => {

  let list = Pet.getFromType('dog');

 res.render('pages/dogs', {
  menu: createMenuObj('dog'),
    banner: {
      title: `Cachorros`,
      background: `banner_dog.jpg`,
    },
  list
  });
};

const cats = (req: Request, res: Response) => {
  let list = Pet.getFromType('cat');

 res.render('pages/cats', {
  menu: createMenuObj('cat'),
  banner: {
    title: `Gatos`,
    background: `banner_cat.jpg`,
  },
  list
});
};

const fishes = (req: Request, res: Response) => {
  let list = Pet.getFromType('fish');

  res.render('pages/fishes', {
    menu: {
      all: false,
      dog: false,
      cat: false,
      fish: true,
    },
    banner: {
      title: `Peixes`,
      background: `banner_fish.jpg`,
    },
    list
  });
};

export { 
  home,
  dogs,
  cats,
  fishes
};
