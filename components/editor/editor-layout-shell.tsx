"use client"

import { useState, type ReactNode } from "react"

import { EditorNavbar } from "@/components/editor/editor-navbar"
import { ProjectSidebar } from "@/components/editor/project-sidebar"

interface EditorLayoutShellProps {
  children: ReactNode
}

function EditorLayoutShell({ children }: EditorLayoutShellProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)

  return (
    <div className="min-h-screen bg-base text-copy-primary">
      <EditorNavbar
        isSidebarOpen={isSidebarOpen}
        onToggleSidebar={() => setIsSidebarOpen((current) => !current)}
      />
      <ProjectSidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />
      <main className="min-h-screen pt-14">{children}</main>
    </div>
  )
}

export { EditorLayoutShell }
export type { EditorLayoutShellProps }
