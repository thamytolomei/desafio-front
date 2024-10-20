import { Component, OnChanges, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-svg-icons',
  standalone: true,
  imports: [CommonModule],
  template: `<span [innerHTML]="svgIcon"></span>`,
  styleUrls: ['./svg-icons.component.scss'],
})
export class SvgIconsComponent implements OnChanges {

  @Input()
  public name?: string;

  public svgIcon: any;

  constructor(
    private httpClient: HttpClient,
    private sanitizer: DomSanitizer,
    ) {
  }

  public ngOnChanges(): void {
    if (!this.name) {
      this.svgIcon = '';
      return;
    }
    this.httpClient
      .get(`assets/img/svgIcons/${this.name}.svg`, { responseType: 'text' })
      .subscribe(value => {
        this.svgIcon = this.sanitizer.bypassSecurityTrustHtml(value);
      });
  }

}
