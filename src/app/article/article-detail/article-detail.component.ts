import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'app-article-detail',
    template: `
        <h3>Article Detail</h3>
        <p>Showing article {{ (route.params | async).articleId }}</p>
        <a [routerLink]="'../'">Back</a>
    `
})
export class ArticleDetailComponent implements OnInit {
    articleId: number;

    constructor(
        public route: ActivatedRoute
    ) {
        route.params.subscribe(params => {
            console.log('Detail params:');
            console.log(window.location.href);
            console.log(params);
        });
    }

    ngOnInit() {

    }

}