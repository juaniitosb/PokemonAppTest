import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs";
import {environment} from "../../../enviroments/enviroments";

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http_: HttpClient) {
  }

  getAllPokemons() {
    const endpoint = environment.getAllPokemons
    return this.http_.get(endpoint).pipe(
      map((res: any) => res),
    )
  }

  getPokemonByInfo(offset: number, limit: number) {

    const endpoint = `${environment.getPokemonByInfo}/?offset=${offset}&limit=${limit}`
    return this.http_.get(endpoint).pipe(
      map((res: any) => res),
    )
  }

  getPokemontById(id: number) {
    const endpoint = `${environment.getPokemonByInfo}/${id}`
    return this.http_.get(endpoint).pipe(
      map((res: any) => (
        {
          abilities: res.abilities,
          info: ({
            height: res.height,
            name: res.name,
            weight: res.weight,
            id: res.id,
            base_experience: res.base_experience,
          }),
          img: ({
            static: res.sprites.other.home.front_shiny || res.sprites.other.dream_world.front_default || res.sprites.front_shiny || null,
            dinamic:res.sprites.versions?.['generation-v']?.['black-white']?.animated.front_default || null
          }),
          stats:res.stats,
          types:res.types
        }))
    )
  }

  getPokemontByName(name: string) {
    const endpoint = `${environment.getPokemonByInfo}/${name}`
    return this.http_.get(endpoint).pipe(
      map((res: any) => res)
    )
  }
}
