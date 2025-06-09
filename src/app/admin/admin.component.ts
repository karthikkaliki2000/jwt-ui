import { Component } from '@angular/core';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  constructor(private userService: UserService) {}
    ngOnInit(): void {
      this.forAdmin();
    }
    message: any;
    forAdmin() {
      this.userService.forAdmin().subscribe(
        (data) => {
          console.log(data);
          this.message = data;
        },
        (error) => {
          console.log(error);
        }
      );
    }
}
