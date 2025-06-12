import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PostService } from './posts.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'app-hd-angular';

  public posts: any[] = [];
  public isLoading = true;

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.postService.getPosts().subscribe({
      next: (data) => {
        console.log(data);
        this.posts = data;
        this.isLoading = false; // Dejamos de cargar cuando llegan los datos
      },
      error: (err) => {
        console.error('Error al obtener los posts', err);
        this.isLoading = false; // Dejamos de cargar si hay un error
      },
    });
  }
}
