import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'app-article-list',
    template: `
        <h3>Article List</h3>
        <p *ngFor="let articleId of articleIds">
            <a [routerLink]="[articleId, { detailData: 'bar' }]">Article {{ articleId }}</a>
        </p>
    `
})
export class ArticleListComponent implements OnInit {
    articleIds = [1,2,3,4,5];

    constructor(
        public route: ActivatedRoute
    ) { 
        route.params.subscribe(params => {
            console.log('List params:');
            console.log(window.location.href);
            console.log(params);
        });
    }

    ngOnInit() { 

    }

}