import { Request, Response } from 'express';

export const home = (req: Request, res: Response) => {
  res.send('Page Home');
};

export const dogs = (req: Request, res: Response) => {
  res.send('Page Dogs');
};

export const cats = (req: Request, res: Response) => {
  res.send('Page cats');
};

export const fishes = (req: Request, res: Response) => {
  res.send('Page fishes');
};
