import { Component, Input, OnInit } from '@angular/core';
import { SchoolService } from '../../services/school.service';

@Component({
  selector: 'app-school-detail',
  templateUrl: './school-detail.component.html',
  styleUrls: ['./school-detail.component.scss']
})
export class SchoolDetailComponent implements OnInit {
@Input() school:any;

satscores : any[] =[]
  constructor( private schooleServices : SchoolService) {

   }

  ngOnInit(): void {
      if (this.school){
        this.schooleServices.getSatScores(this.school.dbn).subscribe(data =>{
          this.satscores =data
        })
      }
  }


  

}
