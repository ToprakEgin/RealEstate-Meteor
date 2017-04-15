BlazeLayout.setRoot('body');

FlowRouter.route('/', {
    action: function(params, queryParams) {
      BlazeLayout.render('layoutFull', {page: 'homepage'});
    }
});
