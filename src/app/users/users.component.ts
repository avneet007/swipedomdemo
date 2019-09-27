import { Component, OnInit } from '@angular/core';
import { UsersService } from './service/users.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  usersData:Array<any>;

  constructor(private userService:UsersService) { }

  ngOnInit() {

      this.getAllusers();
  }


  getAllusers(){
      this.userService.getUsersList().subscribe((data) => {
        if(data['items'].length>0){
          this.usersData = data['items'];
          console.log(this.usersData);
        }
    }, error => {
        try {
           console.log("its in try block")
        } catch (e) {
          console.log("its catch try block")
        }
    });
    
  }


}
