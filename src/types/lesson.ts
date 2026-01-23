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
  children?: LessonSubcategory[]; // For nested subcategories (e.g., Active Voice → Present/Past/Future)
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
  structure?: string;
  structureFormula?: StructureFormula;
  examples: Example[];
  tips: string[];
}

export interface BaseStructureFormula {
  structureType: 'tense' | 'simple' | 'conditional'; //TODO: figure out how to use it
}

// Tense-style formula with positive/negative/question forms
export interface TenseStructureFormula extends BaseStructureFormula {
  structureType: 'tense';
  cases: {
    positive: StructurePart[];
    negative: StructurePart[];
    question: StructurePart[];
  }
  examples: {
    positive: string;
    negative: string;
    question: string;
  };
}

// Simple formula for non-tense lessons (conditionals, articles, etc.)
export interface SimpleStructureFormula extends BaseStructureFormula {
  structureType: 'simple';
  formula: StructurePart[];
  example: string;
}

export interface ConditionalStructureFormula extends BaseStructureFormula {
  structureType: 'conditional';
  cases: {
    zero: StructurePart[];
    first: StructurePart[];
    second: StructurePart[];
    third: StructurePart[];
  }
  examples: {
    zero: string;
    first: string;
    second: string;
    third: string;
  };  
}

// Union type - supports both formats
export type StructureFormula = TenseStructureFormula | SimpleStructureFormula | ConditionalStructureFormula;



export interface StructurePart {
  label: string;
  value: string;
  highlight?: boolean;
}

export interface Example {
  sentence: string;
  translation?: string;
  highlight?: string | string[];
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
