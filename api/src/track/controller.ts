import { Request, Response, NextFunction } from 'express';
import * as fs from 'fs';
const getStat = require('util').promisify(fs.stat);

import { Track } from './track';

class TrackController {
  async save(req: Request, res: Response, next: NextFunction) {
    try {
      const track = new Track({
        name: req.body.name,
        path: `${process.env.OWN_URL}${req.file.path}`,
      })
      const result = await track.save();

      return res.status(200).send(result);
    } catch (err) {
      return res.status(500).send(err);
    }
  }

  async saveImage(req: Request, res: Response, next: NextFunction) {
    try {
      const { trackId } = req.params;
      const track = await Track.updateOne({ _id: trackId }, {
        $set: {
          img: `${process.env.OWN_URL}${req.file.path}`,
        }
      });

      if (!track) {
        return res.status(404).send();
      }

      return res.status(200).send();
    } catch (err) {
      return res.status(500).send(err);
    }
  }

  async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const tracks = await Track
        .find()
        .lean()
        .exec();

      return res.status(200).send(tracks);
    } catch (err) {
      return res.status(500).send(err);
    }
  }

  async updateTrackName(req: Request, res: Response, next: NextFunction) {
    try {
      const { trackId } = req.params;
      const track = await Track.updateOne({ _id: trackId }, {
        $set: {
          name: req.body.name,
        }
      });

      if (!track) {
        return res.status(404).send();
      }

      return res.status(200).send();
    } catch (err) {
      return res.status(500).send(err);
    }
  }
}

export default new TrackController();