
import { useState } from 'react';

const DemoScrollMedia = () => {
  const [mediaType, setMediaType] = useState<'video' | 'image'>('image');

  const mediaContent = {
    video: {
      src: 'https://www.youtube.com/embed/LXb3EKWsInQ',
      title: 'Emergency Information',
      date: 'Stay Safe Kishwar',
      about: {
        overview:
          'This is a demonstration of emergency information with a video format. This component is perfect for showcasing emergency information in a clear, accessible way.',
        conclusion:
          'Emergency information is provided in a static, easy-to-read format that works well on all devices.',
      },
    },
    image: {
      src: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5',
      title: 'Safety Resources',
      date: 'Stay Safe Kishwar',
      about: {
        overview:
          'This component shows important safety information in a straightforward format. The static layout ensures all information is immediately accessible.',
        conclusion:
          'Safety resources are presented clearly and effectively without requiring any special interactions.',
      },
    },
  };

  const content = mediaType === 'video' ? mediaContent.video : mediaContent.image;

  return (
    <div className="min-h-screen">
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
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-6">
            <h1 className="text-3xl font-bold mb-2 text-center">{content.title}</h1>
            <p className="text-lg text-center mb-6 text-blue-500">{content.date}</p>
            
            <div className="aspect-video rounded-lg overflow-hidden mb-8">
              {mediaType === 'video' ? (
                <iframe
                  src={content.src}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              ) : (
                <img 
                  src={content.src}
                  alt={content.title}
                  className="w-full h-full object-cover"
                />
              )}
            </div>
            
            <div className="prose max-w-none">
              <h2 className="text-2xl font-semibold mb-4">Emergency Resources</h2>
              <p className="mb-4">{content.about.overview}</p>
              <p>{content.about.conclusion}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoScrollMedia;
