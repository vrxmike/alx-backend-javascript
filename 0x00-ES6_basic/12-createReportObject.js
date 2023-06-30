export default function createReportObject(employessList) {
  return {
    allEmployeesList,
      ...employeesList,
    },
    getNumberOfDepartments(employeesList) {
      return Object.keys(employeesList).length;
    };
  };
}
