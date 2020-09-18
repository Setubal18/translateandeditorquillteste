import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextFormComponent } from './text-form.component';
import { QuillModule } from 'ngx-quill';
import { TranslateModule } from '@ngx-translate/core';



@NgModule({
  declarations: [TextFormComponent],
  imports: [
    CommonModule,
    QuillModule,
    TranslateModule
  ],
  exports: [TextFormComponent]
})
export class TextFormModule { }
