import { Component, OnInit, Input} from '@angular/core';
import { Employee } from '../models/employee-model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-display-employee',
  templateUrl: './display-employee.component.html',
  styleUrls: ['./display-employee.component.less']
})
export class DisplayEmployeeComponent implements OnInit {

  @Input() employee: Employee;
  private selectedEmpId: number;

  constructor(private _route: ActivatedRoute) { }

  ngOnInit() {
    this.selectedEmpId = +this._route.snapshot.paramMap.get('id');
  }

}
