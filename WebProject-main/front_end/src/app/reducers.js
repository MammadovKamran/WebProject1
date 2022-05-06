import navigationReducer from './../features/navigation/navigationSlice';
import footerReducer from './../features/footer/footerSlice';
import industriesReducer from './../features/components/industry/industriesSlice';
import careersReducer from './../features/components/career/careersSlice';
import servicesReducer from './../features/components/services/servicesSlice';
import aboutReducer from './../features/components/about/aboutSlice';
import testimonialsReducer from './../features/components/testimonials/testimonialsSlice';
import articlesReducer from './../features/components/articles/articlesSlice';
import commentersReducer from './../features/components/articles/commentersSlice';
import customersReducer from './../features/components/home/customersSlice';
import ordersReducer from './../features/components/home/ordersSlice';
import candidatesReducer from './../features/components/career/candidatesSlice';
import contactsReducer from './../features/components/contact/contactsSlice';
import postReducer from './../features/crm/crmSlices/postSlice';
import authReducer from './../features/crm/crmSlices/authSlice';
import { reducer as reduxFormReducer } from 'redux-form';

const rootReducerSlice = {
  navigation: navigationReducer,
  footer: footerReducer,
  industries: industriesReducer,
  careers: careersReducer,
  services: servicesReducer,
  about: aboutReducer,
  testimonials: testimonialsReducer,
  articles: articlesReducer,
  orders: ordersReducer,
  commenters: commentersReducer,
  customers: customersReducer,
  candidates: candidatesReducer,
  contacts: contactsReducer,
  post: postReducer,
  auth: authReducer,
  form: reduxFormReducer,
};

export default rootReducerSlice;
