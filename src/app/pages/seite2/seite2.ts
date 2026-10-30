import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ArticleCard } from '../../components/article-card/article-card';

@Component({
  imports: [RouterLink, ArticleCard],
  selector: 'app-seite2',
  styleUrl: './seite2.css',
  templateUrl: './seite2.html',
})
export class Seite2 {}
