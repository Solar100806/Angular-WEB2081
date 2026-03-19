import { Routes } from '@angular/router';
import { Contact } from './pages/contact/contact';
import { Home } from './home/home';
import { About } from './pages/about/about';
import { Products } from './pages/products/products';
import { ProductDetail } from './pages/product-detail/product-detail';
import { Stories } from './pages/stories/stories';
import { AddStory } from './pages/add-story/add-story';
import { AddProduct } from './pages/add-product/add-product';


export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'contact',
    component: Contact,
  },
  {
    path: 'about',
    component: About,
  },
  {
    path: 'products',
    component: Products,
  },
  {
    path: 'products/:slug',
    component: ProductDetail,
  },
  {
    path: 'stories',
    component: Stories,
  },
  {
    path: 'add-story',
    component: AddStory,
  },
  {
    path: 'add-product',
    component: AddProduct,
  }
];
