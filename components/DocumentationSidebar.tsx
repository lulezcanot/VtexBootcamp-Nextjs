'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  ChevronDown, 
  ChevronRight, 
  Settings, 
  PlayCircle, 
  FileText, 
  Package, 
  Code,
  Search
} from 'lucide-react';

interface SidebarSection {
  title: string;
  slug: string;
}

interface SidebarCategory {
  id: string;
  name: string;
  slug: string;
  icon: string;
  sections: SidebarSection[];
}

interface DocumentationSidebarProps {
  categories: SidebarCategory[];
}

const iconMap = {
  'settings': Settings,
  'play-circle': PlayCircle,
  'file-text': FileText,
  'package': Package,
  'code': Code,
};

const DocumentationSidebar: React.FC<DocumentationSidebarProps> = ({ categories }) => {
  const pathname = usePathname();
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(new Set());
  const [searchTerm, setSearchTerm] = useState('');

  const toggleCategory = (categoryId: string) => {
    const newExpanded = new Set(expandedCategories);
    if (newExpanded.has(categoryId)) {
      newExpanded.delete(categoryId);
    } else {
      newExpanded.add(categoryId);
    }
    setExpandedCategories(newExpanded);
  };

  const filteredCategories = categories.filter(category =>
    category.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    category.sections.some(section => 
      section.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <div className="w-80 bg-white border-r border-gray-200 h-full overflow-y-auto">
      {/* Header */}
      <div className="p-6 border-b border-gray-200">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Documentación</h2>
        
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Buscar en documentación..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
          />
        </div>
      </div>

      {/* Navigation */}
      <nav className="p-4">
        {filteredCategories.map((category) => {
          const IconComponent = iconMap[category.icon as keyof typeof iconMap] || Settings;
          const isExpanded = expandedCategories.has(category.id);
          
          return (
            <div key={category.id} className="mb-2">
              {/* Category Header */}
              <button
                onClick={() => toggleCategory(category.id)}
                className="w-full flex items-center justify-between p-3 text-left hover:bg-gray-50 rounded-lg transition-colors group"
              >
                <div className="flex items-center space-x-3">
                  <IconComponent className="w-5 h-5 text-purple-600" />
                  <span className="font-medium text-gray-900 group-hover:text-purple-600">
                    {category.name}
                  </span>
                </div>
                {isExpanded ? (
                  <ChevronDown className="w-4 h-4 text-gray-500" />
                ) : (
                  <ChevronRight className="w-4 h-4 text-gray-500" />
                )}
              </button>

              {/* Category Sections */}
              {isExpanded && (
                <div className="ml-8 mt-2 space-y-1">
                  {category.sections.map((section) => {
                    const sectionPath = `/documentacion/${category.slug}/${section.slug}`;
                    const isActive = pathname === sectionPath;
                    
                    return (
                      <Link
                        key={section.slug}
                        href={sectionPath}
                        className={`block px-3 py-2 text-sm rounded-md transition-colors ${
                          isActive
                            ? 'bg-purple-100 text-purple-700 font-medium'
                            : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                        }`}
                      >
                        {section.title}
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </nav>
    </div>
  );
};

export default DocumentationSidebar;
