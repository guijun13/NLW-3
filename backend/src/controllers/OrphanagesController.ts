import { Request, response, Response } from 'express';
import { getRepository, Index } from 'typeorm';
import Orphanage from '../models/Orphanage';

export default {
  async index(req: Request, res: Response){ // Listar os orfanatos
    const orphanagesRepository = getRepository(Orphanage);

    const orphanages = await orphanagesRepository.find();

    return res.json(orphanages)
  },

  async create(req: Request, res: Response){ // Criar um orfanato
    const {
      name,
      latitude,
      longitude,
      about,
      instructions,
      opening_hours,
      open_on_weekends,
    } = req.body;
  
    const orphanagesRepository = getRepository(Orphanage);
  
    const orphanage = orphanagesRepository.create({
      name,
      latitude,
      longitude,
      about,
      instructions,
      opening_hours,
      open_on_weekends,
    });
  
    await orphanagesRepository.save(orphanage);
  
    return res.status(201).json(orphanage);
  }
};