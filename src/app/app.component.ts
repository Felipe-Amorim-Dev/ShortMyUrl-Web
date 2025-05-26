import { Component, OnDestroy } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { UrlService } from '../services/url.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule],  
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnDestroy{
  title = 'ShortMyUrl';

  private destroyer$ = new Subject<boolean>();

  constructor(
    private urlService: UrlService
  ){}

  urlNova: string = '';
  urlOriginal: string = '';
  messagem_sucesso: string = '';

  copiarUrl(input: HTMLInputElement) {
    navigator.clipboard.writeText(input.value).then(() => {    
    });
  }

  onSubmit(){
    const payload = {urlOriginal: this.urlOriginal};

    document.getElementById("popup")?.classList.remove("hidden");

    this.urlService.encurtar(payload).pipe(takeUntil(this.destroyer$))
      .subscribe(response =>{
        this.urlNova = response.url;
        this.messagem_sucesso = response.menssagem;        
      });
  }

  ngOnDestroy(): void {
    this.destroyer$.next(true);
    this.destroyer$.complete();
  }
}
