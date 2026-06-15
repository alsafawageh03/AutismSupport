import {useState} from "react";
import Title from "../../components/ui/Title";
import CreatePostCard from "../../components/community/CreatePostCard";
import PostCard from "../../components/community/PostCard";
import Button from "../../components/ui/Button";

function Community() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      user: {
        name: "Jane Doe",
        avatar: "https://i.pravatar.cc/150?img=1",
      },
      createdAt: "2 hours ago",
      title: "My Birth Story",
      content:
        "I had a wonderful experience giving birth to my baby girl. The hospital staff was amazing and I felt so supported throughout the entire process. My advice to new moms is to trust your instincts and don't be afraid to ask for help when you need it!",
      tag: "Birth Story",
      likes: 12,
      comments: 4,
    },
    {
      id: 2,
      user: {
        name: "Emily Smith",
        avatar: "https://i.pravatar.cc/150?img=2",
      },
      createdAt: "5 hours ago",
      content:
        "Breastfeeding can be challenging at first, but it's so rewarding once you get the hang of it. My tip for new moms is to be patient with yourself and your baby. It takes time for both of you to learn how to breastfeed, so don't get discouraged if it doesn't go perfectly right away.",
      tag: "Breastfeeding",
      likes: 8,
      comments: 2,
    },
    {
      id: 3,
      user: {
        name: "Sarah Johnson",
        avatar: "https://i.pravatar.cc/150?img=3",
      },
      createdAt: "1 day ago",
      title: "Sleep Training Tips",
      content:
        "Sleep training can be tough, but it's worth it in the end. My advice for new moms is to establish a consistent bedtime routine and stick to it. This will help your baby learn when it's time to sleep and make the process easier for both of you.",
      tag: "Sleep Training",
      likes: 15,
      comments: 5,
    },
  ]);

  const handleAddPost = (newPost) => {
    setPosts((prev) => [
      {
        id: Date.now(),
        text: newPost,
        user: {
          name: "Current User",
          avatar: "https://i.pravatar.cc/150?img=4",
        },
        createdAt: "Just now",
        likes: 0,
        comments: 0,
      },
      ...prev,
    ]);
  };


  return (
    <div className="min-h-screen py-8">

      <Title
        title="Mothers' Community"
        subtitle="Share your experience and connect with other mothers on a similar journey"
      />

      <CreatePostCard onPost={handleAddPost} />

      <div className="mt-6 space-y-4">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>

      <Button
  variant="outline"
  className="mx-auto mt-8 flex items-center gap-2 h-12 px-8 rounded-xl border-2"
>
  Load More
</Button>


    </div>
  );
}

export default Community;