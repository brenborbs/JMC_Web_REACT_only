import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Layout from './hoc/layout';

import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Sample from './components/Sample';
import Overview_DD from './components/OverviewDD';
import Overview_PS from './components/OverviewPS';
import Overview_PT from './components/OverviewPT';
import Overview_TS from './components/OverviewTS';
import Overview_NB from './components/OverviewNB';
import Overview_CN from './components/OverviewCN';
import Overview_SV from './components/OverviewSV';
import Overview_NBPS from './components/OverviewNBPS';
import Page404 from './hoc/404';

import Paint from './components/Paints';
import PaintContent from './components/Content/paintContent';
import FeatureContent from './components/Content/featuredContent';

class App extends Component {
  render() {
    return (
      <Layout>
        <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about_us' exact component={About} />
        <Route path='/services' exact component={Services} />
        <Route path='/contact' exact component={Contact} />
        <Route path='/report' exact component={Sample} />
        <Route path='/blog' exact component={Paint} />
        <Route path='/blog/:id' exact component={PaintContent} />
        <Route path='/blog/feature/:id' exact component={FeatureContent} />
        <Route path='/services/overview_drydockings' exact component={Overview_DD} />
      <Route path='/services/overview_preSurveys' exact component={Overview_PS} />
      <Route path='/services/overview_paintTechnology' exact component={Overview_PT} />
      <Route path='/services/overview_tankSurveys' exact component={Overview_TS} />
      <Route path='/services/overview_newBuildings' exact component={Overview_NB} />
      <Route path='/services/overview_consulting' exact component={Overview_CN} />
      <Route path='/services/overview_in-service' exact component={Overview_SV} />
      <Route path='/services/overview_newBuild-PaintSurvey' exact component={Overview_NBPS} />
      <Route component={Page404} />
        </Switch>
      </Layout>
    );
  }
}

export default App;
