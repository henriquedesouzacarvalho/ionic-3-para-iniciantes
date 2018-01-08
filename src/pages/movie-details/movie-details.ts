import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';

@IonicPage()
@Component({
  selector: 'page-movie-details',
  templateUrl: 'movie-details.html',
  providers:[
    MovieProvider
  ]
})
export class MovieDetailsPage {
  public movie;
  public movidId;

  constructor(public navCtrl: NavController, public navParams: NavParams, public movieProvider: MovieProvider) {

  }

  ionViewDidEnter() {
    this.movidId = this.navParams.get("id");
    console.log(this.movidId);
    this.movieProvider.getMovieDetailById(this.movidId)
      .subscribe(data => {
        this.movie = JSON.parse((data as any)._body);
      }, error => {
        console.log(error);
      });
  }

}
