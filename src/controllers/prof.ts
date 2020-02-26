import { RequestHandler } from 'express';
import { Prof } from '../models/prof';

const ProfData: Prof[] = [];

export const createProf: RequestHandler = (req, res, next) => {
  // const text = (req.body as {text:string}).text;
  // const newProf = new Prof(Math.random().toString(), text);

  // ProfData.push(newProf);

  // res.status(201).json({message: "Prof created", id: newProf.id});
};


export const getProfs: RequestHandler = (req, res, next) => {
  res.status(200).json({Profs: ProfData});
}

export const updateProf: RequestHandler = (req, res, next) => {
  const id = req.params.id;
  const newText =(req.body as { text: string}).text;
  // const updatedData = ProfData.map(Prof => {
  //   if (Prof.id !== id) return Prof;
  //   return new Prof(id, newText);
  // });
  // res.status(200).json(updatedData.find(Prof => Prof.id === id));
}

export const deleteProf: RequestHandler = (req, res, next) => {
  // const id = req.params.id;
  // const updatedData = ProfData.filter(Prof => Prof.id !== id);
  // res.status(200).json(updatedData);
}