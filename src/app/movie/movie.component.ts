import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {MovieService} from '../services/movie.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
    moduleId: module.id,
    selector: 'movie',
    templateUrl: 'movie.component.html'
})
export class MovieComponent implements OnInit{
    movie: Object;
    cast: Array<Object>;
    video: Object;
    
    constructor(
        private router:ActivatedRoute, 
        private _movieService:MovieService,
        private sanitizer: DomSanitizer    
    ){
        
    }
    
    ngOnInit(){
        this.router.params.subscribe((params) => {
            const id = params['id'];
            this._movieService.getMovie(id).subscribe(movie => {
                this.movie = movie;
            });
        });

        this.router.params.subscribe((params) => {
            const id = params['id'];
            this._movieService.getMovieCredits(id).subscribe(res => {

                res.cast = res.cast.filter((item) => {
                    return item.profile_path
                });

                this.cast = res.cast.slice(0,4);
              });
        });

        this.router.params.subscribe((params) => {
            const id = params['id'];
            this._movieService.getMovieVideos(id).subscribe(res => {

                if(res.results && res.results.length) {
                    this.video = res.results[0];        
                    this.video['url'] = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + this.video['key']);
                  }
              });
        });




        


    }
}