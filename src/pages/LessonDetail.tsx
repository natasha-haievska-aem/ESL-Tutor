import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button, Card, Badge, StructureFormulaDisplay } from '../components/ui';
import { getLessonById } from '../data/lessons';
import type { Task, QuizQuestion } from '../types';

type TabType = 'content' | 'tasks' | 'quiz';

export function LessonDetail() {
  const { lessonId } = useParams<{ lessonId: string }>();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<TabType>('content');
  const [taskAnswers, setTaskAnswers] = useState<Record<string, string>>({});
  const [taskResults, setTaskResults] = useState<Record<string, boolean>>({});
  const [quizAnswers, setQuizAnswers] = useState<Record<string, string>>({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  const result = lessonId ? getLessonById(lessonId) : null;

  if (!result) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Card className="text-center p-8">
          <h2 className="text-2xl font-bold mb-4">Lesson not found</h2>
          <p className="text-[var(--color-text-muted)] mb-6">
            The lesson you're looking for doesn't exist.
          </p>
          <Link to="/lessons">
            <Button>Back to Lessons</Button>
          </Link>
        </Card>
      </div>
    );
  }

  const { lesson, category, subcategory } = result;

  const checkTaskAnswer = (taskId: string, correctAnswer: string | string[]) => {
    const userAnswer = taskAnswers[taskId]?.toLowerCase().trim();
    const isCorrect = Array.isArray(correctAnswer)
      ? correctAnswer.some((ans) => ans.toLowerCase().trim() === userAnswer)
      : userAnswer === correctAnswer.toLowerCase().trim();
    setTaskResults((prev) => ({ ...prev, [taskId]: isCorrect }));
  };

  const calculateQuizScore = () => {
    let correct = 0;
    lesson.quiz.questions.forEach((q: { id: string; correctAnswer: string }) => {
      if (quizAnswers[q.id] === q.correctAnswer) {
        correct++;
      }
    });
    return {
      correct,
      total: lesson.quiz.questions.length,
      percentage: Math.round((correct / lesson.quiz.questions.length) * 100),
    };
  };

  const tabs = [
    { id: 'content' as TabType, label: 'Lesson', icon: '📖' },
    { id: 'tasks' as TabType, label: 'Practice', icon: '✏️' },
    { id: 'quiz' as TabType, label: 'Quiz', icon: '🎯' },
  ];

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-[var(--color-text-muted)] mb-6">
          <Link to="/lessons" className="hover:text-[var(--color-text)] transition-colors">
            Lessons
          </Link>
          <span>/</span>
          <span>{category.title}</span>
          <span>/</span>
          <span>{subcategory.title}</span>
          <span>/</span>
          <span className="text-[var(--color-text)]">{lesson.title}</span>
        </nav>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex items-start justify-between flex-wrap gap-4">
            <div>
              <h1 className="text-3xl font-bold mb-2">{lesson.title}</h1>
              <p className="text-[var(--color-text-muted)]">{lesson.description}</p>
            </div>
            <Badge
              variant={
                lesson.difficulty === 'beginner'
                  ? 'success'
                  : lesson.difficulty === 'intermediate'
                  ? 'warning'
                  : 'default'
              }
            >
              {lesson.difficulty}
            </Badge>
          </div>
        </motion.div>

        {/* Tabs */}
        <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
                activeTab === tab.id
                  ? 'bg-[var(--color-primary)] text-white'
                  : 'text-[var(--color-text-muted)] hover:bg-white/5'
              }`}
            >
              <span>{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content Tab */}
        {activeTab === 'content' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <Card>
              <h2 className="text-xl font-bold mb-4">📚 Explanation</h2>
              <div className="prose prose-invert max-w-none">
                {lesson.content.explanation.split('\n').map((paragraph: string, i: number) => (
                  <p key={i} className="text-[var(--color-text-muted)] mb-3 whitespace-pre-wrap">
                    {paragraph}
                  </p>
                ))}
              </div>
            </Card>

            <Card>
              <h2 className="text-xl font-bold mb-4">📐 Structure</h2>
              {lesson.content.structureFormula ? (
                <StructureFormulaDisplay
                  formula={lesson.content.structureFormula}
                  description="Select a mode below to see how the sentence structure changes."
                />
              ) : lesson.content.structure ? (
                <div className="bg-black/20 rounded-lg p-4">
                  {lesson.content.structure.split('\n').map((line: string, i: number) => (
                    <p key={i} className="text-[var(--color-text)] font-mono text-sm mb-1">
                      {line}
                    </p>
                  ))}
                </div>
              ) : null}
            </Card>

            <Card>
              <h2 className="text-xl font-bold mb-4">💡 Examples</h2>
              <div className="space-y-3">
                {lesson.content.examples.map((example: { sentence: string; highlight?: string | string[] }, i: number) => {
                  // Helper to highlight multiple terms in a sentence
                  const renderHighlightedSentence = () => {
                    if (!example.highlight) return example.sentence;
                    
                    const highlights = Array.isArray(example.highlight) ? example.highlight : [example.highlight];
                    let result: (string | React.ReactNode)[] = [example.sentence];
                    
                    highlights.forEach((term, termIdx) => {
                      result = result.flatMap((segment) => {
                        if (typeof segment !== 'string') return segment;
                        const parts = segment.split(term);
                        return parts.flatMap((part, idx) =>
                          idx < parts.length - 1
                            ? [part, <span key={`${termIdx}-${idx}`} className="text-[var(--color-primary)] font-semibold">{term}</span>]
                            : [part]
                        );
                      });
                    });
                    
                    return result;
                  };

                  return (
                    <div key={i} className="bg-white/5 rounded-lg p-3">
                      <p className="text-lg">{renderHighlightedSentence()}</p>
                    </div>
                  );
                })}
              </div>
            </Card>

            <Card>
              <h2 className="text-xl font-bold mb-4">💡 Tips</h2>
              <ul className="space-y-2">
                {lesson.content.tips.map((tip: string, i: number) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[var(--color-success)]">✓</span>
                    <span className="text-[var(--color-text-muted)]">{tip}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <div className="flex justify-end">
              <Button onClick={() => setActiveTab('tasks')}>Continue to Practice →</Button>
            </div>
          </motion.div>
        )}

        {/* Tasks Tab */}
        {activeTab === 'tasks' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            {lesson.tasks.map((task: Task, index: number) => (
              <Card key={task.id}>
                <div className="flex items-start gap-4">
                  <span className="text-2xl font-bold text-[var(--color-primary)]">{index + 1}</span>
                  <div className="flex-1">
                    <p className="text-lg font-medium mb-4">{task.question}</p>

                    {task.type === 'fill-blank' && (
                      <div className="flex gap-3 items-center">
                        <input
                          type="text"
                          value={taskAnswers[task.id] || ''}
                          onChange={(e) =>
                            setTaskAnswers((prev) => ({ ...prev, [task.id]: e.target.value }))
                          }
                          className="flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-2 focus:outline-none focus:border-[var(--color-primary)]"
                          placeholder="Type your answer..."
                        />
                        <Button
                          variant="secondary"
                          onClick={() => checkTaskAnswer(task.id, task.correctAnswer)}
                        >
                          Check
                        </Button>
                      </div>
                    )}

                    {task.type === 'multiple-choice' && task.options && (
                      <div className="space-y-2">
                        {task.options.map((option: string) => (
                          <button
                            key={option}
                            onClick={() => {
                              setTaskAnswers((prev) => ({ ...prev, [task.id]: option }));
                              setTaskResults((prev) => ({
                                ...prev,
                                [task.id]: option === task.correctAnswer,
                              }));
                            }}
                            className={`w-full text-left p-3 rounded-lg border transition-all ${
                              taskAnswers[task.id] === option
                                ? taskResults[task.id] !== undefined
                                  ? taskResults[task.id]
                                    ? 'border-[var(--color-success)] bg-[var(--color-success)]/10'
                                    : 'border-red-500 bg-red-500/10'
                                  : 'border-[var(--color-primary)] bg-[var(--color-primary)]/10'
                                : 'border-white/10 hover:border-white/20'
                            }`}
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                    )}

                    {taskResults[task.id] !== undefined && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`mt-4 p-3 rounded-lg ${
                          taskResults[task.id]
                            ? 'bg-[var(--color-success)]/10 text-[var(--color-success)]'
                            : 'bg-red-500/10 text-red-400'
                        }`}
                      >
                        {taskResults[task.id] ? '✓ Correct!' : `✗ Incorrect. The answer is: ${Array.isArray(task.correctAnswer) ? task.correctAnswer.join(' / ') : task.correctAnswer}`}
                        {task.explanation && (
                          <p className="mt-2 text-sm text-[var(--color-text-muted)]">
                            {task.explanation}
                          </p>
                        )}
                      </motion.div>
                    )}
                  </div>
                </div>
              </Card>
            ))}

            <div className="flex justify-between">
              <Button variant="ghost" onClick={() => setActiveTab('content')}>
                ← Back to Lesson
              </Button>
              <Button onClick={() => setActiveTab('quiz')}>Take the Quiz →</Button>
            </div>
          </motion.div>
        )}

        {/* Quiz Tab */}
        {activeTab === 'quiz' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <Card className="text-center">
              <h2 className="text-2xl font-bold mb-2">{lesson.quiz.title}</h2>
              <p className="text-[var(--color-text-muted)]">
                Answer all questions and submit to see your score. Passing score: {lesson.quiz.passingScore}%
              </p>
            </Card>

            {lesson.quiz.questions.map((question: QuizQuestion, index: number) => (
              <Card key={question.id}>
                <div className="flex items-start gap-4">
                  <span className="text-2xl font-bold text-[var(--color-primary)]">{index + 1}</span>
                  <div className="flex-1">
                    <p className="text-lg font-medium mb-4">{question.question}</p>
                    <div className="space-y-2">
                      {question.options.map((option: string) => (
                        <button
                          key={option}
                          onClick={() =>
                            !quizSubmitted &&
                            setQuizAnswers((prev) => ({ ...prev, [question.id]: option }))
                          }
                          disabled={quizSubmitted}
                          className={`w-full text-left p-3 rounded-lg border transition-all ${
                            quizSubmitted
                              ? option === question.correctAnswer
                                ? 'border-[var(--color-success)] bg-[var(--color-success)]/10'
                                : quizAnswers[question.id] === option
                                ? 'border-red-500 bg-red-500/10'
                                : 'border-white/10 opacity-50'
                              : quizAnswers[question.id] === option
                              ? 'border-[var(--color-primary)] bg-[var(--color-primary)]/10'
                              : 'border-white/10 hover:border-white/20'
                          }`}
                        >
                          {option}
                        </button>
                      ))}
                    </div>

                    {quizSubmitted && quizAnswers[question.id] !== question.correctAnswer && question.explanation && (
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="mt-3 text-sm text-[var(--color-text-muted)]"
                      >
                        💡 {question.explanation}
                      </motion.p>
                    )}
                  </div>
                </div>
              </Card>
            ))}

            {!quizSubmitted ? (
              <div className="flex justify-between">
                <Button variant="ghost" onClick={() => setActiveTab('tasks')}>
                  ← Back to Practice
                </Button>
                <Button
                  onClick={() => setQuizSubmitted(true)}
                  disabled={Object.keys(quizAnswers).length !== lesson.quiz.questions.length}
                >
                  Submit Quiz
                </Button>
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <Card className="text-center">
                  <h3 className="text-2xl font-bold mb-4">Quiz Results</h3>
                  {(() => {
                    const score = calculateQuizScore();
                    const passed = score.percentage >= lesson.quiz.passingScore;
                    return (
                      <>
                        <div
                          className={`text-6xl font-bold mb-2 ${
                            passed ? 'text-[var(--color-success)]' : 'text-red-400'
                          }`}
                        >
                          {score.percentage}%
                        </div>
                        <p className="text-[var(--color-text-muted)] mb-4">
                          You got {score.correct} out of {score.total} questions correct
                        </p>
                        <Badge variant={passed ? 'success' : 'warning'}>
                          {passed ? '🎉 Passed!' : '📚 Keep practicing!'}
                        </Badge>
                      </>
                    );
                  })()}
                  <div className="flex justify-center gap-4 mt-6">
                    <Button
                      variant="outline"
                      onClick={() => {
                        setQuizAnswers({});
                        setQuizSubmitted(false);
                      }}
                    >
                      Retry Quiz
                    </Button>
                    <Button onClick={() => navigate('/lessons')}>Browse More Lessons</Button>
                  </div>
                </Card>
              </motion.div>
            )}
          </motion.div>
        )}
      </div>
    </div>
  );
}
