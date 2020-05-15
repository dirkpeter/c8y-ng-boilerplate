import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// TODO set types

@Injectable({
  providedIn: 'root'
})
export class BrandingService {
  appStyleVars: HTMLStyleElement;
  favicon: HTMLLinkElement;
  options;

  fontAwesomeLoaded: Promise<void>;
  isFontAwesomeLoaded = false;

  constructor(
    private http: HttpClient,
  ) {
    this.appStyleVars = document.createElement('style');
    document.head.appendChild(this.appStyleVars);

    // this.favicon = document.head.querySelector('[rel=icon]');
  }

  async fetch() {
    this.http
      .get('/apps/public/public-options/options.json')
      .subscribe(res => {
        this.options = res;
        this.setExtraCss();
        this.setBrandingCssVars();
        if (this.options.faviconUrl) {
          this.addFavicon(this.options.faviconUrl);
        }
      }, error => {});
  }

  addCssFile(file) {
    // Create link
    const link = document.createElement('link');
    link.href = file;
    link.rel = 'stylesheet';
    link.type = 'text/css';

    const head = document.getElementsByTagName('head')[0];
    const style = head.getElementsByTagName('style')[0];

    head.insertBefore(link, style);
  }

  addFavicon(faviconUrl: string) {
    const link = document.createElement('link');
    link.href = faviconUrl;
    link.rel = 'icon';
    const head = document.getElementsByTagName('head')[0];
    const style = head.getElementsByTagName('style')[0];
    head.insertBefore(link, style);
  }

  async setExtraCss() {
    if (this.options.extraCssUrls && this.options.extraCssUrls.length) {
      this.options.extraCssUrls.forEach(file => {
        this.addCssFile(file);
      });
    }
  }

  /*
    faviconUrl: "/apps/public/ui-assets-dt/favicon.ico?nocache=08563753891373449"
    globalTitle: "Cloud of Things"
    supportUrl: false
    login_extra_link: {
      url: "https://support.ram.m2m.telekom.com/apps/HelpAndService/index.html",
      label: "Help & Service"
    }
    company_name: "Deutsche Telekom AG"
    docsBaseUrl: "https://support.ram.m2m.telekom.com/apps/HelpAndService/index.html"
  */

  setBrandingCssVars() {
    const vars = [];
    if (this.options.brandingCssVars) {
      for (const cssVar in this.options.brandingCssVars) {
        if (cssVar) {
          vars.push(`--${cssVar}: ${this.options.brandingCssVars[cssVar]};`);
        }
      }
    }

    this.appStyleVars.innerText = `:root {${vars.join('')}}`;
  }
}
