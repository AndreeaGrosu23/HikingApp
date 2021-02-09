import { Model } from 'mongoose';
import { Hike } from './hike.model';
export declare class HikesService {
    private readonly hikeModel;
    constructor(hikeModel: Model<Hike>);
    insertHike(title: string, description: string, difficulty: string, distance: number, elevation_gain: number, trail_type: string, image: string): Promise<string>;
    getHikes(): Promise<{
        id: string;
        title: string;
        description: string;
        difficulty: string;
        distance: number;
        elevation_gain: number;
        trail_type: string;
        image: string;
    }[]>;
    getSingleHike(hikeId: string): Promise<{
        id: string;
        title: string;
        description: string;
        difficulty: string;
        distance: number;
        elevation_gain: number;
        trail_type: string;
        image: string;
    }>;
    updateHike(hikeId: string, title: string, description: string, difficulty: string, distance: number, elevation_gain: number, trail_type: string, image: string): Promise<void>;
    deleteHike(hikeId: string): Promise<void>;
    private findHike;
}
