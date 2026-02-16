import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Megaphone,
  ShoppingCart,
  Headphones,
  BarChart3,
  ArrowRight,
  Zap,
  Clock,
} from 'lucide-react';

interface TabData {
  id: string;
  label: string;
  suiteLabel: string;
  title: string;
  description: string;
  buttonText: string;
}

interface KanbanData {
  iaImpact: string;
  iaImpactValue: string;
  iaImpactDesc: string;
  col1Title: string;
  lead1Name: string;
  lead1Tag: string;
  lead2Name: string;
  lead2Tag: string;
  col2Title: string;
  lead3Name: string;
  lead3Msg: string;
  lead3Btn: string;
  col3Title: string;
}

interface RoleTabsProps {
  translations: {
    tabs: TabData[];
    kanban: KanbanData;
  };
}

const tabIcons = [Megaphone, ShoppingCart, Headphones, BarChart3];

export default function RoleTabs({ translations }: RoleTabsProps) {
  const { tabs, kanban } = translations;
  const [activeTab, setActiveTab] = useState(0);
  const currentTab = tabs[activeTab];
  const CurrentIcon = tabIcons[activeTab] ?? Megaphone;

  return (
    <div>
      {/* Tab buttons */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {tabs.map((tab, i) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(i)}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all cursor-pointer ${
              i === activeTab
                ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/30'
                : 'bg-surface text-muted-foreground hover:bg-background-lighter border border-border'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentTab.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="role-gradient rounded-3xl p-8 md:p-12 text-white shadow-2xl overflow-hidden relative"
        >
          <div
            className="absolute -top-24 -right-24 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl"
            aria-hidden="true"
          />

          <div className="flex flex-col md:flex-row gap-12 items-center relative z-10">
            <div className="md:w-1/3">
              <div className="flex items-center gap-2 mb-4 opacity-90">
                <CurrentIcon className="w-5 h-5" />
                <span className="font-medium">{currentTab.suiteLabel}</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                {currentTab.title}
              </h2>
              <p className="text-primary-foreground/70 text-lg mb-8 leading-relaxed">
                {currentTab.description}
              </p>
              <button className="bg-white/90 text-brand-navy px-6 py-3 rounded-full font-bold flex items-center gap-2 hover:bg-white hover:scale-[1.02] hover:-translate-y-0.5 transition-all shadow-lg cursor-pointer group">
                {currentTab.buttonText}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Kanban mockup */}
            <div className="md:w-2/3 w-full relative">
              {/* Impact widget */}
              <div className="absolute -top-6 -right-4 md:right-0 bg-card p-4 rounded-xl shadow-xl z-20 max-w-[200px] border border-border-light rotate-2">
                <div className="flex items-center gap-2 mb-2">
                  <div className="bg-background text-foreground p-1 rounded">
                    <Zap className="w-3 h-3" />
                  </div>
                  <span className="text-xs font-bold text-foreground">
                    {kanban.iaImpact}
                  </span>
                </div>
                <div className="text-2xl font-bold text-green-500 mb-1">{kanban.iaImpactValue}</div>
                <p className="text-[10px] text-muted-foreground leading-tight">
                  {kanban.iaImpactDesc}
                </p>
              </div>

              {/* Board */}
              <div className="bg-card rounded-xl shadow-lg p-2 overflow-hidden text-foreground text-xs">
                <div className="flex gap-4 p-4 overflow-x-auto">
                  {/* Column: New Leads */}
                  <div className="flex-1 min-w-[150px] space-y-3">
                    <div className="font-bold flex justify-between items-center text-muted-foreground uppercase tracking-wide text-[10px] mb-2">
                      {kanban.col1Title}{' '}
                      <span className="bg-surface px-1.5 rounded-full text-muted-foreground">
                        12
                      </span>
                    </div>
                    <div className="bg-background-lighter p-3 rounded border border-border shadow-sm">
                      <div className="font-semibold mb-1">{kanban.lead1Name}</div>
                      <div className="flex gap-1 mb-2">
                        <span className="bg-blue-500/15 text-blue-400 px-1.5 py-0.5 rounded text-[10px]">
                          {kanban.lead1Tag}
                        </span>
                      </div>
                      <div className="text-muted-foreground flex items-center gap-1 text-[10px]">
                        <Clock className="w-3 h-3" /> 10m
                      </div>
                    </div>
                    <div className="bg-background-lighter p-3 rounded border border-border shadow-sm">
                      <div className="font-semibold mb-1">{kanban.lead2Name}</div>
                      <div className="flex gap-1 mb-2">
                        <span className="bg-purple-500/15 text-purple-400 px-1.5 py-0.5 rounded text-[10px]">
                          {kanban.lead2Tag}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Column: Contacted */}
                  <div className="flex-1 min-w-[150px] space-y-3">
                    <div className="font-bold flex justify-between items-center text-muted-foreground uppercase tracking-wide text-[10px] mb-2">
                      {kanban.col2Title}{' '}
                      <span className="bg-primary/15 px-1.5 rounded-full text-primary">
                        5
                      </span>
                    </div>
                    <div className="bg-background-lighter p-3 rounded border border-border shadow-sm relative overflow-hidden">
                      <div className="absolute left-0 top-0 h-full w-1 bg-primary" />
                      <div className="font-semibold mb-1 pl-1">{kanban.lead3Name}</div>
                      <p className="text-[10px] text-muted-foreground mb-2 pl-1">
                        {kanban.lead3Msg}
                      </p>
                      <button className="w-full bg-primary text-primary-foreground py-1 rounded text-[10px] hover:bg-primary-hover transition-colors cursor-pointer">
                        {kanban.lead3Btn}
                      </button>
                    </div>
                  </div>

                  {/* Column: Scheduled (placeholder) */}
                  <div className="flex-1 min-w-[150px] space-y-3 opacity-50">
                    <div className="font-bold flex justify-between items-center text-muted-foreground uppercase tracking-wide text-[10px] mb-2">
                      {kanban.col3Title}
                    </div>
                    <div className="bg-background-lighter p-3 rounded border border-border shadow-sm">
                      <div className="h-2 w-12 bg-surface rounded mb-2" />
                      <div className="h-2 w-full bg-surface rounded" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
