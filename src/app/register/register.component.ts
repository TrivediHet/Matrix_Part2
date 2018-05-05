import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private service: AuthService) { }

  ngOnInit() {
  }

  model = {};

  register() {
    //console.log(this.model);
    this.service.register(this.model).subscribe();
  }

}
