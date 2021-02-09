import { HikesService } from './hikes.service';
export declare class HikesController {
    private readonly hikesService;
    constructor(hikesService: HikesService);
    addHike(hikeTitle: string, hikeDescription: string, hikeDifficulty: string, hikeDistance: number, hikeElevationGain: number, hikeTrailType: string, hikeImage: string): Promise<{
        id: string;
    }>;
    getAllHikes(): Promise<{
        id: string;
        title: string;
        description: string;
        difficulty: string;
        distance: number;
        elevation_gain: number;
        trail_type: string;
        image: string;
    }[]>;
    getHike(hikeId: string): Promise<{
        id: string;
        title: string;
        description: string;
        difficulty: string;
        distance: number;
        elevation_gain: number;
        trail_type: string;
        image: string;
    }>;
    updateHike(hikeId: string, title: string, description: string, difficulty: string, distance: number, elevation_gain: number, trail_type: string, image: string): Promise<any>;
    deleteHike(hikeId: string): Promise<any>;
}
