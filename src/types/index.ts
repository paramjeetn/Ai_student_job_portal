export interface University {
  id: string;
  name: string;
  email: string;
}

export interface Student {
  id: string;
  name: string;
  email: string;
  universityId: string;
  skills: Skill[];
}

export interface Company {
  id: string;
  name: string;
  email: string;
}

export interface Skill {
  id: string;
  name: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  studentId: string;
}

export interface JobPosting {
  id: string;
  title: string;
  description: string;
  companyId: string;
  requiredSkills: string[];
  location: string;
  type: 'Full-time' | 'Part-time' | 'Internship';
  createdAt: Date;
}

export interface Application {
  id: string;
  jobId: string;
  studentId: string;
  status: 'Pending' | 'Reviewed' | 'Accepted' | 'Rejected';
  appliedAt: Date;
}