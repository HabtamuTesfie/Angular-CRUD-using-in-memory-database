import { Component, OnInit } from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent 
{
  value = 0;
  loading = true;

  constructor() {
    this.loadContent();
  }

  loadContent() 
  {
    this.loading = true;
    const subs$: Subscription = interval(200).subscribe(res => 
    {
      this.value = this.value + 10;
      if(this.value === 120) {
        subs$.unsubscribe();
        this.loading = false;
        this.value = 0;
        console.log('Ha terminado');
      }
    });
  }
}
