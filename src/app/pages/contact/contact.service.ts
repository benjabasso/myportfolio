import { Injectable } from '@angular/core';
import emailjs from '@emailjs/browser';
import { environment } from '../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class ContactService {

    async sendEmail(formData: any): Promise<boolean> {
        const templateParams = {
            from_name: formData.name,
            from_email: formData.email,
            message: formData.message
        };

        try {
        await emailjs.send(
            environment.emailJsServiceId,
            environment.emailJsTemplateId,
            templateParams,
            environment.emailJsPublicKey
        );

        return true;

        } catch (error) {
            console.error("Error al enviar email:", error);
            return false;
        }
    }
}
