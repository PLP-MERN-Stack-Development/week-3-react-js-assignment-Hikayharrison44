import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Trash2, Plus } from 'lucide-react';
import { useLocalStorage } from '@/hooks/useLocalStorage';

interface Task {
  id: string;
  text: string;
  completed: boolean;
  createdAt: Date;
}

type FilterType = 'all' | 'active' | 'completed';

const TaskManager: React.FC = () => {
  const [tasks, setTasks] = useLocalStorage<Task[]>('tasks', []);
  const [newTask, setNewTask] = useState('');
  const [filter, setFilter] = useState<FilterType>('all');

  const addTask = () => {
    if (newTask.trim()) {
      const task: Task = {
        id: Date.now().toString(),
        text: newTask.trim(),
        completed: false,
        createdAt: new Date(),
      };
      setTasks([...tasks, task]);
      setNewTask('');
    }
  };

  const toggleTask = (id: string) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id: string) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === 'active') return !task.completed;
    if (filter === 'completed') return task.completed;
    return true;
  });

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Task Manager</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex space-x-2">
          <Input
            placeholder="Add a new task..."
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && addTask()}
          />
          <Button onClick={addTask}>
            <Plus className="h-4 w-4" />
          </Button>
        </div>
        
        <div className="flex space-x-2">
          {(['all', 'active', 'completed'] as FilterType[]).map(f => (
            <Button
              key={f}
              variant={filter === f ? 'default' : 'outline'}
              size="sm"
              onClick={() => setFilter(f)}
            >
              {f.charAt(0).toUpperCase() + f.slice(1)}
            </Button>
          ))}
        </div>
        
        <div className="space-y-2">
          {filteredTasks.map(task => (
            <div key={task.id} className="flex items-center space-x-2 p-2 border rounded">
              <Checkbox
                checked={task.completed}
                onCheckedChange={() => toggleTask(task.id)}
              />
              <span className={`flex-1 ${task.completed ? 'line-through text-gray-500' : ''}`}>
                {task.text}
              </span>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => deleteTask(task.id)}
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
        
        <div className="text-sm text-gray-500">
          {tasks.length} total, {tasks.filter(t => !t.completed).length} active
        </div>
      </CardContent>
    </Card>
  );
};

export default TaskManager;