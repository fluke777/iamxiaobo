// ==========================================================================
// Project:   Demo - mainPage
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals Demo */

// This page describes the main user interface for your application.  
Demo.mainPage = SC.Page.design({

  // The main pane is made visible on screen as soon as your app is loaded.
  // Add childViews to this pane for views to display immediately on page 
  // load.
  mainPane: SC.MainPane.design({
    childViews: 'add graph'.w(),
	add: SC.ButtonView.design({
	  layout: { top: 20, right: 40, height: 24, width: 100 },
	  title: 'AddData',
	  action: 'addRandomData',
	  target: 'Demo.graphController'
	}),
    graph: Flot.GraphView.design({
	  layout: { top: 100, right: 40, bottom: 100, left: 40 } ,
	  dataBinding: 'Demo.graphController.arrangedObjects' ,
	  optionsBinding: 'Demo.graphController.options'
	})
 
  })

});
