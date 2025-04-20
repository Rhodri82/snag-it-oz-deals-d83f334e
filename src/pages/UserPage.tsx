
import React from 'react';
import Header from '../components/Header';
import UserReputation from '../components/UserReputation';
import DealCard from '../components/DealCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { USERS, DEALS } from '../data/mockData';
import { useParams } from 'react-router-dom';

const UserPage = () => {
  const { userId = "1" } = useParams(); // Default to first user if no ID provided
  
  const user = USERS.find(u => u.id === userId) || USERS[0];
  const userDeals = DEALS.filter(deal => deal.author.id === user.id);
  const commentCount = DEALS.reduce((count, deal) => {
    return count + deal.comments.filter(comment => comment.author.id === user.id).length;
  }, 0);

  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-1">
            <UserReputation 
              user={user} 
              dealCount={userDeals.length} 
              commentCount={commentCount} 
            />
          </div>
          <div className="lg:col-span-3">
            <Tabs defaultValue="deals">
              <TabsList className="mb-4">
                <TabsTrigger value="deals">Deals Posted</TabsTrigger>
                <TabsTrigger value="comments">Comments</TabsTrigger>
                <TabsTrigger value="liked">Liked Deals</TabsTrigger>
              </TabsList>
              <TabsContent value="deals">
                <div className="grid gap-6 md:grid-cols-2">
                  {userDeals.length > 0 ? (
                    userDeals.map(deal => (
                      <DealCard key={deal.id} deal={deal} />
                    ))
                  ) : (
                    <p className="text-muted-foreground col-span-2 text-center py-8">
                      This user hasn't posted any deals yet.
                    </p>
                  )}
                </div>
              </TabsContent>
              <TabsContent value="comments">
                <div className="space-y-4">
                  {commentCount > 0 ? (
                    DEALS.flatMap(deal => 
                      deal.comments
                        .filter(comment => comment.author.id === user.id)
                        .map(comment => (
                          <div key={comment.id} className="bg-muted rounded-md p-4">
                            <h3 className="font-medium mb-2">On: {deal.title}</h3>
                            <p className="text-sm mb-2">{comment.content}</p>
                            <div className="text-xs text-muted-foreground">
                              {new Date(comment.createdAt).toLocaleDateString()}
                            </div>
                          </div>
                        ))
                    )
                  ) : (
                    <p className="text-muted-foreground text-center py-8">
                      This user hasn't made any comments yet.
                    </p>
                  )}
                </div>
              </TabsContent>
              <TabsContent value="liked">
                <p className="text-muted-foreground text-center py-8">
                  Liked deals will appear here.
                </p>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
    </div>
  );
};

export default UserPage;
