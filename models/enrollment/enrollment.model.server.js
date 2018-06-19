var mongoose = require('mongoose');
var enrollmentSchema = require('./enrollment.schema.server');
var enrollmentModel = mongoose.model(
    'EnrollmentModel',
    enrollmentSchema
);

function enrollStudentInSection(enrollment) {
    return enrollmentModel.create(enrollment);
}

function removeStudentFromSection(removal) {
    return enrollmentModel.remove(removal);
}

function findSectionsForStudent(studentId) {
    return enrollmentModel
        .find({student: studentId})
        .populate('section')
        .exec();
}

module.exports = {
    enrollStudentInSection: enrollStudentInSection,
    removeStudentFromSection: removeStudentFromSection,
    findSectionsForStudent: findSectionsForStudent
};