import { Component } from '@angular/core';
import { CommentComponent } from '../comment/comment.component';

@Component({
  selector: 'app-guide',
  standalone: true,
  imports: [CommentComponent],
  templateUrl: './guide.component.html',
  styleUrl: './guide.component.css'
})
export class GuideComponent {

}
