interface ICategory {
  id: string;
  name: string;
  description: string;
  image?: string;
  quizzes: IQuiz[];
}

interface IQuiz {
  id: string;
  title: string;
  description?: string | null;
  image?: string | null;
  categoryId: string;
  questions: IQuestion[];
}

interface IQuestion {
  id: string;
  text: string;
  difficulty?: string | null;
  options: IOption[];
}

interface IResponse {
  questionId: string;
  optionId: string;
  isCorrect: boolean;
}

interface IOption {
  id: string;
  text: string;
  isCorret: boolean;
}

interface ICategoryStats {
  attempts: number;
  averageScore: number | null;
  categoryId: string;
  completed: number;
  id: string;
  lastAttempt: Date;
  userId: string;
  category: ICategory;
}

// Learning Path interfaces
interface ILearningPath {
  id: string;
  name: string;
  title: string;
  description: string;
  image?: string;
  order: number;
  modules: IModule[];
  userProgress?: IUserLearningProgress[];
}

interface IModule {
  id: string;
  title: string;
  description: string;
  duration: string;
  order: number;
  learningPathId: string;
  lessons: ILesson[];
  userProgress?: IUserModuleProgress[];
}

interface ILesson {
  id: string;
  title: string;
  content: ILessonContent;
  videoUrl?: string;
  codeExample?: ICodeExample;
  resources?: IResource[];
  duration: string;
  order: number;
  moduleId: string;
  userProgress?: IUserLessonProgress[];
}

interface ILessonContent {
  sections: IContentSection[];
}

interface IContentSection {
  id: string;
  type: 'text' | 'list' | 'heading';
  title?: string;
  content: string;
  items?: string[];
}

interface ICodeExample {
  language: string;
  code: string;
  description: string;
}

interface IResource {
  id: string;
  title: string;
  type: 'documentation' | 'video' | 'link' | 'tool';
  url: string;
  description?: string;
}

interface IUserLearningProgress {
  id: string;
  userId: string;
  learningPathId: string;
  startedAt: Date;
  lastAccessedAt: Date;
  completedAt?: Date;
  progressPercent: number;
}

interface IUserModuleProgress {
  id: string;
  userId: string;
  moduleId: string;
  startedAt: Date;
  completedAt?: Date;
  progressPercent: number;
}

interface IUserLessonProgress {
  id: string;
  userId: string;
  lessonId: string;
  startedAt: Date;
  completedAt?: Date;
  timeSpent: number;
}

export type { 
  ICategory, 
  IQuiz, 
  IQuestion, 
  IOption, 
  IResponse, 
  ICategoryStats,
  ILearningPath,
  IModule,
  ILesson,
  ILessonContent,
  IContentSection,
  ICodeExample,
  IResource,
  IUserLearningProgress,
  IUserModuleProgress,
  IUserLessonProgress
};
