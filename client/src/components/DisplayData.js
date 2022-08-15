import React from "react";
import { useQuery, gql } from "@apollo/client";
import { useState } from "react";

const PAGE_SIZE = 30;
const QUERY_ALL_COURSES_WITH_PAGINATION = new gql(`
  query Courses($limit: Int, $offset: Int) {
    courses(limit: $limit, offset: $offset) {
      id
    }
  }
`);

export default function DisplayData() {
  const [page, setPage] = useState(0);
  const { data, loading, error } = useQuery(QUERY_ALL_COURSES_WITH_PAGINATION, {
    variables: {
      limit: PAGE_SIZE,
      offset: page * PAGE_SIZE,
    },
  });
  if (loading || !data) {
    return <h1>"data is loading"</h1>;
  }
  if (error) {
    console.log(error.message);
  }

  return (
    <>
      <nav>
        <button
          disabled={page === 0}
          onClick={() => setPage((prev) => prev - 1)}
        >
          Previous
        </button>
        <span>Page {page + 1}</span>
        <button
          disabled={
            data.courses.length === 0 || data.courses.length < PAGE_SIZE
          }
          onClick={() => setPage((prev) => prev + 1)}
        >
          Next
        </button>
      </nav>
      <ul>
        {data.courses.map((course) => {
          return <li key={course.id}>{course.id}</li>;
        })}
      </ul>
    </>
  );
}
