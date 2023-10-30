import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute } from "@angular/router";

interface drinksRisposta {
  drinks: any[];
}
@Component({
  selector: 'app-dettaglio',
  templateUrl: './dettaglio-drink.component.html',
  styleUrls: ['./dettaglio-drink.component.css'],
})
export class DettaglioDrinkComponent implements OnInit {
  drinkId: null | undefined | number;
  drink: any[] = [];
  drinkDettaglio: any;
  constructor(private route: ActivatedRoute, private http: HttpClient) {}
  ngOnInit(): void {
    this.drinkId = Number(this.route.snapshot.paramMap.get("id"));
    this.fetchDettaglioDrink(this.drinkId);
  }
  fetchDettaglioDrink(numeroIdDrink: number): void {
    this.http
      .get<drinksRisposta>(
        `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${numeroIdDrink}`
      )
      .subscribe((response) => {
        this.drinkDettaglio = response["drinks"][0];
      });
  }
  getIngredienti(): string[] {
    let ingredienti: string[] = [];
    for (let i = 1; i <= 15; i++) {
      const ingrediente = this.drinkDettaglio[`strIngredient${i}`];
      const Misura = this.drinkDettaglio[`strMeasure${i}`];
      if (ingrediente) {
        ingredienti.push(`${Misura ? Misura + "of" : ""}${ingrediente}`);
      }
    }
    return ingredienti;
  }
}