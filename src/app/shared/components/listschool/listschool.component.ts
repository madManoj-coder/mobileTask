import { Component, OnInit } from '@angular/core';
import { SchoolService } from '../../services/school.service';

@Component({
  selector: 'app-listschool',
  templateUrl: './listschool.component.html',
  styleUrls: ['./listschool.component.scss']
})
export class ListschoolComponent implements OnInit {
schoole: any[] = [];
selectedSchooole : any;
  constructor(private schooleService:SchoolService) { }

  ngOnInit(): void {

    this.schooleService.getSchools().subscribe(data =>{
      this.schoole = data
    })
  }

  onselectschoole(school : any) : void{
      this.selectedSchooole= school
  }

}
