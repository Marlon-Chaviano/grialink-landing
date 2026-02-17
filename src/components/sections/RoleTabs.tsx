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
import { cn } from '@/lib/utils';

/* ─── Types ─── */

interface BoardCard {
  name: string;
  tag?: string;
  tagColor?: string;
  metric?: string;
  msg?: string;
  btn?: string;
}

interface BoardColumn {
  title: string;
  count?: string;
  cards?: BoardCard[];
}

interface BoardImpact {
  label: string;
  value: string;
  desc: string;
}

interface BoardData {
  impact: BoardImpact;
  col1: BoardColumn;
  col2: BoardColumn;
  col3: BoardColumn;
}

export interface TabData {
  id: string;
  label: string;
  suiteLabel: string;
  title: string;
  description: string;
  buttonText: string;
  board: BoardData;
}

export interface RoleTabsProps {
  translations: {
    tabs: TabData[];
  };
}

/* ─── Constants ─── */

const tabIcons = [Megaphone, ShoppingCart, Headphones, BarChart3];

const tagColorMap: Record<string, { bg: string; text: string }> = {
  blue: { bg: 'bg-blue-500/15', text: 'text-blue-400' },
  purple: { bg: 'bg-purple-500/15', text: 'text-purple-400' },
  teal: { bg: 'bg-teal-500/15', text: 'text-teal-400' },
  yellow: { bg: 'bg-yellow-500/15', text: 'text-yellow-400' },
  red: { bg: 'bg-red-500/15', text: 'text-red-400' },
  green: { bg: 'bg-green-500/15', text: 'text-green-400' },
};

/* ─── Sub-components ─── */

function KanbanCard({ card, index }: { card: BoardCard; index: number }) {
  const tag = tagColorMap[card.tagColor ?? 'blue'] ?? tagColorMap.blue;

  // Card with tag + metric (column 1 style)
  if (card.tag) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 + index * 0.08, duration: 0.3 }}
        className="bg-background-lighter p-3 rounded border border-border shadow-sm"
      >
        <div className="font-semibold mb-1">{card.name}</div>
        <div className="flex gap-1 mb-2">
          <span className={cn('px-1.5 py-0.5 rounded text-[10px]', tag.bg, tag.text)}>
            {card.tag}
          </span>
        </div>
        {card.metric && (
          <div className="text-muted-foreground flex items-center gap-1 text-[10px]">
            <Clock className="w-3 h-3" /> {card.metric}
          </div>
        )}
      </motion.div>
    );
  }

  // Card with message + button (column 2 style)
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.25, duration: 0.3 }}
      className="bg-background-lighter p-3 rounded border border-border shadow-sm relative overflow-hidden"
    >
      <div className="absolute left-0 top-0 h-full w-1 bg-primary" />
      <div className="font-semibold mb-1 pl-1">{card.name}</div>
      {card.msg && (
        <p className="text-[10px] text-muted-foreground mb-2 pl-1">{card.msg}</p>
      )}
      {card.btn && (
        <button className="w-full bg-primary text-primary-foreground py-1 rounded text-[10px] hover:bg-primary-hover transition-colors cursor-pointer">
          {card.btn}
        </button>
      )}
    </motion.div>
  );
}

