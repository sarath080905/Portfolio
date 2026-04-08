import { Code2, Database, GitBranch, LayoutGrid, Server, Palette } from "lucide-react";

const iconMap = {
  code: Code2,
  frontend: Code2,
  server: Server,
  backend: Server,
  database: Database,
  ui: LayoutGrid,
  design: Palette,
  palette: Palette,
  git: GitBranch,
  version: GitBranch,
};

export default function SkillsBars({ skills = [] }) {
  return (
    <div className="space-y-5">
      {skills.map((s) => {
        const Icon = iconMap[s.icon] ?? Code2;
        const percent = Number.isFinite(s.percent) ? Math.max(0, Math.min(100, s.percent)) : 0;

        return (
          <div
            key={s.name}
            className="p-5 rounded-2xl border border-white/50 bg-white/60 backdrop-blur shadow-sm hover:shadow-lg transition-shadow dark:border-slate-700 dark:bg-slate-900/65"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="h-10 w-10 rounded-xl bg-gradient-to-br from-indigo-600/15 via-purple-600/15 to-pink-600/15 border border-gray-200/70 dark:border-slate-700 flex items-center justify-center">
                  <Icon className="h-5 w-5 text-indigo-700 dark:text-indigo-300" />
                </span>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">{s.name}</p>
                  {s.note ? <p className="text-sm text-gray-600 dark:text-gray-300 mt-0.5">{s.note}</p> : null}
                </div>
              </div>

              <div className="text-right">
                <p className="text-sm font-bold text-gray-900 dark:text-white">{percent}%</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">proficiency</p>
              </div>
            </div>

            <div className="mt-4 h-3 rounded-full bg-gray-100 dark:bg-slate-800 overflow-hidden">
              <div
                className="h-full rounded-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 transition-all duration-500"
                style={{ width: `${percent}%` }}
                aria-hidden="true"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

