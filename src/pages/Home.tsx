import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button, Card, CardHeader, CardTitle, CardContent } from '../components/ui';
import { lessonCategories } from '../data/lessons';

export function Home() {
  const features = [
    { icon: '📖', title: 'Structured Lessons', description: 'Learn grammar step by step' },
    { icon: '✏️', title: 'Interactive Tasks', description: 'Practice with exercises' },
    { icon: '🎯', title: 'Quizzes', description: 'Test your knowledge' },
    { icon: '🌟', title: 'All Levels', description: 'From beginner to advanced' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)]/20 via-transparent to-[var(--color-secondary)]/20" />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center relative z-10"
        >
          <span className="text-6xl mb-6 block">📚</span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">ESL Tutor</span>
          </h1>
          <p className="text-xl md:text-2xl text-[var(--color-text-muted)] mb-8 max-w-2xl mx-auto">
            Master English grammar with structured lessons, interactive exercises, and quizzes designed for ESL learners.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/lessons">
              <Button size="lg">Start Learning</Button>
            </Link>
            <Link to="/quiz">
              <Button variant="outline" size="lg">Take a Quiz</Button>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
          >
            Why Choose ESL Tutor?
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="text-center h-full">
                  <CardHeader>
                    <span className="text-4xl mb-2 block">{feature.icon}</span>
                    <CardTitle>{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Preview */}
      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-4"
          >
            Explore Grammar Topics
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[var(--color-text-muted)] text-center mb-12 max-w-2xl mx-auto"
          >
            From tenses to articles, master every aspect of English grammar
          </motion.p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {lessonCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link to="/lessons">
                  <Card hover className="h-full">
                    <CardHeader>
                      <span className="text-4xl mb-2 block">{category.icon}</span>
                      <CardTitle>{category.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>{category.description}</p>
                      <p className="text-sm text-[var(--color-primary)] mt-2">
                        {category.subcategories.reduce((acc, sub) => acc + sub.lessons.length, 0)} lessons
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who is this for */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
          >
            Who is ESL Tutor for?
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: '🎓', title: 'Students', description: 'Preparing for English exams or studying abroad' },
              { icon: '💼', title: 'Professionals', description: 'Improving English for work communication' },
              { icon: '🌍', title: 'Travelers', description: 'Learning practical English for trips' },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="text-center h-full">
                  <span className="text-5xl mb-4 block">{item.icon}</span>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-[var(--color-text-muted)]">{item.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center glass rounded-3xl p-12"
        >
          <h2 className="text-3xl font-bold mb-4">Ready to improve your English?</h2>
          <p className="text-[var(--color-text-muted)] mb-8">
            Start with our structured lessons and see your grammar skills improve.
          </p>
          <Link to="/lessons">
            <Button size="lg">Browse All Lessons</Button>
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
