import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ScrollArea } from '@/components/ui/scroll-area';

const MongoDBDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('crud');

  return (
    <div className="container mx-auto p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold">MongoDB Dashboard</h1>
        <p className="text-muted-foreground">Database queries and indexing demonstration</p>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="crud">CRUD Operations</TabsTrigger>
          <TabsTrigger value="queries">Advanced Queries</TabsTrigger>
          <TabsTrigger value="aggregation">Aggregation</TabsTrigger>
          <TabsTrigger value="indexing">Indexing</TabsTrigger>
        </TabsList>

        <TabsContent value="crud" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Basic CRUD Operations</CardTitle>
              <CardDescription>Create, Read, Update, Delete operations</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <h4 className="font-semibold text-blue-800">Create (Insert)</h4>
                  <code className="text-sm text-blue-700 block mt-2">
                    db.books.insertOne({{title: "New Book", author: "Author Name"}})
                  </code>
                </div>
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                  <h4 className="font-semibold text-green-800">Read (Find)</h4>
                  <code className="text-sm text-green-700 block mt-2">
                    db.books.find({{genre: "Fiction"}})
                  </code>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="indexing" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Database Indexing</CardTitle>
              <CardDescription>Performance optimization with indexes</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                  <h4 className="font-semibold text-green-800">✅ Title Index</h4>
                  <p className="text-sm text-green-700">db.books.createIndex({{"title": 1}})</p>
                  <Badge variant="secondary" className="mt-2">Query time: ~2ms</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default MongoDBDashboard;