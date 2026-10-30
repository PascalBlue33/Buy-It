import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LinkCard } from '../../components/link-card/link-card';

@Component({
  imports: [RouterLink, LinkCard],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {}
