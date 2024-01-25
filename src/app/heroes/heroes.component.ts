import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.scss'
})
export class HeroesComponent implements OnInit {
  public hero = 'Windstorm';
  public hero1: Hero= {id:1, name: 'Windstorm'}
  ngOnInit(): void {
  }

}
