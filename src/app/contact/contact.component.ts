import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  $form: HTMLFormElement | null = document.querySelector('form');

  name = '';
  email = '';
  subject = '';
  message = '';
  newsletter = false;

  htmlFieldClass = ['name', 'email', 'subject'];

  errors: string[] = [];

  onSubmit(): void {
    this.errors = this.validateForm();

    if (this.errors) {
      console.error(
        `Please fix the following errors:\n- ${this.errors.join('\n- ')}`
      );
    } else {
      console.log(
        JSON.stringify({
          name: this.name,
          email: this.email,
          subject: this.subject,
          message: this.message,
          newsletter: this.newsletter,
        })
      );
      this.$form?.reset();
    }
  }

  onCancel(): void {
    this.name = '';
    this.email = '';
    this.subject = '';
    this.message = '';
    this.newsletter = false;
  }

  // Función para validar el formato del email
  private isValidEmail(email: string): boolean {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  }

  private validateForm(): string[] {
    const vErrors: string[] = [];

    //oculto mensajes de error
    const $errorHints = document.querySelectorAll('.error-hint');
    $errorHints.forEach((errorHint) => {
      errorHint.classList.add('hidden');
    });

    this.htmlFieldClass.forEach((field) => {
      if (field === 'email') {
        if (!this.email.trim()) {
          vErrors.push('Email is required.');
          this.addErrorClasses(field);
        } else if (!this.isValidEmail(this.email)) {
          vErrors.push('Invalid email format.');
          this.addErrorClasses(field);
        }
      }

      if (field === 'name' && !this.name.trim()) {
        this.addErrorClasses(field);
        vErrors.push('Name is required.');
      }

      if (field === 'subject' && !this.subject.trim()) {
        this.addErrorClasses(field);
        vErrors.push('Subject is required.');
      }
    });

    return vErrors;
  }

  private addErrorClasses(field: string): void {
    document.querySelector(`input[id=${field}]`)?.classList.add('error');
    document.querySelector('.error-hint.' + field)?.classList.remove('hidden');
  }
}
