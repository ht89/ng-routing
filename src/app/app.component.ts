import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'app works!';
    defaultPath = '';
    articlePath = 'article';

    constructor(public router: Router) {

    }

    visitDefault(): void {
        this.router.navigate(['']);
    }
    
    visitArticle(): void {
        this.router.navigate(['article']);
    }

}
