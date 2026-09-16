import { Component } from '@angular/core';

@Component({
  selector: 'app-student',
  imports: [],
  templateUrl: './student.html',
  styleUrl: './student.css',
})
export class Student {
  students: any[] =[
    {name: "Pippo ",city:"topolinia",gender:"m",present:"true"},
    {name: "Pluto ",city:"borra",gender:"m",present:"true"},
    {name: "Paolo ",city:"la rue",gender:"m",present:"true"},
    {name: "Pippa ",city:"manchester",gender:"f",present:"true"},
    {name: "Paperino ",city:"topolinia",gender:"m",present:"true"}
  ];
}
