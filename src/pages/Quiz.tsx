import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardContent, Button, Badge } from '../components/ui';
import { lessonCategories } from '../data/lessons';
import type { Lesson } from '../types';

export function Quiz() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Get all lessons with quizzes
  const allLessons: { lesson: Lesson; categoryTitle: string }[] = [];
  lessonCategories.forEach((category) => {
    category.subcategories.forEach((subcategory) => {
      subcategory.lessons.forEach((lesson) => {
        if (lesson.quiz.questions.length > 0) {
          allLessons.push({ lesson, categoryTitle: category.title });
        }
      });
    });
  });

  const filteredLessons = selectedCategory
    ? allLessons.filter((item) => item.categoryTitle === selectedCategory)
    : allLessons;

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
            <span className="gradient-text">Grammar Quizzes</span>
          </h1>
          <p className="text-[var(--color-text-muted)] max-w-2xl mx-auto">
            Test your knowledge with our interactive quizzes. Track your progress and identify areas for improvement.
          </p>
        </motion.div>

        {/* Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex flex-wrap gap-2 justify-center mb-8"
        >
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-4 py-2 rounded-full transition-all ${
              selectedCategory === null
                ? 'bg-[var(--color-primary)] text-white'
                : 'bg-white/5 text-[var(--color-text-muted)] hover:bg-white/10'
            }`}
          >
            All Quizzes
          </button>
          {lessonCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.title)}
              className={`px-4 py-2 rounded-full transition-all flex items-center gap-2 ${
                selectedCategory === category.title
                  ? 'bg-[var(--color-primary)] text-white'
                  : 'bg-white/5 text-[var(--color-text-muted)] hover:bg-white/10'
              }`}
            >
              <span>{category.icon}</span>
              {category.title}
            </button>
          ))}
        </motion.div>

        {/* Quizzes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredLessons.map(({ lesson, categoryTitle }, index) => (
            <motion.div
              key={lesson.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <Link to={`/lesson/${lesson.id}`}>
                <Card hover className="h-full">
                  <CardHeader>
                    <div className="flex items-start justify-between gap-2">
                      <CardTitle className="text-lg">{lesson.quiz.title}</CardTitle>
                      <Badge variant={getDifficultyVariant(lesson.difficulty)}>
                        {lesson.difficulty}
                      </Badge>
                    </div>
                    <p className="text-sm text-[var(--color-text-muted)]">{categoryTitle}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm mb-4">{lesson.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-[var(--color-text-muted)]">
                        <span>🎯 {lesson.quiz.questions.length} questions</span>
                        <span className="ml-3">Pass: {lesson.quiz.passingScore}%</span>
                      </div>
                    </div>
                    <Button size="sm" className="w-full mt-4">
                      Start Quiz
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>

        {filteredLessons.length === 0 && (
          <div className="text-center py-12">
            <p className="text-[var(--color-text-muted)]">No quizzes found for this category.</p>
          </div>
        )}
      </div>
    </div>
  );
}
