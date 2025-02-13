import * as React from 'react'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/projects')({
  component: ProjectsComponent,
})

function ProjectsComponent() {
  return (
    <div className="p-2">
      <h3>Projects</h3>
    </div>
  )
}
