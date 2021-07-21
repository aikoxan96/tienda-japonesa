import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  { 
  title = 'tienda-japonesa';

  isNightMode: boolean = false;
 


  darkMode() {
    this.isNightMode = !this.isNightMode;
    document.body.classList.toggle('dark');

  }
  /*public submit(): void {
    this.routes.navigateByUrl(['app-contacto']);
}*/

  /*const numero=1;
  inputcantidad = (numero).val();
  if (inputcantidad: any.lenght: any > 50) {
   (numero).toggle();
   (inputcantidad).focus();
   return false;
}*/

  /*onClick(){
    this.value = !this.value;
    this.toggled.emit(this.value);
  }*/

ColInDoc(){
 // this.add('productos/nbTeaL6PKt6y5AaXQ8g4/soda',{
   
  }
}










