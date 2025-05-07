
import { useState, useEffect } from 'react';
import ScrollExpandMedia from '@/components/ui/scroll-expansion-hero';

interface MediaAbout {
  overview: string;
  conclusion: string;
}

interface MediaContent {
  src: string;
  poster?: string;
  background: string;
  title: string;
  date: string;
  scrollToExpand: string;
  about: MediaAbout;
}

interface MediaContentCollection {
  [key: string]: MediaContent;
}

const sampleMediaContent: MediaContentCollection = {
  video: {
    src: 'https://www.youtube.com/embed/LXb3EKWsInQ',
    poster: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81',
    background: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81',
    title: 'Emergency Information',
    date: 'Stay Safe Kishwar',
    scrollToExpand: 'Scroll for Emergency Resources',
    about: {
      overview:
        'This is a demonstration of the ScrollExpandMedia component with a video. As you scroll, the video expands to fill more of the screen, creating an immersive experience. This component is perfect for showcasing emergency information in a modern, interactive way.',
      conclusion:
        'The ScrollExpandMedia component provides a unique way to engage users with your emergency information through interactive scrolling. Try switching between video and image modes to see different implementations.',
    },
  },
  image: {
    src: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5',
    background: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
    title: 'Safety Resources',
    date: 'Stay Safe Kishwar',
    scrollToExpand: 'Scroll for Safety Information',
    about: {
      overview:
        'This component shows important safety information in an engaging format. The smooth expansion effect works beautifully with static images, allowing you to create engaging visual experiences for emergency communications.',
      conclusion:
        'The ScrollExpandMedia component works equally well with images and videos. This flexibility allows you to choose the media type that best suits your emergency content while maintaining the same engaging user experience.',
    },
  },
};

const MediaContent = ({ mediaType }: { mediaType: 'video' | 'image' }) => {
  const currentMedia = sampleMediaContent[mediaType];

  return (
    <div className='max-w-4xl mx-auto'>
      <h2 className='text-3xl font-bold mb-6 text-black dark:text-white'>
        Emergency Resources
      </h2>
      <p className='text-lg mb-8 text-black dark:text-white'>
        {currentMedia.about.overview}
      </p>

      <p className='text-lg mb-8 text-black dark:text-white'>
        {currentMedia.about.conclusion}
      </p>
    </div>
  );
};

const DemoScrollMedia = () => {
  const [mediaType, setMediaType] = useState<'video' | 'image'>('image');
  const currentMedia = sampleMediaContent[mediaType];

  useEffect(() => {
    window.scrollTo(0, 0);

    const resetEvent = new Event('resetSection');
    window.dispatchEvent(resetEvent);
  }, [mediaType]);

  return (
    <div className='min-h-screen'>
      <div className='fixed top-4 right-4 z-50 flex gap-2'>
        <button
          onClick={() => setMediaType('video')}
          className={`px-4 py-2 rounded-lg ${
            mediaType === 'video'
              ? 'bg-white text-black'
              : 'bg-black/50 text-white border border-white/30'
          }`}
        >
          Video
        </button>

        <button
          onClick={() => setMediaType('image')}
          className={`px-4 py-2 rounded-lg ${
            mediaType === 'image'
              ? 'bg-white text-black'
              : 'bg-black/50 text-white border border-white/30'
          }`}
        >
          Image
        </button>
      </div>

      <ScrollExpandMedia
        mediaType={mediaType}
        mediaSrc={currentMedia.src}
        posterSrc={mediaType === 'video' ? currentMedia.poster : undefined}
        bgImageSrc={currentMedia.background}
        title={currentMedia.title}
        date={currentMedia.date}
        scrollToExpand={currentMedia.scrollToExpand}
      >
        <MediaContent mediaType={mediaType} />
      </ScrollExpandMedia>
    </div>
  );
};

export default DemoScrollMedia;
