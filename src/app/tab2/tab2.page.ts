import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  public mi_avatar : string;

  constructor() {

    this.GenerarAvatar();

  }

  GenerarAvatar(){
  
    const valor : number = Date.now()
    const cadena : string = valor.toString() + "?d=identicon&f=y";

    this.mi_avatar = `https://www.gravatar.com/avatar/${ cadena }`;
    
  }
}
