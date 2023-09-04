const getStudentsByLocation = (students, city) => {
  const arratyObjec = students.filter((function) => function.location === city);
  return arratyObjec;
};

export default getStudentsByLocation;
