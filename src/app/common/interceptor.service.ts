import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService {
  

  constructor(private http : HttpClient) { }
  getData() {
            // Création de l'observable
            this.http.get('https://jsonplaceholder.typicode.com/todos/1')
            // Abonnement à l'observable (et donc déclenchement de la requête) 
            .subscribe((data) => {
                   // Réponse du serveur
                    console.log(data);
            });
  }
}
