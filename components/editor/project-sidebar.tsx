"use client"

import { Plus, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { cn } from "@/lib/utils"

interface ProjectSidebarProps {
  isOpen: boolean
  onClose: () => void
  onNewProject?: () => void
  className?: string
}

function EmptyProjectState({ label }: { label: string }) {
  return (
    <div className="flex min-h-48 items-center justify-center rounded-2xl border border-dashed border-subtle-border bg-subtle/40 px-6 text-center text-sm text-copy-muted">
      {label}
    </div>
  )
}

function ProjectSidebar({
  isOpen,
  onClose,
  onNewProject,
  className,
}: ProjectSidebarProps) {
  return (
    <aside
      className={cn(
        "fixed left-4 top-18 z-30 flex h-[calc(100vh-5.5rem)] w-80 flex-col rounded-2xl border border-sidebar-border bg-sidebar p-4 text-sidebar-foreground shadow-2xl backdrop-blur-xl transition-transform duration-200 ease-out",
        isOpen ? "translate-x-0" : "-translate-x-[calc(100%+2rem)]",
        className
      )}
      aria-hidden={!isOpen}
    >
      <div className="flex items-center justify-between gap-3">
        <h2 className="text-sm font-semibold text-copy-primary">Projects</h2>
        <Button
          type="button"
          variant="ghost"
          size="icon-sm"
          aria-label="Close project sidebar"
          title="Close project sidebar"
          onClick={onClose}
        >
          <X className="h-4 w-4" />
        </Button>
      </div>

      <Tabs defaultValue="my-projects" className="mt-4 min-h-0 flex-1">
        <TabsList className="grid w-full grid-cols-2 bg-subtle">
          <TabsTrigger value="my-projects">My Projects</TabsTrigger>
          <TabsTrigger value="shared">Shared</TabsTrigger>
        </TabsList>
        <TabsContent value="my-projects" className="mt-3">
          <EmptyProjectState label="No projects yet." />
        </TabsContent>
        <TabsContent value="shared" className="mt-3">
          <EmptyProjectState label="No shared projects yet." />
        </TabsContent>
      </Tabs>

      <Button type="button" className="mt-4 w-full" onClick={onNewProject}>
        <Plus className="h-4 w-4" />
        New Project
      </Button>
    </aside>
  )
}

export { ProjectSidebar }
export type { ProjectSidebarProps }
