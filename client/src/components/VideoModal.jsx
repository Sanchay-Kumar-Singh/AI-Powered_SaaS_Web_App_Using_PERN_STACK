import React from "react";

const VideoModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      {/* video box */}
      <div
        className="relative w-[90%] max-w-4xl bg-black rounded-xl overflow-hidden transform transition-all scale-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 bg-white text-black px-3 py-1 rounded-lg font-bold"
        >
          ✕
        </button>

        {/* video */}
        <video
          src="/demo.mp4"   // put video in public folder
          autoPlay
          controls
          className="w-full h-[400px] md:h-[500px] object-cover"
        />
      </div>
    </div>
  );
};

export default VideoModal;
