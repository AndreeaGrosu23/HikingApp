import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Hike } from './hike.model';

@Injectable()
export class HikesService {
  constructor(@InjectModel('hikes') private readonly hikeModel: Model<Hike>) {}

  async insertHike(
    title: string,
    description: string,
    difficulty: string,
    distance: number,
    elevation_gain: number,
    trail_type: string,
    image: string,
  ) {
    const newHike = new this.hikeModel({
      title: title,
      description: description,
      difficulty: difficulty,
      distance: distance,
      elevation_gain: elevation_gain,
      trail_type: trail_type,
      image: image,
    });

    const result = await newHike.save();
    return result.id as string;
  }

  async getHikes() {
    const hikes = await this.hikeModel.find().exec();
    return hikes.map((hk) => ({
      id: hk.id,
      title: hk.title,
      description: hk.description,
      difficulty: hk.difficulty,
      distance: hk.distance,
      elevation_gain: hk.elevation_gain,
      trail_type: hk.trail_type,
      image: hk.image,
    }));
  }

  async getSingleHike(hikeId: string) {
    const hike = await this.findHike(hikeId);
    return {
      id: hike.id,
      title: hike.title,
      description: hike.description,
      difficulty: hike.difficulty,
      distance: hike.distance,
      elevation_gain: hike.elevation_gain,
      trail_type: hike.trail_type,
      image: hike.image,
    };
  }

  async updateHike(
    hikeId: string,
    title: string,
    description: string,
    difficulty: string,
    distance: number,
    elevation_gain: number,
    trail_type: string,
    image: string,
  ) {
    const updatedHike = await this.findHike(hikeId);
    if (title) {
      updatedHike.title = title;
    }
    if (description) {
      updatedHike.description = description;
    }
    if (difficulty) {
      updatedHike.difficulty = difficulty;
    }
    if (distance) {
      updatedHike.distance = distance;
    }
    if (elevation_gain) {
      updatedHike.elevation_gain = elevation_gain;
    }
    if (trail_type) {
      updatedHike.trail_type = trail_type;
    }
    if (image) {
      updatedHike.image = image;
    }
    updatedHike.save();
  }

  async deleteHike(hikeId: string) {
    let result;
    try {
      result = await this.hikeModel.deleteOne({ _id: hikeId }).exec();
    } catch (error) {
      throw new NotFoundException('Could not find hike');
    }
    if (result.n === 0) {
      throw new NotFoundException('Could not find hike');
    }
  }

  private async findHike(id: string): Promise<Hike> {
    let hike;
    try {
      hike = await this.hikeModel.findById(id).exec();
    } catch (error) {
      throw new NotFoundException('Could not find hike');
    }
    if (!hike) {
      throw new NotFoundException('Could not find hike');
    }
    return hike;
  }
}
