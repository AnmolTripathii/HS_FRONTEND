import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone:true,
  imports:[ReactiveFormsModule,CommonModule,RouterLink],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  signupForm:FormGroup=this.fb.group({});
  errorMessage: string | undefined; 
  registrationSuccess: boolean = false; 
  constructor(private service:AuthService,
    private fb:FormBuilder
    
    ){}
    
    ngOnInit() {
      this.signupForm = this.fb.group({
        firstName: ['', [Validators.required, Validators.maxLength(50)]],
        lastName: ['', [Validators.required, Validators.maxLength(50)]],
        email: ['', [Validators.required, Validators.email, Validators.maxLength(100)]],
        phone: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
        password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]],
        confirmPassword: ['', Validators.required],
      }, { Validators: this.passwordMatchValidator });
    }
  
    private passwordMatchValidator(fg: FormGroup) {
      const password = fg.get('password')?.value;
      const confirmPassword = fg.get('confirmPassword')?.value;
      if (password !== confirmPassword) {
        fg.get("confirmPassword")?.setErrors({ passwordMismatch: true });
      } else {
        fg.get('confirmPassword')?.setErrors(null);
      }
    }
  
    // signup() {
    //   console.log(this.signupForm.value);
      
    //   // Check if the form is invalid
    //   if (this.signupForm.invalid) {
    //     // Loop through each form control
    //     Object.keys(this.signupForm.controls).forEach(controlName => {
    //       const control = this.signupForm.get(controlName);
          
    //       // Check if the control is invalid and has been touched
    //       if (control?.invalid && control?.touched) {
    //         // Clear the value of the control
    //         control.setValue('');
    //       }
    //     });
    //     return; // Exit the function if the form is invalid
    //   }
      
    //   // Proceed with signup if the form is valid
    //   this.service.signup(this.signupForm.value).subscribe((response) => {
    //     console.log(response);
    //   });
    // }
   

    signup() {
      // Check if the form is invalid
      if (this.signupForm.invalid) {
        // Loop through each form control
        Object.keys(this.signupForm.controls).forEach(controlName => {
          const control = this.signupForm.get(controlName);
          
          // Check if the control is invalid and has been touched
          if (control?.invalid && control?.touched) {
            // Clear the value of the control
            control.setValue('');
          }
        });
        return; // Exit the function if the form is invalid
      }
      
      // Proceed with signup if the form is valid
      this.service.checkUser(this.signupForm.value).subscribe((response:string) => {
        console.log("after check user");
        console.log(response);
        if (response === 'Email is already registered!') {
   
          // User already exists, display a message to the user
          // You can display the message using Angular template syntax
          this.errorMessage = 'User with this email already exists. Please use a different email .';
        } else if (response ==='Phone number is already registered!') {
          // User does not exist, proceed with signup
          //this.service.signup(this.signupForm.value).subscribe((response) => {
            //console.log(response);
            //if (response === 'User registered successfully!') {
            // Optionally, navigate to a different route or show a success message

            this.errorMessage = 'User with this  phone number already exists. Please use a different phone number.'
            //}
          
        } else if(response ==='User registered successfully!') {

          this.registrationSuccess = true;
        }
      });
    }
    

    getErrorMessage(controlName: string): string[] {
      const control = this.signupForm.get(controlName);
      const errorMessages: string[] = [];
      
      if (control?.errors) { // Using optional chaining to ensure 'errors' is not null
        Object.keys(control.errors).forEach(error => {
          switch (error) {
            case 'required':
              errorMessages.push('This field is required');
              break;
            case 'maxlength':
              errorMessages.push(`Maximum length exceeded (${control.errors?.['maxlength']?.requiredLength} characters required)`);
              break;
            case 'minlength':
              errorMessages.push(`Minimum length not met (${control.errors?.['minlength']?.requiredLength} characters required)`);
              break;
            case 'email':
              errorMessages.push('Invalid email format');
              break;
            case 'passwordMismatch':
              errorMessages.push('Passwords do not match');
              break;
            default:
              break;
          }
        });
      }
      
      return errorMessages;
    }
    
  }