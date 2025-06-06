'use client';
import React, { useEffect, useState } from 'react';
import DocumentationSidebar from '@/components/DocumentationSidebar';

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

export default function DocumentationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [categories, setCategories] = useState<SidebarCategory[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('/api/documentation/categories');
        if (response.ok) {
          const data = await response.json();
          setCategories(data);
        }
      } catch (error) {
        console.error('Error fetching categories:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  if (loading) {
    return (
      <div className="flex h-screen">
        <div className="w-80 bg-gray-100 animate-pulse"></div>
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Cargando documentación...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-screen">
      <DocumentationSidebar categories={categories} />
      <div className="flex-1 overflow-y-auto">
        {children}
      </div>
    </div>
  );
}
