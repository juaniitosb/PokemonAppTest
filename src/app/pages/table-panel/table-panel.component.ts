import {AfterViewInit, Component, ElementRef, EventEmitter, OnInit, Output, Renderer2, ViewChild} from '@angular/core';
import {PokemonService} from "../../services/pokemont/pokemon.service";


@Component({
  selector: 'app-table-panel',
  templateUrl: './table-panel.component.html',
  styleUrls: ['./table-panel.component.css']
})
export class TablePanelComponent implements OnInit {
  @ViewChild('tablePokemons') vc_Table: any
  @Output() _numberPokemon: EventEmitter<any> = new EventEmitter<any>()

  searchPokemon: any;
  listPokemons: any = [];
  countPokemons = 0;
  selectedPokemon: any;
  flagSearch: boolean = true;
  numberPage: number = 1;
  increment: boolean = false;

  constructor(private pokemonService: PokemonService,
              private render: Renderer2) {
  }

  ngOnInit(): void {
    this.searchAllPokemonts()
  }

  searchAllPokemonts() {
    this.listPokemons = []
    this.pokemonService.getAllPokemons().subscribe((res: any) => {
      if (!!res) {
        this.countPokemons = res.results.length
        this.listPokemons = res.results
      } else {}
    }, (error) => {})
  }


  createDesing(dataPokemontSelect: any) {
    if (dataPokemontSelect) {
      let numberPokemon = dataPokemontSelect.url.split('/')
      this._numberPokemon.emit(numberPokemon[6])
    }

  }

  filter(filter: any) {
    filter.trim()
    if (filter != '') {
      let prueba = this.listPokemons.filter((f: any) => f.name == filter)
      this.createDesing(prueba[0])
    } else {
      this._numberPokemon.emit(0)
    }
  }



  getPokemontByParams(limit: number, offset: number, init: boolean) {
    this.pokemonService.getPokemonByInfo( limit,offset).subscribe(res => {
      if (!!res) {
        this.countPokemons = res.results.length
        this.listPokemons.push(res.results)
      }
    })
  }
  //Filtro de busqueda nativo para version 2.0
  // downPage() {
  //   let numberArray = this.numberPage * 20
  //   if (numberArray == this.listPokemons[this.numberPage - 1].length) {
  //     //this.numberPage++
  //   } else {
  //     this.getPokemontByParams(numberArray - 20, numberArray, false)
  //   }
  // }
  //
  // incrementPage() {
  //   this.numberPage++
  //   this.increment=true
  //   let numberArray = this.numberPage * 20
  //   this.getPokemontByParams(numberArray - 20, numberArray, false)
  //   console.log(this.listPokemons)
  // }
  // seacrhVersion() {
  //   this.flagSearch = !this.flagSearch
  //   if (this.flagSearch) {
  //     this.searchAllPokemonts()
  //   } else if (!this.flagSearch) {
  //     this.listPokemons = []
  //     this.countPokemons = 0.0
  //     this.getPokemontByParams(0, 20, true)
  //   }
  // }
}
