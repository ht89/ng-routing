import { ArticleListComponent } from './article/article-list/article-list.component';
import { ArticleDetailComponent } from './article/article-detail/article-detail.component';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './default/default.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';

const appRoutes: Routes = [
    {   
        path: 'article', 
        component: ArticleComponent,
        children: [
            {
                path: '', component: ArticleListComponent
            },
            {
                path: ':articleId', component: ArticleDetailComponent
            }
        ]
    },
    { path: '**', component: DefaultComponent }
]

@NgModule({
    declarations: [
        AppComponent,
        DefaultComponent,
        ArticleComponent,
        ArticleListComponent,
        ArticleDetailComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(appRoutes)
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
