import { Component, input } from '@angular/core';
import { Article } from '../../data/articles';
import { RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-article-card',
  styleUrl: 'article-card.css',
  templateUrl: './article-card.html',
})
export class ArticleCard {
  readonly article = input.required<Article>();
}
