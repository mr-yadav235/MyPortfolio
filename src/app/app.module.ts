import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ExperienceComponent } from './experience/experience.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';
import { EducationComponent } from './education/education.component';
import { ContactComponent } from './contact/contact.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';

const appRoutes: Routes = [
  {
    path: 'about',
    component: AboutComponent,
    data: { title: 'Create Book' }
  },
  {
    path: 'experience',
    component: ExperienceComponent,
    data: { title: 'Home' }
  },
  {
    path: 'projects',
    component: ProjectsComponent,
    data: { title: 'Admin Panel' }
  },
  {
    path: 'skills',
    component: SkillsComponent,
    data: { title: 'Book List' }
  },
  {
    path: 'education',
    component: EducationComponent,
    data: { title: 'Company List' }
  },
  {
    path: 'contact',
    component: ContactComponent,
    data: { title: 'Login' }
  },
 
  { path: '',
    redirectTo: '/about',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ExperienceComponent,
    ProjectsComponent,
    SkillsComponent,
    EducationComponent,
    ContactComponent,
    NavBarComponent,
    FooterComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
        apiKey:'AIzaSyDGPx8eImmr4FyTwJpB1PSzYjQRYN13pj8'
    }),
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
