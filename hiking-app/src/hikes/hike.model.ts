export class Hike {
  constructor(
    public id: string,
    public title: string,
    public description: string,
    public difficulty: string,
    public distance: number,
    public elevation_gain: number,
    public trail_type: string,
    public image: string,
  ) {}
}
