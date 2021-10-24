import { createSlice } from '@reduxjs/toolkit';

const homeSlice = createSlice({
  // меняется короткое название редьюсера
  name: 'home',
  initialState: {
    // меняется начальное состояние редьюсера
    tasks: [
      {
        id: 1,
        title: 'My first task',
        content:
          'Do1 something all day blaaa lba lbaa tooo too toodsf sdfsdfdsf.dd d.dd',
        timeCrated: '28.06.21',
        status: false,
      },
      {
        id: 2,
        title: 'My first1 task',
        content:
          'Do2 something all day blaaa lba lbaa tooo too toodsf sdfsdfdsf.dd d.dd',
        timeCrated: '28.06.21',
        status: false,
      },
      {
        id: 3,
        title: 'My first2 task',
        content:
          'Do3 something all day blaaa lba lbaa tooo too toodsf sdfsdfdsf.dd d.dd',
        timeCrated: '28.06.21',
        status: false,
      },
      // {
      //   id: 4,
      //   title: 'My first3 task',
      //   content:
      //     'Do3 something all day blaaa lba lbaa tooo too toodsf sdfsdfdsf.dd d.dd',
      //   timeCrated: '28.06.21',
      //   status: false,
      // },
      // {
      //   id: 5,
      //   title: 'My first4 task',
      //   content:
      //     'Do4 something all day blaaa lba lbaa tooo too toodsf sdfsdfdsf.dd d.dd',
      //   timeCrated: '28.06.21',
      //   status: false,
      // },
      // {
      //   id: 6,
      //   title: 'My first5 task',
      //   content:
      //     'Do5 something all day blaaa lba lbaa tooo too toodsf sdfsdfdsf.dd d.dd',
      //   timeCrated: '28.06.21',
      //   status: false,
      // },
      // {
      //   id: 7,
      //   title: 'My first6 task',
      //   content:
      //     'Do6 something all day blaaa lba lbaa tooo too toodsf sdfsdfdsf.dd d.dd',
      //   timeCrated: '28.06.21',
      //   status: false,
      // },
      // {
      //   id: 8,
      //   title: 'My first7 task',
      //   content:
      //     'Do7 something all day blaaa lba lbaa tooo too toodsf sdfsdfdsf.dd d.dd',
      //   timeCrated: '28.06.21',
      //   status: false,
      // },
      // {
      //   id: 9,
      //   title: 'My first7 task',
      //   content:
      //     'Do7 something all day blaaa lba lbaa tooo too toodsf sdfsdfdsf.dd d.dd',
      //   timeCrated: '28.06.21',
      //   status: false,
      // },
      // {
      //   id: 10,
      //   title: 'My first7 task',
      //   content:
      //     'Do7 something all day blaaa lba lbaa tooo too toodsf sdfsdfdsf.dd d.dd',
      //   timeCrated: '28.06.21',
      //   status: false,
      // },
    ],
  },

  reducers: {
    // меняется набор редьюсеров
    changeTheme: (state) => {
      state.theme = state.theme === 'light' ? 'dark' : 'light';
    },
    addTask: (state, { payload }) => {
      state.tasks.push(payload);
    },
    deleteTask: (state, { payload }) => {
      state.tasks = state.tasks.filter((elem) => elem.id !== payload);
    },
    reversTasks: (state) => {
      state.tasks = state.tasks.reverse();
    },
    changeTaskStatus: (state, { payload }) => {
      state.tasks = state.tasks.map((elem) => {
        if (elem.id === payload) {
          elem.status = !elem.status;
        }
        return elem;
      });
    },
  },
});

// меняются только названия переменных
const homeReducer = homeSlice.reducer;
// экспорт экшенов в компоненты
export const { changeTheme, addTask, deleteTask, reversTasks,changeTaskStatus } =
  homeSlice.actions;
// из слайса мы забираем редьюсер чтобы его экспортировать в стор

export default homeReducer;
