
export interface Thread {
  id: string;
  title: string;
  content: string;
  authorId: string;
  authorName: string;
  authorAvatar?: string;
  createdAt: string;
  replyCount: number;
  upvotes: number;
}

export interface Reply {
  id: string;
  threadId: string;
  content: string;
  authorId: string;
  authorName: string;
  authorAvatar?: string;
  createdAt: string;
  parentReplyId?: string;
}
