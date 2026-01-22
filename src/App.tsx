import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout';
import { Home, Lessons, LessonDetail, Tasks, Quiz } from './pages';

function App() {
  return (
    <BrowserRouter basename="/ESL-Tutor">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="lessons" element={<Lessons />} />
          <Route path="lesson/:lessonId" element={<LessonDetail />} />
          <Route path="tasks" element={<Tasks />} />
          <Route path="quiz" element={<Quiz />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
