import { Component } from '@angular/core';
import { ArticleCard } from '../../components/article-card/article-card';

@Component({
  imports: [ArticleCard],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {}
