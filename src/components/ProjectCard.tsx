"use client";
import { useState } from "react";
import { Project } from "@/types/project";

export function ProjectCard({ project: p }: { project: Project }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="p-6 border border-zinc-200 dark:border-zinc-800 rounded-lg">
      <div className="flex items-baseline justify-between mb-2">
        <h3 className="text-lg font-semibold text-black dark:text-zinc-50">{p.title}</h3>
        <span className="text-xs font-medium text-zinc-500">{p.status}</span>
      </div>
      <p className="text-zinc-700 dark:text-zinc-300 mb-3">{p.shortDescription}</p>
      <div className="flex flex-wrap gap-2 text-xs text-zinc-500 mb-3">
        {p.technologies.map((t) => (
          <span key={t} className="px-2 py-1 bg-zinc-100 dark:bg-zinc-900 rounded">{t}</span>
        ))}
      </div>
      <div className="flex gap-4 text-sm font-medium mb-2">
        {p.repoUrl && (
          <a href={p.repoUrl} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">
            Code
          </a>
        )}
        {p.liveUrl && (
          <a href={p.liveUrl} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">
            Live
          </a>
        )}
        <button
          onClick={() => setExpanded((e) => !e)}
          className="underline underline-offset-4"
          aria-expanded={expanded}
        >
          {expanded ? "Hide case study" : "View case study"}
        </button>
      </div>

      {expanded && (
        <div className="mt-4 pt-4 border-t border-zinc-200 dark:border-zinc-800 flex flex-col gap-4 text-sm text-zinc-700 dark:text-zinc-300">
          <div>
            <h4 className="font-semibold text-black dark:text-zinc-50 mb-1">Problem</h4>
            <p>{p.caseStudy.problem}</p>
          </div>
          <div>
            <h4 className="font-semibold text-black dark:text-zinc-50 mb-1">Context</h4>
            <p>{p.caseStudy.context}</p>
          </div>
          <div>
            <h4 className="font-semibold text-black dark:text-zinc-50 mb-1">Solution</h4>
            <p>{p.caseStudy.solution}</p>
          </div>
          <div>
            <h4 className="font-semibold text-black dark:text-zinc-50 mb-1">Key features</h4>
            <ul className="list-disc list-inside">
              {p.caseStudy.keyFeatures.map((f) => <li key={f}>{f}</li>)}
            </ul>
          </div>
          {p.caseStudy.architecture && (
            <div>
              <h4 className="font-semibold text-black dark:text-zinc-50 mb-1">Architecture</h4>
              <p>{p.caseStudy.architecture}</p>
            </div>
          )}
          {p.caseStudy.engineeringChallenges && (
            <div>
              <h4 className="font-semibold text-black dark:text-zinc-50 mb-1">Engineering challenges</h4>
              <ul className="list-disc list-inside">
                {p.caseStudy.engineeringChallenges.map((c) => <li key={c}>{c}</li>)}
              </ul>
            </div>
          )}
          {p.caseStudy.technicalDecisions && (
            <div>
              <h4 className="font-semibold text-black dark:text-zinc-50 mb-1">Technical decisions</h4>
              <ul className="list-disc list-inside">
                {p.caseStudy.technicalDecisions.map((d) => (
                  <li key={d.decision}><span className="font-medium">{d.decision}:</span> {d.reasoning}</li>
                ))}
              </ul>
            </div>
          )}
          <div>
            <h4 className="font-semibold text-black dark:text-zinc-50 mb-1">Results</h4>
            <p>{p.caseStudy.results}</p>
          </div>
        </div>
      )}
    </div>
  );
}
