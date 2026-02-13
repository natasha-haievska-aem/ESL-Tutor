import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardContent, Badge, QrCodeModal } from '../components/ui';
import { lessonCategories } from '../data/lessons';
import type { LessonSubcategory, Lesson } from '../types';

export function Lessons() {
  const [expandedCategory, setExpandedCategory] = useState<string | null>('tenses');
  const [expandedSubcategory, setExpandedSubcategory] = useState<string | null>('active-voice');
  const [expandedChild, setExpandedChild] = useState<string | null>('present-active');
  const [qrLesson, setQrLesson] = useState<Lesson | null>(null);

  const getDifficultyVariant = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner':
        return 'success';
      case 'intermediate':
        return 'warning';
      case 'advanced':
        return 'default';
      default:
        return 'info';
    }
  };

  // Count total lessons including nested children
  const countLessons = (subcategory: LessonSubcategory): number => {
    let count = subcategory.lessons.length;
    if (subcategory.children) {
      count += subcategory.children.reduce((sum, child) => sum + countLessons(child), 0);
    }
    return count;
  };

  // Render a lesson card
  const renderLessonCard = (lesson: Lesson) => (
    <Link key={lesson.id} to={`/lesson/${lesson.id}`}>
      <Card hover className="h-full">
        <CardHeader>
          <div className="flex items-start justify-between">
            <CardTitle className="text-lg">{lesson.title}</CardTitle>
            <div className="flex items-center gap-2">
              <button
                title="Show QR Code"
                onClick={(e) => {
                  e.preventDefault();
                  setQrLesson(lesson);
                }}
                className="p-1.5 rounded-lg text-[var(--color-text-muted)] hover:text-[var(--color-text)] hover:bg-[var(--color-hover)] transition-all"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="8" height="8" rx="1" />
                  <rect x="14" y="2" width="8" height="8" rx="1" />
                  <rect x="2" y="14" width="8" height="8" rx="1" />
                  <rect x="14" y="14" width="4" height="4" rx="1" />
                  <rect x="20" y="14" width="2" height="2" />
                  <rect x="14" y="20" width="2" height="2" />
                  <rect x="20" y="20" width="2" height="2" />
                </svg>
              </button>
              <Badge variant={getDifficultyVariant(lesson.difficulty)}>
                {lesson.difficulty}
              </Badge>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-sm">{lesson.description}</p>
          <div className="flex gap-4 mt-3 text-xs text-[var(--color-text-muted)]">
            <span>📝 {lesson.tasks.length} tasks</span>
            <span>🎯 {lesson.quiz.questions.length} quiz questions</span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">
            <span className="gradient-text">Grammar Lessons</span>
          </h1>
          <p className="text-[var(--color-text-muted)] max-w-2xl mx-auto">
            Explore our comprehensive collection of English grammar lessons.
            Click on a category to see available topics.
          </p>
        </motion.div>

        {/* Categories */}
        <div className="space-y-6">
          {lessonCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: categoryIndex * 0.1 }}
            >
              <Card className="overflow-hidden">
                {/* Category Header */}
                <button
                  onClick={() =>
                    setExpandedCategory(expandedCategory === category.id ? null : category.id)
                  }
                  className="w-full flex items-center justify-between p-6 rounded-xl hover:bg-[var(--color-hover)] transition-colors text-left"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-4xl">{category.icon}</span>
                    <div>
                      <h2 className="text-2xl font-bold">{category.title}</h2>
                      <p className="text-[var(--color-text-muted)]">{category.description}</p>
                    </div>
                  </div>
                  <motion.span
                    animate={{ rotate: expandedCategory === category.id ? 180 : 0 }}
                    className="text-2xl text-[var(--color-text-muted)]"
                  >
                    ▼
                  </motion.span>
                </button>

                {/* Subcategories */}
                <AnimatePresence>
                  {expandedCategory === category.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-3 pb-6 space-y-4 md:px-6">
                        {category.subcategories.map((subcategory) => (
                          <div key={subcategory.id} className="glass rounded-xl overflow-hidden">
                            {/* Subcategory Header */}
                            <button
                              onClick={() =>
                                setExpandedSubcategory(
                                  expandedSubcategory === subcategory.id ? null : subcategory.id
                                )
                              }
                              className="w-full flex items-center justify-between p-4 hover:bg-[var(--color-hover)] transition-colors text-left"
                            >
                              <h3 className="text-lg font-semibold">{subcategory.title}</h3>
                              <div className="flex items-center gap-3">
                                <span className="text-sm text-[var(--color-text-muted)]">
                                  {countLessons(subcategory)} lessons
                                </span>
                                <motion.span
                                  animate={{
                                    rotate: expandedSubcategory === subcategory.id ? 180 : 0,
                                  }}
                                  className="text-[var(--color-text-muted)]"
                                >
                                  ▼
                                </motion.span>
                              </div>
                            </button>

                            {/* Subcategory Content */}
                            <AnimatePresence>
                              {expandedSubcategory === subcategory.id && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: 'auto', opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{ duration: 0.3 }}
                                  className="overflow-hidden"
                                >
                                  {/* Nested Children (e.g., Present/Past/Future inside Active Voice) */}
                                  {subcategory.children && subcategory.children.length > 0 ? (
                                    <div className="p-4  space-y-3">
                                      {subcategory.children.map((child) => (
                                        <div
                                          key={child.id}
                                          className="bg-[var(--color-hover)] rounded-lg overflow-hidden"
                                        >
                                          {/* Child Header */}
                                          <button
                                            onClick={() =>
                                              setExpandedChild(
                                                expandedChild === child.id ? null : child.id
                                              )
                                            }
                                            className="w-full flex items-center justify-between p-3 hover:bg-[var(--color-hover)] transition-colors text-left"
                                          >
                                            <h4 className="font-medium text-[var(--color-text-muted)]">
                                              {child.title}
                                            </h4>
                                            <div className="flex items-center gap-2">
                                              <span className="text-xs text-[var(--color-text-muted)]">
                                                {child.lessons.length} lessons
                                              </span>
                                              <motion.span
                                                animate={{
                                                  rotate: expandedChild === child.id ? 180 : 0,
                                                }}
                                                className="text-sm text-[var(--color-text-muted)]"
                                              >
                                                ▼
                                              </motion.span>
                                            </div>
                                          </button>

                                          {/* Child Lessons */}
                                          <AnimatePresence>
                                            {expandedChild === child.id && (
                                              <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3 }}
                                                className="overflow-hidden"
                                              >
                                                <div className="p-3 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
                                                  {child.lessons.map((lesson) =>
                                                    renderLessonCard(lesson)
                                                  )}
                                                </div>
                                              </motion.div>
                                            )}
                                          </AnimatePresence>
                                        </div>
                                      ))}
                                    </div>
                                  ) : (
                                    /* Direct Lessons (no nesting) */
                                    <div className="p-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                                      {subcategory.lessons.map((lesson) => renderLessonCard(lesson))}
                                    </div>
                                  )}
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* QR Code Modal */}
      {qrLesson && (
        <QrCodeModal
          lessonId={qrLesson.id}
          lessonTitle={qrLesson.title}
          isOpen={!!qrLesson}
          onClose={() => setQrLesson(null)}
        />
      )}
    </div>
  );
}
