import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'e-commerce-app';

  searchText:string='';



  onSearchTextChanged(searchValue:string){
    this.searchText = searchValue;
    console.log(this.searchText);

  }
}
