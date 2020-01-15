import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {
  data: any;
  constructor(private newsService: NewsService, private router: Router) { }

  ngOnInit() {
    this.newsService.getData('top-headlines').subscribe(
      (data) => {
        this.data = data;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  gotoNews(article) {
    this.newsService.currentArticle = article;
    this.router.navigate(['./news-single']);
  }

  dorefresh(event) {
    console.log('Refreshing started...');

    setTimeout(() => {
      console.log('Refreshing done');
      event.target.complete();
    }, 2000);
  }
}
