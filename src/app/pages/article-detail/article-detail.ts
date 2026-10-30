import { Component, inject } from "@angular/core";
import { ActivatedRoute, RouterLink } from "@angular/router";
import { ARTICLES } from "../../data/articles";

@Component({
    selector: 'app-article-detail',
    imports: [RouterLink],
    templateUrl: './article-detail.html',
    styleUrl:'./article-detail.css'
})
export class ArticleDetail {
    private readonly route = inject(ActivatedRoute);
    private readonly id = Number(
        this.route.snapshot.paramMap.get('id')
    );

    readonly article = ARTICLES.find(a => a.id === this.id);

}