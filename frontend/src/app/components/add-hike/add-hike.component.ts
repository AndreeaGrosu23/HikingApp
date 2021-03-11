import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HikesService } from 'src/app/services/hikes/hikes.service';

@Component({
  selector: 'app-add-hike',
  templateUrl: './add-hike.component.html',
  styleUrls: ['./add-hike.component.scss']
})
export class AddHikeComponent implements OnInit {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private hikeService: HikesService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form=this.formBuilder.group({
      id: [{value:null, disabled:true}],
      title: [null, [Validators.required]],
      description: [null, [Validators.required]],
      difficulty: [null, [Validators.required]],
      distance: [null, [Validators.required]],
      elevation_gain: [null, [Validators.required]],
      trail_type: [null, [Validators.required]],
      image: [null, [Validators.required]],
    })
  }

  post() {
    this.hikeService.post(this.form.getRawValue()).subscribe();
    this.router.navigate(['home']);
  }

}
