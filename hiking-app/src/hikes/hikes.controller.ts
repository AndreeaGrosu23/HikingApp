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
  addHike(
    @Body('title') hikeTitle: string,
    @Body('description') hikeDescription: string,
    @Body('difficulty') hikeDifficulty: string,
    @Body('distance') hikeDistance: number,
    @Body('elevation_gain') hikeElevationGain: number,
    @Body('trail_type') hikeTrailType: string,
    @Body('image') hikeImage: string,
  ) {
    const generatedId = this.hikesService.insertHike(
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
  getAllHikes() {
    return this.hikesService.getHikes();
  }

  @Get(':id')
  getHike(@Param('id') hikeId: string) {
    return this.hikesService.getSingleHike(hikeId);
  }

  @Patch(':id')
  updateHike(
    @Param('id') hikeId: string,
    @Body('title') title: string,
    @Body('description') description: string,
    @Body('difficulty') difficulty: string,
    @Body('distance') distance: number,
    @Body('elevation_gain') elevation_gain: number,
    @Body('trail_type') trail_type: string,
    @Body('image') image: string,
  ) {
    this.hikesService.updateHike(
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
  deleteHike(@Param('id') hikeId: string) {
    this.hikesService.deleteHike(hikeId);
    return null;
  }
}
