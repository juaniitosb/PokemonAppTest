import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';
import {PokemonService} from "../../services/pokemont/pokemon.service";
import {concat} from "rxjs";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnChanges {
  @Output() _namePokemon: EventEmitter<any> = new EventEmitter<any>()
  @Input() _idPokemon = 0;

  numberPokemon: any;
  dataPokemon: any = [];
  typeElement: string = '';
  displayP: boolean=false;

  constructor(private pokemonService: PokemonService) {

  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['_idPokemon'] && changes['_idPokemon'].currentValue) {
      if (this._idPokemon > 0) {
        this.typeElement = ''
        this.pokemonService.getPokemontById(this._idPokemon).subscribe(res => {
          if (!!res) {
            this._namePokemon.emit(res.info.name || null)
            this.dataPokemon = res
            res?.types.forEach((d: any, i: number) => {
                this.typeElement += i > 0 ? ` |  ${d.type.name}` : d.type.name
              }
            )
          }
        })
      }
    }
    if (this._idPokemon == 0) {
      this.dataPokemon = []
      this._namePokemon.emit('')
    }
  }

  get namePokemon(): string {
    if (!!this.dataPokemon) {
      return this.dataPokemon.info?.name||'No type of pokemon found'
    } else {
      return 'No type of pokemon found'
      //return 'SIN POKEMON'
    }
  }

  nameUrl(index: any) {
    let url = `assets/img/backgroud/${index+1}.png`
    return url;
  }
}
