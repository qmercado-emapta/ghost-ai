"use client"

import type { ReactNode } from "react"
import { PanelLeftClose, PanelLeftOpen } from "lucide-react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface EditorNavbarProps {
  isSidebarOpen: boolean
  onToggleSidebar: () => void
  centerContent?: ReactNode
  className?: string
}

function EditorNavbar({
  isSidebarOpen,
  onToggleSidebar,
  centerContent,
  className,
}: EditorNavbarProps) {
  const SidebarIcon = isSidebarOpen ? PanelLeftClose : PanelLeftOpen

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 grid h-14 grid-cols-[1fr_auto_1fr] items-center border-b border-surface-border bg-surface px-4",
        className
      )}
    >
      <div className="flex items-center justify-start">
        <Button
          type="button"
          variant="ghost"
          size="icon"
          aria-label={isSidebarOpen ? "Close project sidebar" : "Open project sidebar"}
          title={isSidebarOpen ? "Close project sidebar" : "Open project sidebar"}
          onClick={onToggleSidebar}
        >
          <SidebarIcon className="h-5 w-5" />
        </Button>
      </div>

      <div className="flex min-w-0 items-center justify-center text-sm font-medium text-copy-secondary">
        {centerContent}
      </div>

      <div className="flex items-center justify-end" aria-hidden="true" />
    </header>
  )
}

export { EditorNavbar }
export type { EditorNavbarProps }
