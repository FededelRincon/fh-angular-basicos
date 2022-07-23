import { NgModule } from "@angular/core";
import { ContadorComponent } from "./contador/contador.component";



@NgModule({
    declarations:[
        ContadorComponent,
        // tengo tantos componentes
    ],
    exports:[
        ContadorComponent,
        // pero solo exporto el que uso en otro lado
    ],
    imports:[
        // CommonModule, pero no lo uso aca
    ],
})
export class ContadorModule { }
