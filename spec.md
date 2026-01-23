# ESL-Tutor Project Specification

## Overview

ESL-Tutor is an interactive English as a Second Language (ESL) learning web application focused on teaching English grammar through structured lessons, practice tasks, and quizzes.

**Repository:** `ESL-Tutor`  
**Deployment URL:** GitHub Pages at `/ESL-Tutor`

---

## Tech Stack

| Layer          | Technology                                   |
| -------------- | -------------------------------------------- |
| **Framework**  | React 19.2 with Vite 7.2                     |
| **Language**   | TypeScript 5.9                               |
| **Styling**    | Tailwind CSS 4.1 (CSS variables, dark theme) |
| **Routing**    | React Router DOM 7.12                        |
| **Animations** | Framer Motion 12.29                          |
| **Build**      | Vite with `@vitejs/plugin-react`             |

---

## Project Structure

```
src/
├── App.tsx                 # Main app with React Router setup
├── main.tsx                # Entry point
├── index.css               # Global styles, CSS variables, Tailwind config
├── App.css                 # App-specific styles
│
├── components/
│   ├── layout/             # Header, Footer, Layout wrapper
│   └── ui/                 # Reusable UI: Button, Card, Badge, StructureFormula
│
├── pages/
│   ├── Home.tsx            # Landing page
│   ├── Lessons.tsx         # Lesson category browser
│   ├── LessonDetail.tsx    # Individual lesson view (tabbed: content/tasks/quiz)
│   ├── Tasks.tsx           # Standalone practice tasks
│   └── Quiz.tsx            # Standalone quiz
│
├── data/
│   ├── lessons.ts          # Main lesson categories (imports tenses, articles, etc.)
│   └── tenses/             # Hierarchical tenses data structure
│       ├── index.ts        # Exports tensesCategory
│       ├── active-voice/
│       │   ├── index.ts
│       │   ├── present/    # present-simple.ts, present-continuous.ts, etc.
│       │   ├── past/       # past-simple.ts, past-continuous.ts, etc.
│       │   └── future/     # future-simple.ts, future-continuous.ts, etc.
│       └── passive-voice/
│           ├── index.ts
│           ├── present/    # present-simple-passive.ts, etc.
│           ├── past/       # past-simple-passive.ts, etc.
│           └── future/     # future-simple-passive.ts, future-perfect-passive.ts
│
└── types/
    └── lesson.ts           # TypeScript interfaces for data model
```

---

## Data Model

### Hierarchy

```
LessonCategory
  └── LessonSubcategory
        └── Lesson
              ├── LessonContent (explanation, structure, structureFormula, examples, tips)
              ├── Task[] (fill-blank, multiple-choice)
              └── Quiz (questions with passing score)
```

### Key Types (`src/types/lesson.ts`)

- **LessonCategory**: `{ id, title, description, icon, subcategories[] }`
- **LessonSubcategory**: `{ id, title, lessons[], children? }` - supports nested subcategories
- **Lesson**: `{ id, title, description, difficulty, content, tasks[], quiz }`
- **LessonContent**: `{ explanation, structure, structureFormula, examples[], tips[] }`
- **StructureFormula**: Visual sentence structure with `positive/negative/question` patterns
- **Task**: `{ id, type, question, options?, correctAnswer, explanation? }`
- **Quiz**: `{ id, title, questions[], passingScore }`

> **Nested Subcategories**: For Tenses, the hierarchy is:
> `Tenses → Active/Passive Voice (via children) → Present/Past/Future → Lessons`

---

## Routes

| Path                | Component      | Description                                  |
| ------------------- | -------------- | -------------------------------------------- |
| `/`                 | `Home`         | Landing page with intro                      |
| `/lessons`          | `Lessons`      | Browse all lesson categories                 |
| `/lesson/:lessonId` | `LessonDetail` | View lesson with tabs for content/tasks/quiz |
| `/tasks`            | `Tasks`        | Standalone practice tasks                    |
| `/quiz`             | `Quiz`         | Standalone quiz mode                         |

---

## Current Content

### Lesson Categories

1. **Tenses** (⏰) - 20 lessons total
   - **Active Voice** (12 lessons)
     - Present: Simple, Continuous, Perfect, Perfect Continuous
     - Past: Simple, Continuous, Perfect, Perfect Continuous
     - Future: Simple, Continuous, Perfect, Perfect Continuous
   - **Passive Voice** (8 lessons)
     - Present: Simple, Continuous, Perfect
     - Past: Simple, Continuous, Perfect
     - Future: Simple, Perfect
2. **Articles** (📰) - A, An, The
3. **Prepositions** (📍) - Time expressions (at, on, in)
4. **Modal Verbs** (💪) - Can, Could, Should
5. **Conditionals** (🔀) - Zero, First, Second, Third conditionals

Each lesson includes:

- Detailed grammar explanation with examples
- **StructureFormula**: Interactive visualization of positive/negative/question patterns
- Examples with highlighted grammar points
- 3 practice tasks (fill-blank, multiple-choice)
- 5-question quiz with 70% passing score

---

## Design System

### Theme (Dark Mode)

```css
--color-primary: #6366f1; /* Indigo */
--color-primary-dark: #4f46e5;
--color-secondary: #f97316; /* Orange */
--color-success: #22c55e; /* Green */
--color-background: #0f172a; /* Dark blue-gray */
--color-surface: #1e293b; /* Card backgrounds */
--color-text: #f8fafc; /* Light text */
--color-text-muted: #94a3b8; /* Muted text */
```

### Utilities

- `.glass` - Glassmorphism effect with backdrop blur
- `.gradient-text` - Primary-to-secondary gradient text
- `.transition-smooth` - Smooth cubic-bezier transitions

---

## UI Components

| Component                 | Purpose                                      |
| ------------------------- | -------------------------------------------- |
| `Button`                  | Primary, secondary, outline, ghost variants  |
| `Card`                    | Content containers with glass effect         |
| `Badge`                   | Difficulty indicators (success/warning)      |
| `StructureFormulaDisplay` | Interactive sentence structure visualization |

---

## Scripts

```bash
npm run dev      # Start Vite dev server
npm run build    # TypeScript + Vite production build
npm run lint     # ESLint check
npm run preview  # Preview production build
```

---

## Development Notes

- Uses **Tailwind CSS 4** syntax with `@import "tailwindcss"` and `@theme` blocks
- CSS variables are used extensively for theming
- Framer Motion provides entrance animations and micro-interactions
- Tenses data is organized hierarchically in `src/data/tenses/` with one file per lesson
- All lessons must have a `structureFormula` field for the interactive visualization
- `LessonDetail.tsx` is the most complex component (423 lines) with tabbed interface

---

## Planned Features / TODO

- [ ] Progress tracking / user state persistence
- [x] Conditionals lesson
- [ ] More lesson content (reported speech)
- [ ] Spaced repetition for vocabulary
- [ ] Audio pronunciation
- [ ] Mobile responsiveness improvements
