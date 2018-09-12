import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableauComponent } from './components/tableau/tableau.component';
import { TotalPipe } from './pipes/total.pipe';
import { LocalCurrencyPipe } from './pipes/local-currency.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [TableauComponent, TotalPipe, LocalCurrencyPipe],
  exports: [TableauComponent, TotalPipe, LocalCurrencyPipe]
})
export class SharedModule {}
