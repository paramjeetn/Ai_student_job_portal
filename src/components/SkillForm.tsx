import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import type { Skill } from '../types';

interface SkillFormProps {
  onAddSkill: (skill: Omit<Skill, 'id' | 'studentId'>) => void;
}

export default function SkillForm({ onAddSkill }: SkillFormProps) {
  const [name, setName] = useState('');
  const [level, setLevel] = useState<Skill['level']>('Beginner');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddSkill({ name, level });
    setName('');
    setLevel('Beginner');
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-4">Add New Skill</h3>
      <div className="flex gap-4">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Skill name"
          className="flex-1 p-2 border rounded-md"
          required
        />
        <select
          value={level}
          onChange={(e) => setLevel(e.target.value as Skill['level'])}
          className="p-2 border rounded-md"
        >
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Advanced">Advanced</option>
        </select>
        <button
          type="submit"
          className="bg-green-600 text-white p-2 rounded-md hover:bg-green-700"
        >
          <Plus className="w-5 h-5" />
        </button>
      </div>
    </form>
  );
}