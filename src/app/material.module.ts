import {NgModule} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
imports:[MatCardModule,MatDividerModule,MatProgressBarModule,MatButtonModule],
exports: [MatCardModule,MatDividerModule,MatProgressBarModule,MatButtonModule]
})

export class MaterailModule {}