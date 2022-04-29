import { Request, Response } from 'express';
import { Pet } from '../models/Pets';

export const search = (req: Request, res: Response) => {

  // transforma var query em string
  let query: string = req.query.q as string;

  let list =  Pet.getFromName(query);

  res.render('pages/page', {
    list,
    query
  });
};