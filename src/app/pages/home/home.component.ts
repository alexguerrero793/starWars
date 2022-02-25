import { Component, OnInit } from '@angular/core';

//SERVICE
import { WarsService} from '../../services/wars.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  count: number;
  pagination: number =1;
  personWArs: [];
  messageError: boolean = false;

  modalTitle: string;
  personFilms: [];
  filmsFilter: any[] = [];
  filmsWars: any[] = [
    {
      "name": "A new Hope",
      "title": "https://swapi.dev/api/films/4/",
      "url" : "https://static.posters.cz/image/1300/posters/star-wars-episode-iv-a-new-hope-i90218.jpg"
    },
    {
      "name": "The Phantom Menace",
      "title": "https://swapi.dev/api/films/1/",
      "url" : "https://m.media-amazon.com/images/M/MV5BYTRhNjcwNWQtMGJmMi00NmQyLWE2YzItODVmMTdjNWI0ZDA2XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg"
    },
    {
      "name": "Attack of the Clones",
      "title": "https://swapi.dev/api/films/2/",
      "url" : "https://resize-media.festival-cannes.com/fit-in/2560x1103/film_film/0002/11/8e146534ec8dce9a0b219e4aa708e98eeb4c7da8.jpeg"
    },
    {
      "name": "Revenge of the Sith",
      "title": "https://swapi.dev/api/films/3/",
      "url" : "https://external-preview.redd.it/wmVWi4imgITo4px_9H9t521NBhoah1T_Mg9A2zwlGxE.png?auto=webp&s=3ee4b58b55fc7c954f3c916672df22a3b801eb8f"
    },
    {
      "name": "The Empire Strikes Back",
      "title": "https://swapi.dev/api/films/5/",
      "url" : "https://images-na.ssl-images-amazon.com/images/I/91eOgodm4nL.jpg"
    },
    {
      "name": "Return of the Jedi",
      "title": "https://swapi.dev/api/films/6/",
      "url" : "https://m.media-amazon.com/images/I/81E911hVDAL._AC_SL1500_.jpg"
    },

  ]

  constructor( private WarsService : WarsService ) {}

  ngOnInit(){
    this.personWarsView();
  }

  personWarsView(){
    this.WarsService.getWars(this.pagination).subscribe((resp)=>{
      //TODO: SPINNER
      this.personWArs = resp.results;
      this.count = Math.ceil(resp.count/10);
    })
    //TODO: GESTION ERROR
  }

  previus(){
    if(this.pagination > 1 && this.pagination <= this.count){
      this.pagination = this.pagination -1;
      this.personWarsView();
    }
  }

  pageSelect(x:number){
    this.pagination = x+1;
    this.personWarsView();
  }

  next(){
    if(this.pagination < this.count){
      this.pagination = this.pagination +1;
      this.personWarsView();
    }
  }

  openModal(person){
    this.modalTitle = person.name;
    this.personFilms = person.films;
    //Filter view films
    this.filmsFilter = this.filmsWars.filter(film => person.films.some(filmA => film.title == filmA))
  }

}
