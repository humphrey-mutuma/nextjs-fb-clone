import StoryCard from "./StoryCard";

const stories = [
  {
    name: "Emmy Rena",
    src: "https://cdn.pixabay.com/photo/2018/01/15/07/52/woman-3083390__340.jpg",
    profile:
      "https://cdn.pixabay.com/photo/2018/01/15/07/52/woman-3083390__340.jpg",
  },
  {
    name: "Elon Musk",
    src: "https://cdn.pixabay.com/photo/2021/03/09/23/49/elon-6083103__340.jpg",
    profile:
      "https://cdn.pixabay.com/photo/2021/03/09/23/49/elon-6083103__340.jpg",
  },
  {
    name: "Alice Jerome",
    src: "https://cdn.pixabay.com/photo/2016/11/29/13/14/attractive-1869761__340.jpg",
    profile:
      "https://cdn.pixabay.com/photo/2016/11/29/13/14/attractive-1869761__340.jpg",
  },
  {
    name: "John Mena",
    src: "https://cdn.pixabay.com/photo/2017/11/06/13/45/cap-2923682__340.jpg",
    profile:
      "https://cdn.pixabay.com/photo/2017/11/06/13/45/cap-2923682__340.jpg",
  },
  {
    name: "Hellena Vashnaze",
    src: "https://cdn.pixabay.com/photo/2018/01/15/07/52/woman-3083401__340.jpg",
    profile:
      "https://cdn.pixabay.com/photo/2018/01/15/07/52/woman-3083401__340.jpg",
  },
];

function Stories() {
  return (
    <div className="flex justify-center space-x-3 mx-auto">
      {stories.map((story) => (
        <StoryCard
          key={story.src}
          name={story.name}
          src={story.src}
          profile={story.profile}
        />
      ))}
    </div>
  );
}

export default Stories;
