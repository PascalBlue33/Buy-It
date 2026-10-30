import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LinkCard } from '../../components/link-card/link-card';

@Component({
  imports: [RouterLink, LinkCard],
  selector: 'app-seite2',
  styleUrl: './seite2.css',
  templateUrl: './seite2.html',
})
export class Seite2 {}