function KanbanBoard({ board }: { board: BoardData }) {
  return (
    <div className="md:w-2/3 w-full relative">
      {/* Impact widget */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, rotate: 0 }}
        animate={{ opacity: 1, scale: 1, rotate: 2 }}
        transition={{ delay: 0.2, duration: 0.35 }}
        className="absolute -top-6 -right-4 md:right-0 bg-card p-4 rounded-xl shadow-xl z-20 max-w-50 border border-border-light"
      >
        <div className="flex items-center gap-2 mb-2">
          <div className="bg-background text-foreground p-1 rounded">
            <Zap className="w-3 h-3" />
          </div>
          <span className="text-xs font-bold text-foreground">{board.impact.label}</span>
        </div>
        <div className="text-2xl font-bold text-green-500 mb-1">{board.impact.value}</div>
        <p className="text-[10px] text-muted-foreground leading-tight">{board.impact.desc}</p>
      </motion.div>

      {/* Board */}
      <div className="bg-card rounded-xl shadow-lg p-2 overflow-hidden text-foreground text-xs">
        <div className="flex gap-4 p-4 overflow-x-auto">
          {/* Column 1 */}
          <div className="flex-1 min-w-37.5 space-y-3">
            <div className="font-bold flex justify-between items-center text-muted-foreground uppercase tracking-wide text-[10px] mb-2">
              {board.col1.title}
              {board.col1.count && (
                <span className="bg-surface px-1.5 rounded-full text-muted-foreground">
                  {board.col1.count}
                </span>
              )}
            </div>
            {board.col1.cards?.map((card, i) => (
              <KanbanCard key={i} card={card} index={i} />
            ))}
          </div>

          {/* Column 2 */}
          <div className="flex-1 min-w-37.5 space-y-3">
            <div className="font-bold flex justify-between items-center text-muted-foreground uppercase tracking-wide text-[10px] mb-2">
              {board.col2.title}
              {board.col2.count && (
                <span className="bg-primary/15 px-1.5 rounded-full text-primary">
                  {board.col2.count}
                </span>
              )}
            </div>
            {board.col2.cards?.map((card, i) => (
              <KanbanCard key={i} card={card} index={i} />
            ))}
          </div>

          {/* Column 3 (placeholder) */}
          <div className="flex-1 min-w-37.5 space-y-3 opacity-50">
            <div className="font-bold flex justify-between items-center text-muted-foreground uppercase tracking-wide text-[10px] mb-2">
              {board.col3.title}
            </div>
            <div className="bg-background-lighter p-3 rounded border border-border shadow-sm">
              <div className="h-2 w-12 bg-surface rounded mb-2" />
              <div className="h-2 w-full bg-surface rounded" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Main Component ─── */

export default function RoleTabs({ translations }: RoleTabsProps) {
  const { tabs } = translations;
  const [activeTab, setActiveTab] = useState(0);
  const currentTab = tabs[activeTab];
  const CurrentIcon = tabIcons[activeTab] ?? Megaphone;

  function handleKeyDown(e: React.KeyboardEvent, index: number) {
    let newIndex = index;
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      e.preventDefault();
      newIndex = (index + 1) % tabs.length;
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      e.preventDefault();
      newIndex = (index - 1 + tabs.length) % tabs.length;
    } else if (e.key === 'Home') {
      e.preventDefault();
      newIndex = 0;
    } else if (e.key === 'End') {
      e.preventDefault();
      newIndex = tabs.length - 1;
    } else {
      return;
    }
    setActiveTab(newIndex);
    // Focus the new tab
    const tabEl = document.getElementById(`role-tab-${tabs[newIndex].id}`);
    tabEl?.focus();
  }

  return (
    <div>
      {/* Tab buttons — proper ARIA tablist */}
      <div role="tablist" aria-label="Role features" className="flex flex-wrap justify-center gap-2 mb-10">
        {tabs.map((tab, i) => (
          <button
            key={tab.id}
            id={`role-tab-${tab.id}`}
            role="tab"
            aria-selected={i === activeTab}
            aria-controls={`role-panel-${tab.id}`}
            tabIndex={i === activeTab ? 0 : -1}
            onClick={() => setActiveTab(i)}
            onKeyDown={(e) => handleKeyDown(e, i)}
            className={cn(
              'px-6 py-2 rounded-full text-sm font-medium transition-all cursor-pointer',
              i === activeTab
                ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/30'
                : 'bg-surface text-muted-foreground hover:bg-background-lighter border border-border',
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content card — proper tabpanel */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentTab.id}
          id={`role-panel-${currentTab.id}`}
          role="tabpanel"
          aria-labelledby={`role-tab-${currentTab.id}`}
          tabIndex={0}
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

            {/* Dynamic board per tab */}
            <KanbanBoard board={currentTab.board} />
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
