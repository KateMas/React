import React from 'react';
import ReactDom from 'react-dom';

import {Route, Router, hashHistory} from 'react-router';

import PageHome from './pages/PageHome';
import PageAboutUs from './pages/PageAboutUs';
import PageProperty from './pages/PageProperty';
import PageBlog from './pages/PageBlog';
import PageContacts from './pages/PageContacts';


ReactDom.render(
    <Router history = {hashHistory}>
        <Route path="/" component={PageHome} />
        <Route path="about-us" component={PageAboutUs} />
        <Route path="property" component={PageProperty} />
        <Route path="blog" component={PageBlog} />
        <Route path="contacts" component={PageContacts} />
    </Router>,
    document.getElementById('app')
)