const { fakeCourses, fakeAuthors } = require("../data/fetch");
const _ = require("lodash");

const resolvers = {
  Query: {
    //courses resolver
    courses: (_parent, args) => {
      if (fakeCourses.length == 0)
        return { message: "An error occured, no input data available!" };

      if (args.limit != undefined && args.offset != undefined) {
        const listCourses = _(fakeCourses)
          .slice(args.offset)
          .take(args.limit)
          .value();
        console.log(`returning ${listCourses.length} elements`);
        return { courses: listCourses };
      }
      return { courses: fakeCourses };
    },
    course: (_parent, args) => {
      const id = args.id;
      const course = _.find(fakeCourses, { id: id });
      return course;
    },

    //authors resolver
    authors: () => {
      return fakeAuthors;
    },
    author: (_parent, args) => {
      const id = args.id;
      const author = _.find(fakeAuthors, { id: id });
      return author;
    },
  },
  Course: {
    author: (parent) => {
      const author = _.find(fakeAuthors, { id: parent.author });
      return author;
    },
  },
  Author: {
    courses: (parent) => {
      const listCourses = _.filter(fakeCourses, { author: parent.id });
      // console.log(
      //   `number of courses found for this author: ${listCourses.length}`
      // );
      return listCourses;
    },
  },

  CoursesResult: {
    __resolveType(obj) {
      if (obj.courses) {
        return "CoursesFetchResult";
      }
      //there was an error
      if (obj.message) return "CoursesErrorResult";

      return null;
    },
  },
};

module.exports = { resolvers };
