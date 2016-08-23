import { Component } from '@angular/core';
import { ClientItemComponent } from './client-item.component';
import { Client } from '../client';

const CLIENTS: Client[] = [
    { id: 1, clientName: 'Client 1'},
    { id: 2, clientName: 'Client 2'},
    { id: 3, clientName: 'Client 3'},
    { id: 4, clientName: 'Client 4'},
    { id: 5, clientName: 'Client 5'},
    { id: 6, clientName: 'Client 6'},
    { id: 7, clientName: 'Client 7'},
    { id: 8, clientName: 'Client 8'}
];

@Component({
    selector: 'clients-list',
    template: `
        <div>
            <h2>Clients</h2>
            <client-item *ngFor="let client for clients"></client-item>
        </div>
    `
})
export class ClientsList{
    clients = CLIENTS;
}