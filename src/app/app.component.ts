import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { AnalysisComponent } from './analysis/analysis.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @ViewChild(AnalysisComponent) analysis;
  
  sentiment: string

  constructor() {}

  ngAfterChildInit() {
    this.sentiment = this.analysis.message;
    console.log(this.analysis.message);
  }

}
