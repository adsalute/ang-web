import {NgModule} from '@angular/core';
import {
  MatSidenavModule,
  MatTableModule,
  MatIconModule,
  MatListModule,
  MatToolbarModule,
  MatButtonModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule
} from '@angular/material';

  
  
@NgModule({
  imports: [
    MatSidenavModule,
    MatTableModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  exports: [
    MatSidenavModule,
    MatTableModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
  ]
})
export class MaterialModule {}