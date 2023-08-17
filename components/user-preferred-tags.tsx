// components/PreferredTags.tsx

import React from 'react';

interface PreferredTagsProps {
  selectedTags: string[];
  onChange: (tags: string[]) => void;
}

const tagsOptions = ['web', 'mobile', 'blockchain', 'machine learning']; // Add more options here

const PreferredTags: React.FC<PreferredTagsProps> = ({ selectedTags, onChange }) => {
  const handleTagChange = (tag: string) => {
    if (selectedTags.includes(tag)) {
      onChange(selectedTags.filter((t) => t !== tag));
    } else {
      onChange([...selectedTags, tag]);
    }
  };

  return (
    <div className="mb-4">
      <label className="block text-gray-400 font-bold mb-2">Preferred Tags</label>
      <div className="flex">
        {tagsOptions.map((tag) => (
          <label key={tag} className="mr-4">
            <input
              type="checkbox"
              className="form-checkbox text-purple-800 bg-gray-900"
              checked={selectedTags.includes(tag)}
              onChange={() => handleTagChange(tag)}
            />
            <span className="ml-2 text-gray-300">{tag}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default PreferredTags;
