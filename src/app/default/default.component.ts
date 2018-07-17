import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'app-default',
    template: `
        <h1>Default Component</h1>
    `
})
export class DefaultComponent implements OnInit {

    constructor() { }

    ngOnInit() { 

    }

}
