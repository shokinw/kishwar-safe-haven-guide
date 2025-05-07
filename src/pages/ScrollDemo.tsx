
import { useState } from "react";

const ScrollDemo = () => {
  const [mediaType, setMediaType] = useState<'video' | 'image'>('image');

  const currentMedia = {
    video: {
      src: 'https://www.youtube.com/embed/LXb3EKWsInQ',
      title: 'Emergency Information',
      date: 'Stay Safe Kishwar',
    },
    image: {
      src: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5',
      title: 'Safety Resources',
      date: 'Stay Safe Kishwar',
    }
  };

  const content = mediaType === 'video' ? currentMedia.video : currentMedia.image;

  return (
    <div className="min-h-screen bg-slate-100">
      <div className="fixed top-4 right-4 z-50 flex gap-2">
        <button
          onClick={() => setMediaType('video')}
          className={`px-4 py-2 rounded-lg ${
            mediaType === 'video'
              ? 'bg-skyBlue text-white'
              : 'bg-gray-200 text-gray-800'
          }`}
        >
          Video
        </button>

        <button
          onClick={() => setMediaType('image')}
          className={`px-4 py-2 rounded-lg ${
            mediaType === 'image'
              ? 'bg-skyBlue text-white'
              : 'bg-gray-200 text-gray-800'
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
              <p className="mb-4">
                This static page provides important safety information in an easy-to-access format.
                The content is displayed without animations for faster loading and accessibility.
              </p>
              <p>
                All emergency information is clearly visible and immediately accessible, without
                requiring any scrolling interactions or animations to view the content.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScrollDemo;
