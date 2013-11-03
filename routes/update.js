/*
 * PUT, POST, DELETE http methods for Students
 */
var model = require('../models/student.js');

exports.doPut = function(req, res){
  model.push(req.body.inputString);
  res.send(200, 'Student ' + req.body.inputString + ' added!');
};

exports.doPost = function(req, res){
  res.render('verbs', { verb: 'POST', message: req.body.testString});
};

exports.doDelete = function(req, res){
  if (model.length === 0)
  	res.send(200, 'No students left to remove!');
  else {
	  a = model.splice(req.body.studentIndex, 1);
	  /* above destructive removes 1 student from array at the studentIndex */
	  /* then assigns that student to a */
	  res.send(200, 'Student ' + a + ' removed!');
	}
};
