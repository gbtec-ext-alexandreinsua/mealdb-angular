import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  $form: HTMLFormElement | null = document.querySelector('form');

  /*
  Para poder implementar la funcionalidad con la tecnología de los Formularios reactivos
  nesitamos crear un objeto que representa los datos y que se conoce como MODELO.
  Vamos a agrupar los datos en un objecto completo, para lo que se crea un grupo de campos de formulario.
  para crear un grupo, voy a usar una instancia del constructor de formularios.
  Además, a estos campos se le puede agregar validaciones a través del objecto validators
  */
  constructor(private fb: FormBuilder) {}

  contactForm = this.fb.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    subject: ['', [Validators.required]],
    message: [''],
    newsletter: [''],
  });

  /* Este modelo se enlaza al html con las directivas formGrup para todo el formulario y formControlName para cada campo */

  htmlFieldClass = ['name', 'email', 'subject'];

  errors: string[] = [];

  onSubmit(): void {
    console.log(this.contactForm.value);
  }

  onCancel(): void {
    this.contactForm.reset();
  }

  isValid(field: string): boolean {
    return !(
      this.contactForm.get(field)?.invalid &&
      this.contactForm.get(field)?.touched
    );
  }
}
