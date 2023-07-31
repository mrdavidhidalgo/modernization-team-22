import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from "./contact"
import { Country } from "./../country"
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

   private backUrl: string = environment.backBaseUrl;

   constructor(private http: HttpClient) { }
   
   getCountries(): Observable<Country[]> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer AVCD`
    })
    return this.http.get<Country[]>(`${this.backUrl}/countries`, { headers: headers })
  }
  contactCreate(id_nationality: string,bo_private: string,de_title: string,tp_passport: string,tx_division: string,tx_dept : string,
id_gender : string,gu_geozone: string,gu_sales_man: string,id_ref: string,tx_name: string, tx_surname: string, sn_passport: string,  
ny_age: string,  dt_birth: string, tx_comments: string):Observable<any>
  {
   
        if(bo_private=="on")
            bo_private="1"
         else
            bo_private="0"
       return this.http.post<any>(`${this.backUrl}/contactnew`,{"id_nationality":id_nationality,
        "bo_private":bo_private,
        "de_title":de_title,
        "tp_passport":tp_passport,
        "tx_division":tx_division,
        "tx_dept":tx_dept,
        "id_gender":id_gender,
        "gu_geozone":gu_geozone,
        "gu_sales_man":gu_sales_man,
        "id_ref":id_ref,
        "tx_name":tx_name,
        "tx_surname":tx_surname,
        "sn_passport":sn_passport,
        "ny_age":ny_age,
        "dt_birth":dt_birth,
        "tx_comments":tx_comments})
  }
  
}
