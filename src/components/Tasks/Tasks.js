import React, { useState, useEffect } from 'react';
import Navbar from '../common/Navbar';
import api from '../../config/api';
import * as S from './Tasks.styles';

const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isAddTaskModalOpen, setIsAddTaskModalOpen] = useState(false);
  const [editingTask, setEditingTask] = useState(null);

  // Fetch tasks when component mounts
  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      setLoading(true);
      const response = await api.get('/tasks');
      setTasks(response.data);
      setLoading(false);
    } catch (err) {
      setError('Failed to load tasks');
      console.error('Error fetching tasks:', err);
      setLoading(false);
    }
  };

  const handleAddTask = async (taskData) => {
    try {
      setLoading(true);
      const response = await api.post('/tasks/add', taskData);
      setTasks(prev => [...prev, response.data]);
      setIsAddTaskModalOpen(false);
      setLoading(false);
    } catch (err) {
      setError('Failed to create task');
      console.error('Error creating task:', err);
      setLoading(false);
    }
  };

  const handleUpdateTask = async (taskId, updates) => {
    try {
      setLoading(true);
      const response = await api.put(`/tasks/${taskId}`, updates);
      setTasks(prev => prev.map(task => 
        task._id === taskId ? response.data : task
      ));
      setEditingTask(null);
      setLoading(false);
    } catch (err) {
      setError('Failed to update task');
      console.error('Error updating task:', err);
      setLoading(false);
    }
  };

  const handleDeleteTask = async (taskId) => {
    if (!window.confirm('Are you sure you want to delete this task?')) return;

    try {
      setLoading(true);
      await api.delete(`/tasks/${taskId}`);
      setTasks(prev => prev.filter(task => task._id !== taskId));
      setLoading(false);
    } catch (err) {
      setError('Failed to delete task');
      console.error('Error deleting task:', err);
      setLoading(false);
    }
  };

  const handleToggleComplete = async (taskId, completed) => {
    try {
      setLoading(true);
      const response = await api.put(`/tasks/${taskId}`, { completed });
      setTasks(prev => prev.map(task => 
        task._id === taskId ? response.data : task
      ));
      setLoading(false);
    } catch (err) {
      setError('Failed to update task');
      console.error('Error updating task:', err);
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar isLoggedIn={true} />
      <S.Container>
        <S.Breadcrumbs>
          <S.BreadcrumbLink href="/dashboard">Dashboard</S.BreadcrumbLink>
          <S.BreadcrumbSeparator>›</S.BreadcrumbSeparator>
          <S.BreadcrumbLink href="/tasks">Tasks</S.BreadcrumbLink>
        </S.Breadcrumbs>

        <S.PageTitle>My Tasks</S.PageTitle>

        {error && (
          <p style={{ color: 'red', marginBottom: '1rem' }}>{error}</p>
        )}

        <S.Button onClick={() => setIsAddTaskModalOpen(true)}>
          Add New Task
        </S.Button>

        {loading ? (
          <p>Loading tasks...</p>
        ) : tasks.length === 0 ? (
          <p>No tasks yet. Create your first task!</p>
        ) : (
          <S.TaskList>
            {tasks.map((task) => (
              <S.TaskItem key={task._id}>
                <S.TaskCheckbox
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => handleToggleComplete(task._id, !task.completed)}
                />
                {editingTask === task._id ? (
                  <S.TaskEditForm onSubmit={(e) => {
                    e.preventDefault();
                    handleUpdateTask(task._id, {
                      title: e.target.title.value,
                      description: e.target.description.value,
                      dueDate: e.target.dueDate.value,
                      priority: e.target.priority.value
                    });
                  }}>
                    <S.Input
                      name="title"
                      defaultValue={task.title}
                      required
                    />
                    <S.TextArea
                      name="description"
                      defaultValue={task.description}
                    />
                    <S.Input
                      name="dueDate"
                      type="date"
                      defaultValue={task.dueDate?.split('T')[0]}
                    />
                    <S.Select
                      name="priority"
                      defaultValue={task.priority}
                    >
                      <option value="low">Low</option>
                      <option value="medium">Medium</option>
                      <option value="high">High</option>
                    </S.Select>
                    <S.Button type="submit" disabled={loading}>
                      Save
                    </S.Button>
                    <S.Button 
                      type="button" 
                      onClick={() => setEditingTask(null)}
                    >
                      Cancel
                    </S.Button>
                  </S.TaskEditForm>
                ) : (
                  <>
                    <S.TaskContent completed={task.completed}>
                      <S.TaskTitle>{task.title}</S.TaskTitle>
                      {task.description && (
                        <S.TaskDescription>{task.description}</S.TaskDescription>
                      )}
                      <S.TaskMeta>
                        {task.dueDate && (
                          <S.TaskDueDate>
                            Due: {new Date(task.dueDate).toLocaleDateString()}
                          </S.TaskDueDate>
                        )}
                        <S.TaskPriority priority={task.priority}>
                          {task.priority}
                        </S.TaskPriority>
                      </S.TaskMeta>
                    </S.TaskContent>
                    <S.TaskActions>
                      <S.Button onClick={() => setEditingTask(task._id)}>
                        Edit
                      </S.Button>
                      <S.Button onClick={() => handleDeleteTask(task._id)}>
                        Delete
                      </S.Button>
                    </S.TaskActions>
                  </>
                )}
              </S.TaskItem>
            ))}
          </S.TaskList>
        )}

        {/* Add Task Modal */}
        {isAddTaskModalOpen && (
          <S.Modal>
            <S.ModalContent>
              <h2>Add New Task</h2>
              <form onSubmit={(e) => {
                e.preventDefault();
                handleAddTask({
                  title: e.target.title.value,
                  description: e.target.description.value,
                  dueDate: e.target.dueDate.value,
                  priority: e.target.priority.value,
                  completed: false
                });
              }}>
                <S.Input
                  name="title"
                  placeholder="Task Title"
                  required
                />
                <S.TextArea
                  name="description"
                  placeholder="Task Description"
                />
                <S.Input
                  name="dueDate"
                  type="date"
                />
                <S.Select name="priority">
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </S.Select>
                <S.Button type="submit" disabled={loading}>
                  {loading ? 'Creating...' : 'Create Task'}
                </S.Button>
                <S.Button 
                  type="button" 
                  onClick={() => setIsAddTaskModalOpen(false)}
                >
                  Cancel
                </S.Button>
              </form>
            </S.ModalContent>
          </S.Modal>
        )}
      </S.Container>
    </>
  );
};

export default Tasks; 