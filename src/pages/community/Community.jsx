import { CgSpinner } from "react-icons/cg";

import PostCreationBox from "../../components/community/PostCreationBox";
import PostCard from "../../components/community/PostCard";
import EmptyState from "../../components/ui/EmptyState";
import Title from "../../components/ui/Title";

import { useCommunityFeed } from "../../hooks/useCommunityFeed";


export default function Community() {
  const {
    loading,
    posts,
    activePostComments,
    commentInputs,

    handleCreatePost,
    handleDeletePost,
    handleReact,
    handleReportContent,

    toggleComments,
    handleSendComment,
    handleDeleteComment,
    setCommentInputForPost,
  } = useCommunityFeed();

  if (loading) {
    return (
      <div className="flex justify-center py-20">
        <CgSpinner className="h-8 w-8 animate-spin text-[var(--color-primary)]" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[var(--bg-page)] py-10 px-4 sm:px-6 lg:px-8 transition-colors duration-200">
      <div className="max-w-7xl mx-auto">
        <Title 
          title="Muther's Community"
          subtitle="Share your experience and connect with other moms on a similar journey."
        />
      </div>

      <div className="mx-auto flex w-full max-w-3xl flex-col gap-6">
      {/* Create Post */}
      <PostCreationBox onCreatePost={handleCreatePost} />

      {/* Empty Feed */}
      {posts.length === 0 ? (
        <EmptyState
          title="No Posts Yet"
          description="Be the first to share something with the community."
        />
      ) : (
        posts.map((post) => (
        <PostCard
          key={post.id}
          post={post}

          activePostComments={activePostComments}
          commentInputs={commentInputs}

          onReact={handleReact}
          onDeletePost={handleDeletePost}
          onReportPost={handleReportContent}

          onToggleComments={toggleComments}
          onSendComment={handleSendComment}
          onDeleteComment={handleDeleteComment}

          onInputChange={setCommentInputForPost}
        />
        ))
      )}
    </div>
    </div>
  );
}