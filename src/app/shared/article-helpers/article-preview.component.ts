import { Component, Input, OnInit } from "@angular/core";
import { Article } from "../../core/models/article.model";
import { ArticleMetaComponent } from "./article-meta.component";
import { FavoriteButtonComponent } from "../buttons/favorite-button.component";
import { RouterLink } from "@angular/router";
import { NgForOf, NgIf } from "@angular/common";

@Component({
  selector: "app-article-preview",
  templateUrl: "./article-preview.component.html",
  imports: [
    ArticleMetaComponent,
    FavoriteButtonComponent,
    RouterLink,
    NgForOf,
    NgIf,
  ],
  standalone: true,
})
export class ArticlePreviewComponent implements OnInit {
  @Input() article!: Article;

  ngOnInit(): void {
    this.article.showDescription = false;
  }

  toggleFavorite(favorited: boolean): void {
    this.article.favorited = favorited;

    if (favorited) {
      this.article.favoritesCount++;
    } else {
      this.article.favoritesCount--;
    }
  }

  toggleMessage(): void {
    console.log("click");
    this.article.showDescription = !this.article.showDescription;
  }
}
