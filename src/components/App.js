import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './home/HomePage';
import AboutUsPage from './about/AboutPage';
import AuthorPage from './author/AuthorPage';
import CoursesPage from './course/CoursesPage';
import Header from './shared/Header';
import Footer from './shared/Footer';
import PageNotFound from './PageNotFound';
import EditCourse from './course/EditCourse';

function App() {
  return (
    <div className='container-fluid'>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/about' component={AboutUsPage} />
        <Route path='/courses' component={CoursesPage} />
        <Route path='/course/:slug' component={EditCourse} />
        <Route path='/course' component={EditCourse} />
        <Route path='/author' component={AuthorPage} />
        <Route component={PageNotFound} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
