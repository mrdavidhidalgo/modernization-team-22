export class Contact{
    
    gu_contact: string;
    gu_workarea: string;
    dt_created: string;
    bo_restricted: number;
    bo_private: number;
    nu_notes: number;
    nu_attachs: number;
    bo_change_pwd: number;
    tx_nickname: string;
    tx_pwd: string;
    tx_challenge: string;
    tx_reply: string;
    dt_pwd_expires: string;
    dt_modified: string;
    gu_writer: string;
    gu_company: string;
    id_batch: string;
    id_status: string;
    id_ref: string;
    id_fare: string;
    id_bpartner: string;
    tx_name: string;
    tx_surname: string;
    de_title: string;
    id_gender: string;
    dt_birth: string;
    ny_age: number;
    id_nationality: string;
    sn_passport: string;
    tp_passport: string;
    sn_drivelic: string;
    dt_drivelic: string;
    tx_dept: string;
    tx_division: string;
    gu_geozone: string;
    gu_sales_man: string;
    tx_comments: string;
    url_linkedin: string;
    url_facebook: string;
    url_twitter: string;
    
    constructor(
        gu_contact: string,
        gu_workarea: string,
        dt_created: string,
        bo_restricted: number,
        bo_private: number,
        nu_notes: number,
        nu_attachs: number,
        bo_change_pwd: number,
        tx_nickname: string,
        tx_pwd: string,
        tx_challenge: string,
        tx_reply: string,
        dt_pwd_expires: string,
        dt_modified: string,
        gu_writer: string,
        gu_company: string,
        id_batch: string,
        id_status: string,
        id_ref: string,
        id_fare: string,
        id_bpartner: string,
        tx_name: string,
        tx_surname: string,
        de_title: string,
        id_gender: string,
        dt_birth: string,
        ny_age: number,
        id_nationality: string,
        sn_passport: string,
        tp_passport: string,
        sn_drivelic: string,
        dt_drivelic: string,
        tx_dept: string,
        tx_division: string,
        gu_geozone: string,
        gu_sales_man: string,
        tx_comments: string,
        url_linkedin: string,
        url_facebook: string,
        url_twitter: string
    )
    {
        this.gu_contact = gu_contact;
        this.gu_workarea = gu_workarea;
        this.dt_created = dt_created;
        this.bo_restricted = bo_restricted;
        this.bo_private = bo_private;
        this.nu_notes = nu_notes;
        this.nu_attachs = nu_attachs;
        this.bo_change_pwd = bo_change_pwd;
        this.tx_nickname = tx_nickname;
        this.tx_pwd = tx_pwd;
        this.tx_challenge = tx_challenge;
        this.tx_reply = tx_reply;
        this.dt_pwd_expires = dt_pwd_expires;
        this.dt_modified = dt_modified;
        this.gu_writer = gu_writer;
        this.gu_company = gu_company;
        this.id_batch = id_batch;
        this.id_status = id_status;
        this.id_ref = id_ref;
        this.id_fare = id_fare;
        this.id_bpartner = id_bpartner;
        this.tx_name = tx_name;
        this.tx_surname = tx_surname;
        this.de_title = de_title;
        this.id_gender = id_gender;
        this.dt_birth = dt_birth;
        this.ny_age = ny_age;
        this.id_nationality = id_nationality;
        this.sn_passport = sn_passport;
        this.tp_passport = tp_passport;
        this.sn_drivelic = sn_drivelic;
        this.dt_drivelic = dt_drivelic;
        this.tx_dept = tx_dept;
        this.tx_division = tx_division;
        this.gu_geozone = gu_geozone;
        this.gu_sales_man = gu_sales_man;
        this.tx_comments = tx_comments;
        this.url_linkedin = url_linkedin;
        this.url_facebook = url_facebook;
        this.url_twitter = url_twitter;
    }
}