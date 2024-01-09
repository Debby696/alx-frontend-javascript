const getListStudentIds = (listStudents) => {
  let listofStudentIds = [];
  if (!(listStudents instanceof Array)) {
    return listofStudentIds;
  }
  listofStudentIds = listStudents.map((student) => student.id);
  return listofStudentIds;
};

export default getListStudentIds;
