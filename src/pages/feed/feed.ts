import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html'
})
export class FeedPage {
  public objFeed: any = {
    titulo: "Henrique de Souza Carvalho",
    data: "November 5, 1955",
    descricao: "Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?! Whoa. This is heavy.",
    qtdLikes: 12,
    qtdComments: 4,
    timeComment: "14h ago"
  }

  public movieList = new Array<any>();

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private movieProvider: MovieProvider
  ) { }

  public somaDoisNumeros(): void {
    // alert("Sono da porra");
  }

  ionViewDidLoad() {
    // this.somaDoisNumeros();
    // console.log('ionViewDidLoad FeedPage');
    /*******************************************************
    this.movieProvider.getLatestMovies().subscribe(data => {
      console.log((data as any)._body);
    }, error => {
      console.log(error);
    })
    ********************************************************/

    this.movieProvider.getPopularMovies().subscribe(data => {
      this.movieList = JSON.parse((data as any)._body).results;
      console.log(this.movieList);
    }, error => {
      console.log(error);
    })

  }

}
