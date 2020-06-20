import { Component, OnInit } from '@angular/core';
import { Student } from "../../shared/interface/student.interface";

@Component({
  selector: 'app-fundaments',
  templateUrl: './fundaments.component.html',
  styleUrls: ['./fundaments.component.scss'],
})
export class FundamentsComponent {
  name: string;
  lastName: string;
  age: number;
  dni: number;
  cellPhone: number;
  isAdmin: boolean;
  students: Student[] = [];

  constructor() {}

  createStudent() {
    this.students.push({
      name: this.name,
      lastName: this.lastName,
      age: this.age,
    }
    );
    this.name = '';
    this.lastName = '';
    this.age = 0;
  }

}
