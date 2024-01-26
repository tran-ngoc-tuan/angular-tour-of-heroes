import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.scss'
})
export class HeroesComponent implements OnInit {
  public hero = 'Windstorm';
  public hero1: Hero= {id:1, name: 'Windstorm'}
test: any;
  ngOnInit(): void {
  }

}
