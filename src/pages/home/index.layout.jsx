import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import * as H from './index.styled';

export default function HomeLayout({
  title,
  setTitle,
  content,
  setContent,
  hadleAddTask,
  tasks,
  hadleDeleteTask,
  hadleChangeStatus,
  handleReverse,
  filterCategory,
  handleToggleFilter,
  isActiveRevers,
  handleSearch,
}) {
  return (
    <H.HomeWrapper>
      <H.LeftContainer>
        <H.Input
          placeholder="Task name"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <H.TextArea
          placeholder="Discription"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></H.TextArea>
        <H.Input placeholder="Search" onChange={handleSearch} />

        <H.BtnLeft onClick={hadleAddTask}> Add new task</H.BtnLeft>
        <H.BtnLeft active={isActiveRevers} onClick={handleReverse}>
          Reverse
        </H.BtnLeft>
        <H.BtnLeft
          active={filterCategory === 'all'}
          onClick={() => handleToggleFilter('all')}
        >
          All
        </H.BtnLeft>
        <H.BtnLeft
          active={filterCategory === 'completed'}
          onClick={() => handleToggleFilter('completed')}
        >
          Completed
        </H.BtnLeft>
        <H.BtnLeft
          active={filterCategory === 'uncompleted'}
          onClick={() => handleToggleFilter('uncompleted')}
        >
          Uncompleted
        </H.BtnLeft>
      </H.LeftContainer>
      <H.RightContainer>
        {tasks.length !== 0 ? (
          <TransitionGroup>
            {tasks.map((task) => (
              <CSSTransition key={task.id} timeout={300} classNames="item">
                <H.Task
                  status={task.status}
                  onDoubleClick={() => hadleChangeStatus(task.id)}
                >
                  <H.TaskHeader>
                    <h1>{task.title}</h1>
                    <p>{task.timeCrated}</p>
                  </H.TaskHeader>
                  <p>{task.content}</p>
                  <button onClick={() => hadleDeleteTask(task.id)}>+</button>
                </H.Task>
              </CSSTransition>
            ))}
          </TransitionGroup>
        ) : (
          <H.IsEmptyText>
            {filterCategory === 'all' && 'You dont have any tasks'}
            {filterCategory === 'completed' &&
              'You dont have any completed tasks'}
            {filterCategory === 'uncompleted' &&
              'You dont have any uncompleted tasks'}
          </H.IsEmptyText>
        )}
      </H.RightContainer>
    </H.HomeWrapper>
  );
}
