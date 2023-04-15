/* eslint-disable prefer-const */
import data from './data';

const name = 'Task';
const typeTask = {
  set: `set${name}`,
  add: `add${name}`,
};
let dataItem = {
  id: 1,
  task: [
    {
      kdTask: 1,
      nmTask: 'Personal Errands',
    }, {
      kdTask: 2,
      nmTask: 'Urgent To-do',
    },
  ],
  allTask: [{
    id: 1,
    kdMember: '2g18-1',
    nmMember: 'Bagus H',
    kdTask: 1,
    task: 'Close Off Case',
    deadline: '2021-06-12',
    deskripsi: 'closing off this case since this application has ben cancelled, No one really',
    selesai: false,
  }, {
    id: 2,
    kdMember: '2g18-1',
    nmMember: 'Bagus H',
    kdTask: 1,
    task: 'Set up Document report for several cases',
    deadline: '2021-06-12',
    deskripsi: 'all cases mush include payment transactions this application has ben cancelled, No one really',
    selesai: false,
  }, {
    id: 3,
    kdMember: '2g18-1',
    nmMember: 'Bagus H',
    kdTask: 2,
    task: 'set up appointment with dr blake',
    deadline: '2021-06-12',
    deskripsi: 'closing off this case since this application has ben cancelled, No one really',
    selesai: false,
  }, {
    id: 4,
    kdMember: '2g18-1',
    nmMember: 'Bagus H',
    kdTask: 1,
    task: 'Contact Mr. caleb vidio reference?',
    deadline: '2021-06-12',
    deskripsi: 'closing off this case since this application has ben cancelled, No one really',
    selesai: true,
  }, {
    id: 5,
    kdMember: '2g18-1',
    nmMember: 'Bagus H',
    kdTask: 2,
    task: 'assign 3 homework to client a',
    deadline: '12-06-2021',
    deskripsi: 'closing off this case since this application has ben cancelled, No one really',
    selesai: true,
  },
  ],
};
function actSetTask(dt) {
  return {
    type: typeTask.set,
    payload: dt,
  };
}
function setTask() {
  return async (dispatch) => {
    try {
      //   const list = await api.allThread();
      // dispatch(actSetTask(dataItem));
      dispatch(actSetTask(data.getData()));
    } catch (error) {
      alert(error.message);
    }
  };
}
function addTask({
  id, kdTask = 1, task, deadline, deskripsi,
}) {
  return async (dispatch) => {
    try {
      dispatch(actSetTask(data.addMsg({
        id,
        kdMember: '2g18-1',
        nmMember: 'Bagus H',
        kdTask,
        task,
        deadline,
        deskripsi,
        selesai: false,
      })));
    } catch (error) {
      alert(error.message);
    }
  };
}
export {
  typeTask,
  setTask,
  addTask,
};
