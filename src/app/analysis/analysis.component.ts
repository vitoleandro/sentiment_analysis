import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-analysis',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.scss']
})
export class AnalysisComponent implements OnInit {

  context;
  myArr:   Array<any>;
  loveArr:  Array<any> = ["ama","apaixonado", "adoro","quero", "ficar", "paixão", "paixao"];

  positiveWords = {
    "amor": 3,
    "amar": 3,
    "amado": 3,
    "paixao": 3,
    "apaixonado": 3,
    "maravilhoso": 5,
    "maravilhosamente": 5,
    "otimo": 4,
    "perfeito": 5,
    "perfeicao": 5
  }
  

  constructor() {
    
  }

  ngOnInit() { }

  teste(event) {
    let stringContext = event.target.value;
    let stringArr:      Array<string> = stringContext.split(" ");
    this.context      = event.target.value;
    this.myArr        = stringArr;

    this.ocorrencyTest(stringArr);
    
    if(this.ocorrency(stringArr) > 0) {
      this.context = "amor";
    } else {
      this.context = "não detectado";
    }
    
  }

  ocorrencyTest(arr) {
    for(let i in arr) {
      if(this.positiveWords[arr[i]]) {
        console.log('janderson acertou ! ' + arr[i]);
      } else {
        console.log('janderson errou ! ' + arr[i]);
      }
    }
  }

  ocorrency(arr) {
    let numOcorrency: number = 0;
    let libArr = this.loveArr;

    for(let i in arr) {
      if(libArr.includes(arr[i])) {
        numOcorrency +=1;
      }
    }
    console.log(numOcorrency);
    return numOcorrency;
  }

}
