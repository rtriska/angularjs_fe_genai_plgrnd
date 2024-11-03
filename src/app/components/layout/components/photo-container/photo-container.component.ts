import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'ai-photo-container',
  standalone: true,
  imports: [CommonModule, RouterLink, MatIconModule],
  templateUrl: './photo-container.component.html',
  styleUrl: './photo-container.component.scss'
})
export class PhotoContainerComponent {
  public readonly router = inject(Router);
}