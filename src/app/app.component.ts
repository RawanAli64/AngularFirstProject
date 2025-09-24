import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './features/users/shared/header/header.component';
import { FooterComponent } from './features/users/shared/footer/footer.component';
import { HomeComponent } from './features/users/components/home/home.component';



@Component({
  selector: 'app-root',
  imports: [RouterOutlet , HeaderComponent , FooterComponent ,HomeComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'final-app';
}
