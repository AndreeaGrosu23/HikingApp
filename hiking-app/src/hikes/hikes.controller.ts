import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { HikesService } from './hikes.service';

@Controller('hikes')
export class HikesController {
  constructor(private readonly hikesService: HikesService) {}

  @Post()
  async addHike(
    @Body('title') hikeTitle: string,
    @Body('description') hikeDescription: string,
    @Body('difficulty') hikeDifficulty: string,
    @Body('distance') hikeDistance: number,
    @Body('elevation_gain') hikeElevationGain: number,
    @Body('trail_type') hikeTrailType: string,
    @Body('image') hikeImage: string,
  ) {
    const generatedId = await this.hikesService.insertHike(
      hikeTitle,
      hikeDescription,
      hikeDifficulty,
      hikeDistance,
      hikeElevationGain,
      hikeTrailType,
      hikeImage,
    );
    return { id: generatedId };
  }

  @Get()
  async getAllHikes() {
    const hikes = await this.hikesService.getHikes();
    return hikes;
  }

  @Get(':id')
  getHike(@Param('id') hikeId: string) {
    return this.hikesService.getSingleHike(hikeId);
  }

  @Patch(':id')
  async updateHike(
    @Param('id') hikeId: string,
    @Body('title') title: string,
    @Body('description') description: string,
    @Body('difficulty') difficulty: string,
    @Body('distance') distance: number,
    @Body('elevation_gain') elevation_gain: number,
    @Body('trail_type') trail_type: string,
    @Body('image') image: string,
  ) {
    await this.hikesService.updateHike(
      hikeId,
      title,
      description,
      difficulty,
      distance,
      elevation_gain,
      trail_type,
      image,
    );
    return null;
  }

  @Delete(':id')
  async deleteHike(@Param('id') hikeId: string) {
    await this.hikesService.deleteHike(hikeId);
    return null;
  }
}
