import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as courseActions from '../../redux/actions/courseActions';
import * as authorActions from '../../redux/actions/authorActions';
import Form from './FormPage';
//import { newCourse } from '../../../mockServer/mockData';
import CourseList from './courseList';

function EditPage({ courses, authors, loadCourses, loadAuthors }) {
  useEffect(() => {
    if (courses.length === 0) {
      loadCourses().catch((error) => {
        console.error('Loading courses failed' + error);
      });
    }

    if (authors.length === 0) {
      loadAuthors().catch((error) => {
        console.error('Loading authors failed' + error);
      });
    }
  }, []);

  return (
    <div className='mt-5 py-md-5 px-md-4'>
      <h2>Edit Course</h2>
      <CourseList courses={courses} />
    </div>
  );
}

// Redux=>passing pops and connecting store with CoursePage

/* CoursesPage.prototypes = {
  actions: PropTypes.object.isRequired,
  courses: PropTypes.array.isRequired,
}; */

// courses is state.courses => from store
function mapStateToProps({ courses, authors }) {
  return {
    authors,
    courses:
      authors.length === 0
        ? []
        : courses.map((course) => {
            return {
              ...course,
              authorName: authors.find((a) => a.id === course.authorId).name,
            };
          }),
  };
}
// Dispatching actions to store as an Object
//can still be shortned by using named imports for loadCourses and loadAuthors on top
const mapDispatchToProps = {
  loadCourses: courseActions.loadCourses,
  loadAuthors: authorActions.loadAuthors,
};

/* // Dispatching actions as object
const mapDispatchToProps = {
  createCourse:courseActions.createCourse
} */

export default connect(mapStateToProps, mapDispatchToProps)(EditPage);
