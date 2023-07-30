export class ContactUploaded {
    reference: string;
    name: string;
    surname: string;
    company: string;
    email: string;
    telephone: string;
    sector: string;
    position: string;
    id_document: string;
    id_document_type: string;
    birth_date: string;
    age: string;
    street_type: string;
    street_name: string;
    number: string;
    suite: string;
    other_address: string;
    country: string;
    state: string;
    city: string;
    zipcode: string;
    constructor(
      reference: string,
      name: string,
      surname: string,
      company: string,
      email: string,
      telephone: string,
      sector: string,
      position: string,
      id_document: string,
      id_document_type: string,
      birth_date: string,
      age: string,
      street_type: string,
      street_name: string,
      number: string,
      suite: string,
      other_address: string,
      country: string,
      state: string,
      city: string,
      zipcode: string
    ) {

      this.reference = reference,
      this.name = name,
      this.surname = surname,
      this.company = company
      this.email = email,
      this.telephone = telephone,
      this.sector = sector,
      this.position = position
      this.id_document = id_document,
      this.id_document_type = id_document_type,
      this.birth_date = birth_date,
      this.age = age
      this.street_type = street_type,
      this.street_name = street_name,
      this.number = number,
      this.suite = suite,
      this.other_address = other_address
      this.country = country,
      this.state = state,
      this.city = city,
      this.zipcode = zipcode
    }
}


export class ContactUploadedPost {
  data:Array<ContactUploaded>
  constructor(data:Array<ContactUploaded>){
    this.data=data
  }
}
