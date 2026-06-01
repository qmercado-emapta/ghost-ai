import type { ReactNode } from "react"

import { EditorLayoutShell } from "@/components/editor/editor-layout-shell"

/**
 * Props for the editor route layout.
 */
interface EditorLayoutProps {
  children: ReactNode
}

/**
 * Wraps editor routes with the shared interactive editor chrome.
 */
export default function EditorLayout({ children }: EditorLayoutProps) {
  return <EditorLayoutShell>{children}</EditorLayoutShell>
}
