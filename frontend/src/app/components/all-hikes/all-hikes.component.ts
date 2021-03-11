import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Hike } from 'src/app/model/hike.interface';
import { HikesService } from 'src/app/services/hikes/hikes.service';

@Component({
  selector: 'app-all-hikes',
  templateUrl: './all-hikes.component.html',
  styleUrls: ['./all-hikes.component.scss']
})
export class AllHikesComponent implements OnInit {

  dataSource: [];

  constructor(private hikeService: HikesService) { }

  ngOnInit() {
    this.hikeService.getAllHikes().subscribe((data: [])=>{
      console.log(data);
      this.dataSource = data;
    }) 

  }

}
