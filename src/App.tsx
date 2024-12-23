import React, { useState } from 'react';
import AuthForm from './components/AuthForm';
import SkillForm from './components/SkillForm';
import JobPostingForm from './components/JobPostingForm';
import { Building2, GraduationCap, Building } from 'lucide-react';

type UserType = 'university' | 'student' | 'company' | null;

function App() {
  const [userType, setUserType] = useState<UserType>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (email: string, password: string) => {
    // In a real app, implement proper authentication
    console.log('Logging in:', { email, password, userType });
    setIsLoggedIn(true);
  };

  if (!userType) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold text-center mb-6">Choose User Type</h1>
          <div className="grid grid-cols-3 gap-4">
            <button
              onClick={() => setUserType('university')}
              className="flex flex-col items-center p-4 border rounded-lg hover:bg-gray-50"
            >
              <Building2 className="w-8 h-8 mb-2 text-blue-600" />
              <span>University</span>
            </button>
            <button
              onClick={() => setUserType('student')}
              className="flex flex-col items-center p-4 border rounded-lg hover:bg-gray-50"
            >
              <GraduationCap className="w-8 h-8 mb-2 text-green-600" />
              <span>Student</span>
            </button>
            <button
              onClick={() => setUserType('company')}
              className="flex flex-col items-center p-4 border rounded-lg hover:bg-gray-50"
            >
              <Building className="w-8 h-8 mb-2 text-purple-600" />
              <span>Company</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (!isLoggedIn) {
    return <AuthForm type={userType} onSubmit={handleLogin} />;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <header className="bg-white p-4 rounded-lg shadow-md mb-8">
          <h1 className="text-2xl font-bold">
            {userType.charAt(0).toUpperCase() + userType.slice(1)} Dashboard
          </h1>
        </header>

        {userType === 'student' && (
          <div className="space-y-8">
            <SkillForm onAddSkill={console.log} />
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">Available Jobs</h2>
              <p className="text-gray-600">No jobs available yet.</p>
            </div>
          </div>
        )}

        {userType === 'company' && (
          <div className="space-y-8">
            <JobPostingForm onSubmit={console.log} />
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">Your Job Postings</h2>
              <p className="text-gray-600">No jobs posted yet.</p>
            </div>
          </div>
        )}

        {userType === 'university' && (
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Registered Students</h2>
            <p className="text-gray-600">No students registered yet.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;