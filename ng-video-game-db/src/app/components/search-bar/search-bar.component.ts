import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  NgForm,
  ReactiveFormsModule,
  FormsModule,
} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [
    //BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss',
})
export class SearchBarComponent {
  searchBar = new FormGroup({
    Name: new FormControl(''),
  });

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onSubmit() {
    console.warn(this.searchBar.value);
    this.router.navigate(['search', this.searchBar.value]);
  }
}
