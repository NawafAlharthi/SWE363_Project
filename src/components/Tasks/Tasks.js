import React, { useState, useEffect } from 'react';
import Navbar from '../common/Navbar';
import AnimatedContainer from '../common/AnimatedContainer';
import * as S from './Tasks.styles';
import api from '../../config/api';

const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState(null);
  const [isAddTaskModalOpen, setIsAddTaskModalOpen] = useState(false);
  const [isEditTaskModalOpen, setIsEditTaskModalOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const [newTask, setNewTask] = useState({
    title: '',
    description: '',
    dueDate: '',
    priority: 'medium'
  });

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await api.get('/tasks');
      setTasks(response.data);
    } catch (err) {
      setError('Failed to load tasks');
    }
  };

  const handleAddTask = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('/tasks', newTask);
      setTasks(prev => [...prev, response.data]);
      setIsAddTaskModalOpen(false);
      setNewTask({
        title: '',
        description: '',
        dueDate: '',
        priority: 'medium'
      });
    } catch (err) {
      setError('Failed to add task');
    }
  };

  const handleEditTask = async (e) => {
    e.preventDefault();
    try {
      const response = await api.put(`/tasks/${selectedTask._id}`, selectedTask);
      setTasks(prev => prev.map(task => 
        task._id === selectedTask._id ? response.data : task
      ));
      setIsEditTaskModalOpen(false);
      setSelectedTask(null);
    } catch (err) {
      setError('Failed to update task');
    }
  };

  const handleDeleteTask = async (taskId) => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      try {
        await api.delete(`/tasks/${taskId}`);
        setTasks(prev => prev.filter(task => task._id !== taskId));
      } catch (err) {
        setError('Failed to delete task');
      }
    }
  };

  const handleTaskStatusChange = async (taskId, completed) => {
    try {
      const response = await api.put(`/tasks/${taskId}`, { completed });
      setTasks(prev => prev.map(task => 
        task._id === taskId ? response.data : task
      ));
    } catch (err) {
      setError('Failed to update task status');
    }
  };

  return (
    <>
      <Navbar isLoggedIn={true} />
      <S.Container>
        <AnimatedContainer>
          <S.Breadcrumbs>
            <S.BreadcrumbLink href="/dashboard">Dashboard</S.BreadcrumbLink>
            <S.BreadcrumbSeparator>›</S.BreadcrumbSeparator>
            <S.BreadcrumbLink href="/tasks">Tasks</S.BreadcrumbLink>
          </S.Breadcrumbs>
        </AnimatedContainer>

        <AnimatedContainer delay="0.1s">
          <S.PageTitle>My Tasks</S.PageTitle>
        </AnimatedContainer>

        {error && (
          <AnimatedContainer delay="0.2s">
            <S.ErrorMessage>{error}</S.ErrorMessage>
          </AnimatedContainer>
        )}

        <AnimatedContainer delay="0.2s">
          <S.Button onClick={() => setIsAddTaskModalOpen(true)}>
            Add New Task
          </S.Button>
        </AnimatedContainer>

        {tasks.length === 0 ? (
          <AnimatedContainer delay="0.3s">
            <S.InfoMessage>No tasks yet. Create your first task!</S.InfoMessage>
          </AnimatedContainer>
        ) : (
          <AnimatedContainer delay="0.3s">
            <S.TaskList>
              {tasks.map((task) => (
                <S.TaskItem key={task._id}>
                  <S.TaskCheckbox
                    type="checkbox"
                    checked={task.completed}
                    onChange={(e) => handleTaskStatusChange(task._id, e.target.checked)}
                  />
                  <S.TaskContent>
                    <S.TaskTitle completed={task.completed}>
                      {task.title}
                    </S.TaskTitle>
                    {task.description && (
                      <S.TaskDescription>{task.description}</S.TaskDescription>
                    )}
                    <S.TaskMeta>
                      <S.TaskPriority priority={task.priority}>
                        {task.priority}
                      </S.TaskPriority>
                      {task.dueDate && (
                        <S.TaskDueDate>
                          Due: {new Date(task.dueDate).toLocaleDateString()}
                        </S.TaskDueDate>
                      )}
                    </S.TaskMeta>
                  </S.TaskContent>
                  <S.TaskActions>
                    <S.ActionButton
                      onClick={() => {
                        setSelectedTask(task);
                        setIsEditTaskModalOpen(true);
                      }}
                    >
                      Edit
                    </S.ActionButton>
                    <S.ActionButton
                      onClick={() => handleDeleteTask(task._id)}
                      style={{ backgroundColor: '#dc3545' }}
                    >
                      Delete
                    </S.ActionButton>
                  </S.TaskActions>
                </S.TaskItem>
              ))}
            </S.TaskList>
          </AnimatedContainer>
        )}

        {/* Add Task Modal */}
        {isAddTaskModalOpen && (
          <S.Modal>
            <S.ModalContent>
              <h2>Add New Task</h2>
              <form onSubmit={handleAddTask}>
                <S.FormGroup>
                  <label>Title</label>
                  <S.Input
                    value={newTask.title}
                    onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
                    required
                  />
                </S.FormGroup>

                <S.FormGroup>
                  <label>Description</label>
                  <S.TextArea
                    value={newTask.description}
                    onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
                  />
                </S.FormGroup>

                <S.FormGroup>
                  <label>Due Date</label>
                  <S.Input
                    type="date"
                    value={newTask.dueDate}
                    onChange={(e) => setNewTask({ ...newTask, dueDate: e.target.value })}
                  />
                </S.FormGroup>

                <S.FormGroup>
                  <label>Priority</label>
                  <S.Select
                    value={newTask.priority}
                    onChange={(e) => setNewTask({ ...newTask, priority: e.target.value })}
                  >
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                  </S.Select>
                </S.FormGroup>

                <S.ButtonGroup>
                  <S.Button type="submit">Add Task</S.Button>
                  <S.Button type="button" onClick={() => setIsAddTaskModalOpen(false)}>
                    Cancel
                  </S.Button>
                </S.ButtonGroup>
              </form>
            </S.ModalContent>
          </S.Modal>
        )}

        {/* Edit Task Modal */}
        {isEditTaskModalOpen && selectedTask && (
          <S.Modal>
            <S.ModalContent>
              <h2>Edit Task</h2>
              <form onSubmit={handleEditTask}>
                <S.FormGroup>
                  <label>Title</label>
                  <S.Input
                    value={selectedTask.title}
                    onChange={(e) => setSelectedTask({ ...selectedTask, title: e.target.value })}
                    required
                  />
                </S.FormGroup>

                <S.FormGroup>
                  <label>Description</label>
                  <S.TextArea
                    value={selectedTask.description}
                    onChange={(e) => setSelectedTask({ ...selectedTask, description: e.target.value })}
                  />
                </S.FormGroup>

                <S.FormGroup>
                  <label>Due Date</label>
                  <S.Input
                    type="date"
                    value={selectedTask.dueDate}
                    onChange={(e) => setSelectedTask({ ...selectedTask, dueDate: e.target.value })}
                  />
                </S.FormGroup>

                <S.FormGroup>
                  <label>Priority</label>
                  <S.Select
                    value={selectedTask.priority}
                    onChange={(e) => setSelectedTask({ ...selectedTask, priority: e.target.value })}
                  >
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                  </S.Select>
                </S.FormGroup>

                <S.ButtonGroup>
                  <S.Button type="submit">Save Changes</S.Button>
                  <S.Button type="button" onClick={() => setIsEditTaskModalOpen(false)}>
                    Cancel
                  </S.Button>
                </S.ButtonGroup>
              </form>
            </S.ModalContent>
          </S.Modal>
        )}
      </S.Container>
    </>
  );
};

export default Tasks; 