import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ContactUploaded } from '../contact_uploaded';
import { Papa } from "ngx-papaparse";
import { ToastrService } from 'ngx-toastr';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import {ContactsService} from '../contacts.service'
@Component({
  selector: 'app-batch-creation',
  templateUrl: './batch-creation.component.html',
  styleUrls: ['./batch-creation.component.css']
})
export class BatchCreationComponent implements OnInit {

  fileName = '';
  records = 0;
  _contacts: ContactUploaded[] = []
  contactsGeneralForm=this.formBuilder.group({
    contacts: this.formBuilder.array([])
  });
  file:File
  constructor(private http: HttpClient,
    private papa: Papa,
    private formBuilder: FormBuilder,
    private contactsService: ContactsService,
    private toastr: ToastrService) {

  }

  showError(error: string) {
    this.toastr.error(error, "Error")
  }

    /**
   * on file drop handler
   */
    onFileDropped(file:any) {
      this.processFile(file);
    }

  onFileSelected(event:any) {
    console.log(event)
    const file:File = event.target.files[0]
    this.processFile(file)
  }

  processFile(file:File){
    if (file) {
      this.validateData()
      this.fileName = file.name;

      const formData = new FormData();

      formData.append("thumbnail", file);
      console.log(file)
      file.text().then(
        res => {
          console.log(res)

          this.papa.parse(res,{
            complete: (result) => {
              console.log(result.data.length)
              console.log(result.data)
              for(let i=0; i<result.data.length; ++i){
                let data = result.data[i]
                if(data=='')
                  break;
                //this._contacts.push(new ContactUploaded(data[0],data[1],data[2],data[3],data[4],data[5]))
                this.addContact(new ContactUploaded(
                  data[0],data[1],data[2],data[3],data[4],data[5],data[6],
                  data[7],data[8],data[9],data[10],data[11],data[12],data[13],
                  data[14],data[15],data[16],data[17],data[18],data[19],data[20]))
              }

              console.log('Parsed: ', this.contacts);
                //contacts.push(new ContactUploaded( parseInt( row[0], 10), row[1], row[2].trim()));
            }
        });
      })

      //const upload$ = this.http.post("/api/thumbnail-upload", formData);

      //upload$.subscribe();
  }
  }

  ngOnInit() {

    this.validateData()
  }

  validateData(){
    this.contactsGeneralForm=this.formBuilder.group({
      contacts: this.formBuilder.array([])
    });
    this.records = 0;
  }

  get contacts() : FormArray {
    return this.contactsGeneralForm.controls["contacts"] as FormArray
  }

  addContact(contact_uploaded: ContactUploaded) {
    this.records++;
    const contactsForm=this.formBuilder.group({
      reference :contact_uploaded.reference,
      name : [contact_uploaded.name, [Validators.required, Validators.maxLength(128)]],
      surname :contact_uploaded.surname,
      company :contact_uploaded.company,
      email :[contact_uploaded.email ,[Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      telephone :contact_uploaded.telephone,
      sector :contact_uploaded.sector,
      position :contact_uploaded.position,
      id_document :contact_uploaded.id_document,
      id_document_type :contact_uploaded.id_document_type,
      birth_date :[contact_uploaded.birth_date ,[Validators.pattern(/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/)]],
      age :contact_uploaded.age,
      street_type :contact_uploaded.street_type,
      street_name:contact_uploaded.street_name,
      number :contact_uploaded.number,
      suite :contact_uploaded.suite,
      other_address :contact_uploaded.other_address,
      country :contact_uploaded.country,
      state :contact_uploaded.state,
      city :contact_uploaded.city,
      zipcode :contact_uploaded.zipcode
    });

    this.contacts.push(contactsForm);
  }



  createContacts() {
    console.log(this.contacts.value)
    const contacts: Array<ContactUploaded>=this.contacts.value

    this.contactsService.createContacts(contacts)
    this.showSuccess()
    this.contactsGeneralForm.reset()
    this.validateData()
    /* .subscribe(b => {
        this.showSuccess(carrera)
        this.carreraForm.reset()
        this.routerPath.navigate([`/carreras/${this.userId}/${this.token}`])
      },
        error => {
          if (error.statusText === "UNAUTHORIZED") {
            this.showWarning("Su sesión ha caducado, por favor vuelva a iniciar sesión.")
          }
          else if (error.statusText === "UNPROCESSABLE ENTITY") {
            this.showError("No hemos podido identificarlo, por favor vuelva a iniciar sesión.")
          }
          else {
            this.showError("Ha ocurrido un error. " + error.message)
          }
        })*/
  }

  cancel(){
    this.contactsGeneralForm.reset()
    this.validateData()
  }

  showSuccess() {
    this.toastr.success(`successful creation`, "successful creation");
  }


  onCheckboxChange(checked: boolean) {

    console.log(checked)
    if (checked) {

    } else {

    }
  }

}
