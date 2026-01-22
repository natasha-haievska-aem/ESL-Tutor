import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardContent, Badge } from '../components/ui';
import { lessonCategories } from '../data/lessons';

export function Lessons() {
  const [expandedCategory, setExpandedCategory] = useState<string | null>('tenses');
  const [expandedSubcategory, setExpandedSubcategory] = useState<string | null>('present');

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
                  onClick={() => setExpandedCategory(
                    expandedCategory === category.id ? null : category.id
                  )}
                  className="w-full flex items-center justify-between p-6 hover:bg-white/5 transition-colors text-left"
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
                      <div className="px-6 pb-6 space-y-4">
                        {category.subcategories.map((subcategory) => (
                          <div key={subcategory.id} className="glass rounded-xl overflow-hidden">
                            {/* Subcategory Header */}
                            <button
                              onClick={() => setExpandedSubcategory(
                                expandedSubcategory === subcategory.id ? null : subcategory.id
                              )}
                              className="w-full flex items-center justify-between p-4 hover:bg-white/5 transition-colors text-left"
                            >
                              <h3 className="text-lg font-semibold">{subcategory.title}</h3>
                              <div className="flex items-center gap-3">
                                <span className="text-sm text-[var(--color-text-muted)]">
                                  {subcategory.lessons.length} lessons
                                </span>
                                <motion.span
                                  animate={{ rotate: expandedSubcategory === subcategory.id ? 180 : 0 }}
                                  className="text-[var(--color-text-muted)]"
                                >
                                  ▼
                                </motion.span>
                              </div>
                            </button>

                            {/* Lessons */}
                            <AnimatePresence>
                              {expandedSubcategory === subcategory.id && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: 'auto', opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{ duration: 0.3 }}
                                  className="overflow-hidden"
                                >
                                  <div className="p-4 pt-0 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                                    {subcategory.lessons.map((lesson) => (
                                      <Link key={lesson.id} to={`/lesson/${lesson.id}`}>
                                        <Card hover className="h-full">
                                          <CardHeader>
                                            <div className="flex items-start justify-between">
                                              <CardTitle className="text-lg">{lesson.title}</CardTitle>
                                              <Badge variant={getDifficultyVariant(lesson.difficulty)}>
                                                {lesson.difficulty}
                                              </Badge>
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
                                    ))}
                                  </div>
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
    </div>
  );
}
