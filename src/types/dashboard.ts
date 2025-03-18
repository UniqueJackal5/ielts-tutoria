export interface Course {
  _id: string;
  title: string;
  students?: Student[];
}

export interface Student {
  _id: string;
  name: string;
  isEnrolled: boolean;
  courses: Array<{
    _id: string;
    title: string;
    instructor: {
      firstName: string;
      lastName: string;
    };
  }>;
  progress: number;
}