import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutProjectComponent } from './about-project/about-project.component';
import { ChapterComponent } from './chapter/chapter.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ContentComponent } from './content/content.component';
import { Num1Component } from './num1/num1.component';
import { Num4Component } from './num4/num4.component';
import { Page2Component } from './page2/page2.component';
import { TaskComponent } from './task/task.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  {
    path: 'chapter/:id',
    component: ChapterComponent,
  },
  { path: 'task/:id', component: TaskComponent },
  { path: '', component: ContentComponent },
  { path: 'task', component: TaskComponent },
  { path: 'num4', component: Num4Component },
  { path: 'page2', component: Page2Component },
  { path: 'aboutproject', component: AboutProjectComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'test', component: TestComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
