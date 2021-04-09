import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core'
import { UserService } from './../../services/user.service';

@Component({
    selector: 'topNews',
    templateUrl: './topNews.component.html',
    styleUrls: ["./topNews.component.css"],
})

export class TopNews{
    data;
    constructor(private userService: UserService){}

    ngOnInit(){
        this.userService.getPosts().subscribe((result) => {
            // console.log('result', result.articles)
            this.data = result['articles']
        })
    }
       

       
    
}