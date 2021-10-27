import React, { useEffect, useState } from 'react';
import HomeLayout from './index.layout';
import { format } from 'date-fns';
import { useDispatch, useSelector } from 'react-redux';
import '../../styles/home.css';

import {
  addTask,
  changeTaskStatus,
  deleteTask,
  reversTasks,
} from '../../redux/slices/home';

export default function Home() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');
  const [isActiveReverse, setIsActiveReverse] = useState(false);
  const { tasks } = useSelector((state) => state.home);
  const [filteredTasks, setFilteredTask] = useState([]);
  const dispatch = useDispatch();

  const hadleAddTask = () => {
    if (title && content) {
      const newTask = {
        id: Date.now(),
        title,
        content,
        timeCrated: format(new Date(), 'dd.MM.yy'),
        status: false,
      };
      dispatch(addTask(newTask));
      setTitle('');
      setContent('');
    }
  };
  const hadleDeleteTask = (id) => {
    dispatch(deleteTask(id));
  };
  const hadleChangeStatus = (id) => {
    dispatch(changeTaskStatus(id));
  };
  const handleReverse = () => {
    dispatch(reversTasks());
    setIsActiveReverse(!isActiveReverse);
  };
  const handleToggleFilter = (category) => {
    setFilterCategory(category);
  };
  const handleSearch = (e) => {
    const ft = tasks.filter(
      (task) =>
        (filterCategory === 'all' && task) ||
        (filterCategory === 'completed' && task.status === true) ||
        (filterCategory === 'uncompleted' && task.status === false)
    );
    if (e.target.value.length) {
      setFilteredTask(
        ft.filter(
          (task) =>
            task.title.toLowerCase().includes(e.target.value.toLowerCase()) ||
            task.content.toLowerCase().includes(e.target.value.toLowerCase()) ||
            task.timeCrated.toLowerCase().includes(e.target.value.toLowerCase())
        )
      );
    } else {
      setFilteredTask(ft);
    }
  };

  useEffect(() => {
    setFilteredTask(
      tasks.filter(
        (task) =>
          (filterCategory === 'all' && task) ||
          (filterCategory === 'completed' && task.status === true) ||
          (filterCategory === 'uncompleted' && task.status === false)
      )
    );
  }, [filterCategory, tasks]);

  return (
    <HomeLayout
      hadleAddTask={hadleAddTask}
      tasks={filteredTasks}
      title={title}
      setTitle={setTitle}
      content={content}
      setContent={setContent}
      hadleDeleteTask={hadleDeleteTask}
      hadleChangeStatus={hadleChangeStatus}
      handleReverse={handleReverse}
      handleToggleFilter={handleToggleFilter}
      filterCategory={filterCategory}
      isActiveRevers={isActiveReverse}
      handleSearch={handleSearch}
    />
  );
}
