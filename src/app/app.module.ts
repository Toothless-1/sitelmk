import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LeftNavComponent } from './left-nav/left-nav.component';
import { ContentComponent } from './content/content.component';
import { Num1Component } from './num1/num1.component';
import { FormsModule } from '@angular/forms';
import { Num4Component } from './num4/num4.component';
import { Page2Component } from './page2/page2.component';
import { AboutProjectComponent } from './about-project/about-project.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ChapterListComponent } from './chapter-list/chapter-list.component';
import { ChapterComponent } from './chapter/chapter.component';
import { TaskComponent } from './task/task.component';
import { TestComponent } from './test/test.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LeftNavComponent,
    ContentComponent,
    ChapterComponent,
    Num1Component,
    Num4Component,
    Page2Component,
    AboutProjectComponent,
    ContactsComponent,
    ChapterListComponent,
    TaskComponent,
    TestComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
