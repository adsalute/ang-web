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
  MatInputModule,
  MatPaginatorModule,
  MatCardModule,
  MatSortModule,
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
    MatTableModule,
    MatPaginatorModule,
    MatCardModule,
    MatSortModule
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
    MatTableModule,
    MatPaginatorModule,
    MatCardModule,
    MatSortModule
  ]
})
export class MaterialModule {}