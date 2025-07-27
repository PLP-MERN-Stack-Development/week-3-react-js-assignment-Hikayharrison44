import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import TaskManager from './TaskManager';
import ApiDemo from './ApiDemo';
import { CheckSquare, Globe, Home } from 'lucide-react';

const MainContent: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <Card className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
        <CardHeader>
          <CardTitle className="text-3xl font-bold">
            React Demo Application
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg opacity-90">
            A comprehensive demonstration of React component architecture, state management, 
            hooks usage, and API integration built with TypeScript and Tailwind CSS.
          </p>
        </CardContent>
      </Card>

      {/* Feature Tabs */}
      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="overview" className="flex items-center space-x-2">
            <Home className="h-4 w-4" />
            <span>Overview</span>
          </TabsTrigger>
          <TabsTrigger value="tasks" className="flex items-center space-x-2">
            <CheckSquare className="h-4 w-4" />
            <span>Task Manager</span>
          </TabsTrigger>
          <TabsTrigger value="api" className="flex items-center space-x-2">
            <Globe className="h-4 w-4" />
            <span>API Demo</span>
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <CheckSquare className="h-5 w-5" />
                  <span>State Management</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Demonstrates useState, useEffect, useContext, and custom hooks 
                  for managing application state and side effects.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Globe className="h-5 w-5" />
                  <span>API Integration</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Fetches data from JSONPlaceholder API with loading states, 
                  error handling, search functionality, and pagination.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Home className="h-5 w-5" />
                  <span>Component Architecture</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Modular, reusable components with proper prop interfaces 
                  and TypeScript integration for type safety.
                </p>
              </CardContent>
            </Card>
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle>Features Implemented</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span>Responsive design with Tailwind CSS</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span>Dark/Light theme toggle with context</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span>Local storage persistence</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span>CRUD operations with task management</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span>API integration with error handling</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span>Search and pagination functionality</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="tasks">
          <TaskManager />
        </TabsContent>
        
        <TabsContent value="api">
          <ApiDemo />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default MainContent;