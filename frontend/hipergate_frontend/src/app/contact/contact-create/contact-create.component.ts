import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
//import { JwtHelperService } from "@auth0/angular-jwt";
import { ToastrService } from 'ngx-toastr';
import { Contact } from '../contact';
import { ContactService } from '../contact.service';
import { Country } from "./../../country"

import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';
@Component({
  selector: 'app-contact-create',
  templateUrl: './contact-create.component.html',
  styleUrls: ['./contact-create.component.css']
})
export class ContactCreateComponent implements OnInit{
    
        
    constructor(
    private contactService: ContactService,
    private formBuilder: FormBuilder,
    private router: Router,
    private toastr: ToastrService
  ) { }
  
  contactForm!: FormGroup;
    
    countries!: Array<Country>
    showCountries!: Array<Country>
    selectedCountry!: Country
    selectedIndex!: number
   
    allTitles =[
        new Title(1, 'Mr'),
        new Title(2, 'Ms'),
        new Title(3, 'Dr'),
        new Title(4, 'Pr'),
        new Title(5, 'Lt'),
        new Title(6, 'Other')
    ]
    countries2 =[
     { id_country: 1, tr_country_en: "United States" },
    { id_country: 2, tr_country_en: "Australia" },
    { id_country: 3, tr_country_en: "Canada" },
    { id_country: 4, tr_country_en: "Brazil" },
    { id_country: 5, tr_country_en: "England" }
  ];
    
    ngOnInit(): void {
        
        this.getCountries();
        debounceTime(2000),
        this.contactForm = this.formBuilder.group({
      id_nationality: ["", [Validators.required]],
      bo_private:[""],
      de_title:[""], 
      tp_passport:[""], 
      tx_division:[""],
      tx_dept :[""],
      id_gender :["", [Validators.required]],
      gu_geozone:[""],
      gu_sales_man:[""],
      id_ref: ["", [Validators.required, Validators.maxLength(50) ]],
      tx_name: ["", [Validators.required, Validators.maxLength(50), Validators.minLength(4)]],
      tx_surname: ["", [Validators.required, Validators.maxLength(50), Validators.minLength(4)]],
      sn_passport:  ["", [Validators.required, Validators.pattern("^[0-9]*$"), Validators.maxLength(16), Validators.minLength(4)]],
      ny_age:  ["", [Validators.pattern("^[0-9]*$")]],
      dt_birth: ["", [Validators.minLength(10)]],
      tx_comments: ["", [Validators.required, Validators.maxLength(500), Validators.minLength(10)]]
    })
    
    }
    
    getCountries(): void {
    this.contactService.getCountries()
      .subscribe(countries => {
        this.countries = countries
        this.showCountries = countries
        if (countries.length > 0) {
          this.onSelect(this.showCountries[0], 0)
          //console.log(countries)
        }
      },
        error => {
          console.log(error)
         
            this.showError("Ha ocurrido un error. " + error.message)
         
        })

  }
  onSelect(a: Country, index: number) {
    this.selectedIndex = index
    this.selectedCountry = a
  }
   cancelCreation():void{this.contactForm.reset();this.router.navigate([`/contacts/new`])}
    createContact() {
      //let user=this.contactForm.get('contact')?.value;
    this.contactService.contactCreate(this.contactForm.get('id_nationality')?.value,
this.contactForm.get('bo_private')?.value,
this.contactForm.get('de_title')?.value,
this.contactForm.get('tp_passport')?.value,
this.contactForm.get('tx_division')?.value,
this.contactForm.get('tx_dept')?.value,
this.contactForm.get('id_gender')?.value,
this.contactForm.get('gu_geozone')?.value,
this.contactForm.get('gu_sales_man')?.value,
this.contactForm.get('id_ref')?.value,
this.contactForm.get('tx_name')?.value,
this.contactForm.get('tx_surname')?.value,
this.contactForm.get('sn_passport')?.value,
this.contactForm.get('ny_age')?.value,
this.contactForm.get('dt_birth')?.value,
this.contactForm.get('tx_comments')?.value)
      .subscribe(res => {
        this.router.navigate([`/contacts`])
        //this.router.navigate([`/carreras/${user}/${res.token}`])
        this.showSuccess()
      },
        error => {
          this.showError(`Ha ocurrido un error: ${error.error}`)
        })
  }
  showError(error: string) {
    this.toastr.error(error, "Error de autenticación")
  }

  showWarning(warning: string) {
    this.toastr.warning(warning, "Adevretencia")
  }
  showSuccess() {
    this.toastr.success(`Se ha Creado Contacto exitosamente`, "Registro exitoso");
  }
  
}

export class Title { 
    constructor(public titleId:number, public titleName:string) {
    }	
} 