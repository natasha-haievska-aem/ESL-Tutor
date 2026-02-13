import { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { motion, AnimatePresence } from 'framer-motion';

type TabOption = 'content' | 'tasks' | 'quiz';

interface QrCodeModalProps {
  lessonId: string;
  lessonTitle: string;
  isOpen: boolean;
  onClose: () => void;
}

const tabOptions: { id: TabOption; label: string; icon: string }[] = [
  { id: 'content', label: 'Lesson', icon: '📖' },
  { id: 'tasks', label: 'Practice', icon: '✏️' },
  { id: 'quiz', label: 'Quiz', icon: '🎯' },
];

export function QrCodeModal({ lessonId, lessonTitle, isOpen, onClose }: QrCodeModalProps) {
  const [selectedTab, setSelectedTab] = useState<TabOption>('content');

  const baseUrl = typeof window !== 'undefined' ? window.location.origin : '';
  const basePath = import.meta.env.BASE_URL.replace(/\/$/, '');
  const qrUrl = `${baseUrl}${basePath}/lesson/${lessonId}?tab=${selectedTab}`;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', duration: 0.4, bounce: 0.15 }}
            onClick={(e) => e.stopPropagation()}
            className="relative glass rounded-2xl p-6 max-w-sm w-full"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-3 right-3 text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors text-xl leading-none"
            >
              ✕
            </button>

            {/* Title */}
            <h3 className="text-lg font-bold mb-1 pr-8">QR Code</h3>
            <p className="text-sm text-[var(--color-text-muted)] mb-4 truncate">{lessonTitle}</p>

            {/* Tab picker */}
            <div className="flex gap-1 mb-5 bg-white/5 rounded-lg p-1">
              {tabOptions.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setSelectedTab(tab.id)}
                  className={`flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-md text-sm font-medium transition-all ${
                    selectedTab === tab.id
                      ? 'bg-[var(--color-primary)] text-white'
                      : 'text-[var(--color-text-muted)] hover:text-[var(--color-text)]'
                  }`}
                >
                  <span className="text-xs">{tab.icon}</span>
                  {tab.label}
                </button>
              ))}
            </div>

            {/* QR Code */}
            <div className="flex justify-center mb-4">
              <div className="bg-white rounded-xl p-4">
                <QRCodeSVG
                  value={qrUrl}
                  size={200}
                  level="M"
                  bgColor="#ffffff"
                  fgColor="#000000"
                />
              </div>
            </div>

            {/* URL preview */}
            <p className="text-xs text-[var(--color-text-muted)] text-center break-all">
              {qrUrl}
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
