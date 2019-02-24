import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-search-recipe',
  templateUrl: './search-recipe.component.html',
  styleUrls: ['./search-recipe.component.css']
})
export class SearchRecipeComponent implements OnInit {
  @ViewChild('recipe') recipes: ElementRef;
  @ViewChild('place') places: ElementRef;
  recipeValue: any;
  placeValue: any;
  venueList = [];
  recipeList = [];

  currentLat: any;
  currentLong: any;
  geolocationPosition: any;

  constructor(private _http: HttpClient) {
  }

  ngOnInit() {

    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.geolocationPosition = position;
        this.currentLat= position.coords.latitude;
        this.currentLong= position.coords.longitude;
      })
  }

  getVenues() {
      this._http.get("https://api.foursquare.com/v2/venues/search" +
        "?client_id=5V3EB40GUE0MGCQOIFX0N3AMILG5GBN3GXLOJHA1W2YIXXGC" +
        '&client_secret=XQT3PU0IMBBYHLA0QTSIKC5THVCFEZQVOIZXD1YEXIQ1GLVX' +
        "&v=20160215&limit=5" +
        "&ll=" + this.currentLat + ',' + this.currentLong +
        "&categoryId=4bf58dd8d48988d147941735")
        .subscribe((data: any) => {
            for (var i = 0; i < data.response.venues.length; i++) {
            this.venueList[i] = {
              'name': data.response.venues[i].name,
              'id': data.response.venues[i].id,
              'location': data.response.venues[i].location
            };
              console.log(this.venueList[i]);

            }

        });
  }
}
