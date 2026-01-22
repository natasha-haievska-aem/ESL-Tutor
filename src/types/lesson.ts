// Lesson data types

export interface LessonCategory {
  id: string;
  title: string;
  description: string;
  icon: string;
  subcategories: LessonSubcategory[];
}

export interface LessonSubcategory {
  id: string;
  title: string;
  lessons: Lesson[];
}

export interface Lesson {
  id: string;
  title: string;
  description: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  content: LessonContent;
  tasks: Task[];
  quiz: Quiz;
}

export interface LessonContent {
  explanation: string;
  structure: string;
  examples: Example[];
  tips: string[];
}

export interface Example {
  sentence: string;
  translation?: string;
  highlight?: string;
}

export interface Task {
  id: string;
  type: 'fill-blank' | 'multiple-choice' | 'sentence-order' | 'matching';
  question: string;
  options?: string[];
  correctAnswer: string | string[];
  explanation?: string;
}

export interface Quiz {
  id: string;
  title: string;
  questions: QuizQuestion[];
  passingScore: number;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: string;
  explanation?: string;
}
