'use client';

export default function AnnouncementBar() {
  return (
    <div className="announcement-bar">
      <div className="announcement-content">
        <span>New TH18 War Bases Added!</span>
        <span className="mx-4">•</span>
        <span>Updated Daily with Fresh Layouts</span>
        <span className="mx-4">•</span>
        <span>One-Click Copy Links</span>
        <span className="mx-4">•</span>
        <span>New TH18 War Bases Added!</span>
        <span className="mx-4">•</span>
        <span>Updated Daily with Fresh Layouts</span>
        <span className="mx-4">•</span>
        <span>One-Click Copy Links</span>
      </div>
      <style jsx>{`
        .announcement-bar {
          background: linear-gradient(90deg, #f59e0b, #d97706, #b45309, #d97706, #f59e0b);
          background-size: 200% 100%;
          animation: gradientMove 3s ease infinite;
          overflow: hidden;
          padding: 8px 0;
        }
        .announcement-content {
          display: flex;
          white-space: nowrap;
          animation: scroll 20s linear infinite;
          color: #000;
          font-weight: 600;
          font-size: 13px;
        }
        @keyframes gradientMove {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
