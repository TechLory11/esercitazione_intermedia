import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
interface drinksRisposta {
  drinks: any[];
}
@Component({
  selector: "app-elenco",
  templateUrl: "./elenco-drink.component.html",
  styleUrls: ["./elenco-drink.component.css"],
})
export class ElencoDrinkComponent implements OnInit {
  drinks: any[] = [];
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    {
      this.fetchDrinks();
    }
  }
  fetchDrinks(): void {
    this.http
      .get<drinksRisposta>(
        "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a"
      )
      .subscribe((response) => {
        this.drinks = response.drinks;
      });
  }
}
