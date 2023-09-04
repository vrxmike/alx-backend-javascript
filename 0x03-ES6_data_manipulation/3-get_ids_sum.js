const getStudentIdsSum = (students) => {
  const id = students.reduce(
    (acc, value) => acc + value.id, 0,
  );
};

export default getStudentIdsSum;
