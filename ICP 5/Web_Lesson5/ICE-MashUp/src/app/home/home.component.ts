import {Component, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {text} from '@angular/core/src/render3';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  translatedText = '';
  textToTranslate = '';
  constructor(private _http: HttpClient) {
  }

  ngOnInit() {
  }

  translateStuff(form: NgForm) {

    this._http.get('https://translate.yandex.net/api/v1.5/tr.json/translate' +
    '?key=trnsl.1.1.20190223T204213Z.5a7dd18fcc65c5cb.bc6e6417bde55630139877e6c419ffb6a4cf64b0' +
    '&text=' + this.textToTranslate +
      '&lang=nl').subscribe((data: any ) => {this.translatedText = data.text[0]});

  }
}
