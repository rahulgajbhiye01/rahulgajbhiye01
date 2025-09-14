interface YouTubeProps {
  id: string;
  title?: string;
  start?: number;
}

export function YouTube({ id, title, start }: YouTubeProps) {
  const src = `https://www.youtube.com/embed/${id}${
    start ? `?start=${start}` : ""
  }`;

  return (
    <div className="aspect-video my-8 rounded-lg overflow-hidden shadow-lg">
      <iframe
        src={src}
        title={title || "YouTube video"}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-full h-full"
      />
    </div>
  );
}
