import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ContactService } from './contact.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact {

    formData = {
      name: '',
      email: '',
      message: ''
    };

    sending = false;
    successMessage = '';
    errorMessage = '';

    constructor(private contactService: ContactService) {}

    async sendForm() {
      this.successMessage = '';
      this.errorMessage = '';
      this.sending = true;

      const ok = await this.contactService.sendEmail(this.formData);

      this.sending = false;

      if (ok) {
        this.successMessage = 'Mensaje enviado correctamente';
        this.formData = { name: '', email: '', message: '' };
      } else {
        this.errorMessage = 'Hubo un error, intentá nuevamente.';
      }
    }
}
