import { Injectable } from '@angular/core';
import  { HttpClient,HttpHeaders } from '@angular/common/http'; 
import {Observable} from 'rxjs'


@Injectable({
  providedIn: 'root'
})
export class NewsService {
   apiUrl:string ="https://osoule.com/api/v1/get_settings_carousel"
   apiprojects:string ="https://development.osoule.com/api/v1/get_projects?page=1"
   apiHads:string ="https://osoule.com/api/v1/get_ads"
   apiproperties:string ="https://osoule.com/api/v1/get_properties?page=1&project=14"
   apiSocial:string = "https://development.osoule.com/api/v1/get_settings_social_links"
   apiBlogs:string="https://osoule.com/api/v1/posts_search/10?page=1"
   apiNews:string="https://osoule.com/api/v1/posts_search/1?page=1"



httpoption = {
  headers:new HttpHeaders ({
   
    // 'Authorization':`Bearer eyJpdiI6ImRrYW9Qb3NreG9KYmxBYy9PQnQ2cUE9PSIsInZhbHVlIjoiMnliM3FVSndNdnI4QUIranVKczdnd1BCbjFCN215blRTTTZkUHE5WW96TT0iLCJtYWMiOiI0NDZjMTk2YmVhNWM5Mjk2Y2ExYWI1N2FhNDZjZTVhMDYwNWU1ZGI5YTVlNDM3MWNmMThhMTU3NTkwOThmZTI5In0=`,
    'Api-token': 'eyJpdiI6ImRrYW9Qb3NreG9KYmxBYy9PQnQ2cUE9PSIsInZhbHVlIjoiMnliM3FVSndNdnI4QUIranVKczdnd1BCbjFCN215blRTTTZkUHE5WW96TT0iLCJtYWMiOiI0NDZjMTk2YmVhNWM5Mjk2Y2ExYWI1N2FhNDZjZTVhMDYwNWU1ZGI5YTVlNDM3MWNmMThhMTU3NTkwOThmZTI5In0'
  })
}
httpoptiongetprojects = {
  headers:new HttpHeaders ({
   
    // 'Authorization':`Bearer eyJpdiI6ImRrYW9Qb3NreG9KYmxBYy9PQnQ2cUE9PSIsInZhbHVlIjoiMnliM3FVSndNdnI4QUIranVKczdnd1BCbjFCN215blRTTTZkUHE5WW96TT0iLCJtYWMiOiI0NDZjMTk2YmVhNWM5Mjk2Y2ExYWI1N2FhNDZjZTVhMDYwNWU1ZGI5YTVlNDM3MWNmMThhMTU3NTkwOThmZTI5In0=`,
    'Api-token': 'eyJpdiI6ImRrYW9Qb3NreG9KYmxBYy9PQnQ2cUE9PSIsInZhbHVlIjoiMnliM3FVSndNdnI4QUIranVKczdnd1BCbjFCN215blRTTTZkUHE5WW96TT0iLCJtYWMiOiI0NDZjMTk2YmVhNWM5Mjk2Y2ExYWI1N2FhNDZjZTVhMDYwNWU1ZGI5YTVlNDM3MWNmMThhMTU3NTkwOThmZTI5In0',
    'Content-Type': 'multipart/form-data',
    'lang' : 'lang'

  })
}
httpoptiongetads = {
  headers:new HttpHeaders ({
       'Api-token': 'eyJpdiI6ImRrYW9Qb3NreG9KYmxBYy9PQnQ2cUE9PSIsInZhbHVlIjoiMnliM3FVSndNdnI4QUIranVKczdnd1BCbjFCN215blRTTTZkUHE5WW96TT0iLCJtYWMiOiI0NDZjMTk2YmVhNWM5Mjk2Y2ExYWI1N2FhNDZjZTVhMDYwNWU1ZGI5YTVlNDM3MWNmMThhMTU3NTkwOThmZTI5In0=',

  })
}
httpoptionproperties = {
  headers:new HttpHeaders ({
       'Api-token': 'eyJpdiI6ImRrYW9Qb3NreG9KYmxBYy9PQnQ2cUE9PSIsInZhbHVlIjoiMnliM3FVSndNdnI4QUIranVKczdnd1BCbjFCN215blRTTTZkUHE5WW96TT0iLCJtYWMiOiI0NDZjMTk2YmVhNWM5Mjk2Y2ExYWI1N2FhNDZjZTVhMDYwNWU1ZGI5YTVlNDM3MWNmMThhMTU3NTkwOThmZTI5In0=',
       'Content-Type': 'multipart/form-data',
       'lang' : 'lang'
  })
}


  constructor(private http:HttpClient) { }

  public getJson():Observable<any>{
    return this.http.get("./assets/newsapi.json")
  }
  public getApi():Observable<any>{
    return this.http.get(this.apiUrl , this.httpoption)
  }
  public getProjects():Observable<any>{
    return this.http.get(this.apiprojects ,this.httpoptiongetprojects)

  }
  public getAds():Observable<any>{
    return this.http.get(this.apiHads ,this.httpoptiongetads)

  }

  public getproperties():Observable<any>{
    return this.http.get(this.apiproperties ,this.httpoptionproperties)

  }
  public getsocial():Observable<any>{
    return this.http.get(this.apiSocial ,this.httpoption)

  }
  public getBlogs():Observable<any>{
    return this.http.get(this.apiBlogs )

  }
  public getNews():Observable<any>{
    return this.http.get(this.apiNews )

  }
}
