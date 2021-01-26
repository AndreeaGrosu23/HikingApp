import { Injectable, NotFoundException } from '@nestjs/common';

import { Hike } from './hike.model';

@Injectable()
export class HikesService {
  private hikes: Hike[] = [];

  insertHike(
    title: string,
    description: string,
    difficulty: string,
    distance: number,
    elevation_gain: number,
    trail_type: string,
    image: string,
  ) {
    const hikeId = Math.random().toString();

    const newHike = new Hike(
      hikeId,
      title,
      description,
      difficulty,
      distance,
      elevation_gain,
      trail_type,
      image,
    );

    this.hikes.push(newHike);

    return hikeId;
  }

  getHikes() {
    return [...this.hikes];
  }

  getSingleHike(hikeId: string) {
    const hike = this.findHike(hikeId)[0];
    return { ...hike };
  }

  updateHike(
    hikeId: string,
    title: string,
    description: string,
    difficulty: string,
    distance: number,
    elevation_gain: number,
    trail_type: string,
    image: string,
  ) {
    const [hike, index] = this.findHike(hikeId);
    const updatedHike = { ...hike };
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
    this.hikes[index] = updatedHike;
  }

  deleteHike(hikeId: string) {
    const index = this.findHike(hikeId)[1];
    this.hikes.splice(index, 1);
  }

  private findHike(id: string): [Hike, number] {
    const hikeIndex = this.hikes.findIndex((hike) => hike.id === id);
    const hike = this.hikes[hikeIndex];
    if (!hike) {
      throw new NotFoundException('Could not find hike');
    }
    return [hike, hikeIndex];
  }
}
