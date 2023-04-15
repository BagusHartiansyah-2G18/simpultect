/* eslint-disable prefer-const */
import data from './data';

const listType = {
  set: 'setItem',
  add: 'addItem',
};
let dataItem = {
  id: 1,
  nmGroup: '109220-Naturalization',
  paticipants: [
    {
      kdMember: '2g18-1',
      nmMember: 'Bagus H',
    }, {
      kdMember: '2g18-2',
      nmMember: 'mary hilda',
    }, {
      kdMember: '2g18-3',
      nmMember: 'Obaidullah Amarkhil',
    },
  ],
  inbox: [
    {
      id: 1,
      kdMember: '2g18-1',
      nmMember: 'Bagus H',
      date: 'june 08, 2021',
      time: '19:32',
      msg: 'No worries, it will be complate ASAP. I`ve asked him yesterday',
      read: true,
      today: false,
      balas: {},
    }, {
      id: 2,
      kdMember: '2g18-2',
      nmMember: 'mary Hilda',
      date: 'june 08, 2021',
      time: '19:32',
      msg: 'No worries, it will be complate ASAP. I`ve asked him yesterday No worries, it will be complate ASAP. I`ve asked him yesterday No worries, it will be complate ASAP. I`ve asked him yesterday',
      read: true,
      today: true,
      balas: {},
    }, {
      id: 3,
      kdMember: '2g18-1',
      nmMember: 'Bagus H',
      date: 'june 08, 2021',
      time: '19:32',
      msg: 'pleasae contact marry',
      read: true,
      today: false,
      balas: {},
    }, {
      id: 4,
      kdMember: '2g18-3',
      nmMember: 'Obaidullah Amarkhil',
      date: 'june 08, 2021',
      time: '19:32',
      msg: 'pleasae contact marry',
      read: false,
      today: false,
      balas: {},
    },
  ],
};
function actSetItem(item) {
  return {
    type: listType.set,
    payload: {
      item,
    },
  };
}
function setItem({ id }) {
  return async (dispatch) => {
    try {
      //   const list = await api.allThread();
      dispatch(actSetItem(data.getData()));
    } catch (error) {
      alert(error.message);
    }
  };
}

function actAddList(item) {
  return {
    type: listType.add,
    payload: item,
  };
}
function addItem({ msg, balas, id }) {
  return async (dispatch) => {
    try {
      const date = new Date();
      dispatch(actSetItem(data.addMsg({
        id,
        kdMember: '2g18-1',
        nmMember: 'Bagus H',
        date: `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`,
        time: `${date.getHours()}:${date.getMinutes()}`,
        msg,
        read: false,
        today: false,
        balas,
      })));
    } catch (error) {
      alert(error.message);
    }
  };
}

export {
  listType,
  setItem,
  addItem,
};
