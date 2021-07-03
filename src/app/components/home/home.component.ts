import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private _news:NewsService) { }
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  products:any =[];
  slider:any =[];
  projects:any =[];
  ads:any =[];
  properties:any =[];
  blogs:any =[];
  news:any =[];







  getdata() {
    this._news.getJson().subscribe( (data:any) =>{
        console.log(data);
        this.products =data.articles;
      });
  }
  getApi(){
    this._news.getApi().subscribe(res => {
      console.log("Get carousal",res);
      this.slider =res.data

    })
   
  }
  getProjects() {
    this._news.getProjects().subscribe(res=>{
      console.log("GET projects",res);
      
      this.projects =res.data.items

    })
  }
  getAds() {
    this._news.getAds().subscribe(res=>{

      console.log("GETAds", res);
      for(let i =0; i<1;i++){
        this.ads.push(res.data[i])

      }

    },err=>{
      console.log("ERROR IS=" ,err.name,"and=" ,err.message )
    })
  }
  getproperties() {
    this._news.getproperties().subscribe(res=>{
      console.log("GET Social icon links", res)

    })
  }
  getBlogs() {
    this._news.getproperties().subscribe(res=>{
      console.log("GET Blogs", res);
      this.blogs =res.data.items

    })
  }
  getNews() {
    this._news.getproperties().subscribe(res=>{
      console.log("GET News", res);
      this.news =res.data.items

    })
  }
  // getSocial(){

  // }
  ngOnInit(): void {
    this.getdata();
    this.getApi();
    this.getProjects();
    this.getAds() 
    this.getproperties()
    this.getBlogs()
    this.getNews()
  }

 

  itemsPerSlide = 3;
  singleSlideOffset = true;
  noWrap = false;
  slidesChangeMessage = '';

  onSlideRangeChange(indexes: number[]|void): void {
    this.slidesChangeMessage = `Slides have been switched: ${indexes}`;
  }
 
  slides = [
    {image: '../../../assets/images/1.png'},
    {image: '../../../assets/images/2.jpg'},
    {image: '../../../assets/images/3.jpg'},
    {image: '../../../assets/images/4.jpg'},
  

  ];
 



}
