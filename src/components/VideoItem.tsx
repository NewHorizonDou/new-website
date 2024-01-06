export type Video = {
  id: string;
  name: string;
};

export const VideoItem = ({
  video,
  changeCurrentVideo,
}: {
  video: Video;
  changeCurrentVideo: (video: Video) => void;
}) => {
  return (
    <button onClick={() => changeCurrentVideo(video)} className='w-full text-white aspect-video'>
      <img alt={video.name} src={`/thumbnails/${video.id}.png`} width={2532} height={1320} />
    </button>
  );
};
