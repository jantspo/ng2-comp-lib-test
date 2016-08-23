import { Component } from '@angular/core';

@Component({
    selector: 'clients-list',
    template: `
        <label>Client Name: </label>{{ client.clientName }}
    `
})

export class ClientItemComponent {
    client = {
        clientName: 'Test'
    };
}