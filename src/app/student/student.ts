import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-student',
  imports: [CommonModule],
  templateUrl: './student.html',
  styleUrl: './student.css',
})
export class Student {

  M_COLOR ="lightblue";
  F_COLOR ="pink";
  


  students: any[] =[
    {name: "Pippo ",city:"topolinia",gender:"m",present:true},
    {name: "Pluto ",city:"borra",gender:"m",present:true},
    {name: "Paolo ",city:"la rue",gender:"m",present:false},
    {name: "Pippa ",city:"manchester",gender:"f",present:true},
    {name: "Paperino ",city:"topolinia",gender:"m",present:true}
  ];
}
