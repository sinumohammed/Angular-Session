import { Injectable } from '@angular/core';

@Injectable()
export class UserPreferencesService {
    colourPreference: string = 'orange';
    
    constructor() {
        console.log('New Instance of Service Created');
    }

}
