import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from '../../layers/data-hub/api.service';

@Component({
    selector   : 'app-contact-layout',
    templateUrl: './contact-layout.component.html',
    styleUrls  : ['./contact-layout.component.scss'],
    providers  : [ApiService]
})
export class ContactLayoutComponent implements OnInit {

    componentForm: FormGroup;

    constructor(private formBuilder: FormBuilder, private apiService: ApiService) { }

    ngOnInit(): void {


        this.componentForm = this.formBuilder.group({
            Email  : [null],
            Message: [null]
        });
    }

    submitForm(_FormValues: any): void {
        const email = {
            Email  : _FormValues.Email,
            Message: _FormValues.Message
        };

        this.apiService.postService(email, '/API/contact').subscribe(_Data => {
         console.log('_Data', _Data);
         });
    }

}
