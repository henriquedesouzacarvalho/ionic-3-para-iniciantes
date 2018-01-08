import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';
import { MovieDetailsPage } from '../movie-details/movie-details';

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
  public page = 1;
  public loader;
  public refresher;
  public isRefreshing: boolean = false;
  public infiniteScroll;


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private movieProvider: MovieProvider,
    public loadingCtrl: LoadingController
  ) { }

  presentLoading() {
    this.loader = this.loadingCtrl.create({
      content: "Loading..."
      // , duration: 3000
    });
    this.loader.present();
  }

  closeLoading() {
    this.loader.dismiss();
  }

  public somaDoisNumeros(): void {
    // alert("Sono da porra");
  }

  doRefresh(refresher) {
    this.refresher = refresher;
    this.isRefreshing = true;
    this.loadMovies();
  }

  // ionViewDidLoad() { }
  ionViewDidEnter() {
    this.loadMovies();
  }

  loadMovies(newPage:boolean = false) {
        // this.somaDoisNumeros();
    // console.log('ionViewDidLoad FeedPage');
    /*******************************************************
    this.movieProvider.getLatestMovies().subscribe(data => {
      console.log((data as any)._body);
    }, error => {
      console.log(error);
    })
    ********************************************************/
    this.presentLoading();
    this.movieProvider.getPopularMovies(this.page).subscribe(data => {
      const results = JSON.parse((data as any)._body).results;

      if (newPage) {
        this.movieList = this.movieList.concat(results);
        this.infiniteScroll.complete();
      } else {
        this.movieList = results
      }

      if (this.isRefreshing) {
        this.refresher.complete();
        this.isRefreshing = false;
      }
      this.closeLoading();
    }, error => {
      console.log(error);
      if (this.isRefreshing) {
        this.refresher.complete();
        this.isRefreshing = false;
      }
      this.closeLoading();
    });
  }

  openDetail(movie){
    this.navCtrl.push(MovieDetailsPage, {id: movie.id });
  }

  doInfinite(infiniteScroll) {
    this.page++;
    this.infiniteScroll = infiniteScroll;
    this.loadMovies(true);
  }

}
