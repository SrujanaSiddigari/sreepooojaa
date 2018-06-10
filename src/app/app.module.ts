import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SliderComponent } from './home/slider/slider.component';
import { PoojalistComponent } from './home/poojalist/poojalist.component';
import { PoojaitemComponent } from './home/poojalist/poojaitem/poojaitem.component';
import { PoojacategoriesComponent } from './poojacategories/poojacategories.component';
import { PoojaItemComponent } from './poojacategories/pooja-item/pooja-item.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ContactusComponent } from './contactus/contactus.component';
import { Header1Component } from './header1/header1.component';
import { Header2Component } from './header2/header2.component';
import { Footer1Component } from './footer1/footer1.component';
import { Footer2Component } from './footer2/footer2.component';
import { PoojaDetailsComponent } from './pooja-details/pooja-details.component';
import { BooknowComponent } from './booknow/booknow.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { EditprofileComponent } from './userprofile/editprofile/editprofile.component';
import { ChangepasswordComponent } from './userprofile/changepassword/changepassword.component';
import { MyorderComponent } from './userprofile/myorder/myorder.component';
import { LogoutComponent } from './userprofile/logout/logout.component';
import { Routes, RouterModule } from '@angular/router';
import { GetInTouchComponent } from './contactus/get-in-touch/get-in-touch.component';
import { ContactoptionComponent } from './contactus/contactoption/contactoption.component';
import { ImageComponent } from './contactus/image/image.component';
import { LocationComponent } from './contactus/location/location.component';
const approot: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},  
  {path:'Contactus',component:ContactusComponent},
  {path:'poojadetails',component:PoojaDetailsComponent}
 /* {path:'apppoojs',component:AllPoojaCategoriesComponent},
  {path:'festivalpoojas',component:FestivalPoojaItemsComponent},
  {path:'LifeStepsI',component:LifeStepsItemsComponent},
  {path:'OccasionalPooja',component:OccasionalPoojaItemsComponent},
  {path:'SpecialPooja',component:SpecialPoojaItemsComponent},
  {path:'allpunyakshetrams',component:AllPunyakshetramCategoryItemsComponent},
  {path:'riverpunyakshetrams',component:RiverItemsComponent},
  {path:'shaktipeetams',component:ShaktipeetamsItemsComponent},
  {path:'Contactuspage',component:ContactuspageComponent},
  {path:'poojadetails/:poojaId',component:PoojadetailsComponent},
  {path:'Punyakeshetramdetails',component:PunyakeshetramdetailsComponent}*/

]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SliderComponent,
    PoojalistComponent,
    PoojaitemComponent,
    PoojacategoriesComponent,
    PoojaItemComponent,
    RegisterComponent,
    LoginComponent,
    ContactusComponent,
    Header1Component,
    Header2Component,
    Footer1Component,
    Footer2Component,
    PoojaDetailsComponent,
    BooknowComponent,
    UserprofileComponent,
    EditprofileComponent,
    ChangepasswordComponent,
    MyorderComponent,
    LogoutComponent,
    GetInTouchComponent,
    ContactoptionComponent,
    ImageComponent,
    LocationComponent
  ],
  imports: [
    BrowserModule,FormsModule,HttpClientModule,
    RouterModule.forRoot(approot, {useHash:true})

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
