/**
 * Toast — Lightweight toast notification system.
 *
 * Usage:
 *   import { Toaster, toast } from '@/components/ui/Toast';
 *
 *   // In your component tree (once):
 *   <Toaster />
 *
 *   // Trigger:
 *   toast.success('Done!');
 *   toast.error('Something went wrong');
 */
import { useState, useEffect, useCallback } from 'react';
import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

/* ─── Types ─── */

type ToastType = 'success' | 'error' | 'info';

interface ToastItem {
  id: number;
  type: ToastType;
  message: string;
  exiting?: boolean;
}

interface ToastContextValue {
  addToast: (type: ToastType, message: string) => void;
}

/* ─── Global event bus (so toast() works outside React tree) ─── */

type ToastListener = (type: ToastType, message: string) => void;

const listeners = new Set<ToastListener>();

function emitToast(type: ToastType, message: string) {
  listeners.forEach((fn) => fn(type, message));
}

/** Imperative toast API — call from anywhere */
export const toast = {
  success: (msg: string) => emitToast('success', msg),
  error: (msg: string) => emitToast('error', msg),
  info: (msg: string) => emitToast('info', msg),
};

/* ─── Icons ─── */

function SuccessIcon() {
  return (
    <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function ErrorIcon() {
  return (
    <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function InfoIcon() {
  return (
    <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}

const iconMap: Record<ToastType, () => ReactNode> = {
  success: SuccessIcon,
  error: ErrorIcon,
  info: InfoIcon,
};

const colorMap: Record<ToastType, string> = {
  success: 'bg-green-500/10 border-green-500/30 text-green-500',
  error: 'bg-destructive/10 border-destructive/30 text-destructive',
  info: 'bg-primary/10 border-primary/30 text-primary',
};

/* ─── Toast Item Component ─── */

function ToastNotification({
  item,
  onDismiss,
}: {
  item: ToastItem;
  onDismiss: (id: number) => void;
}) {
  const Icon = iconMap[item.type];

  const isError = item.type === 'error';

  return (
    <div
      role={isError ? 'alert' : 'status'}
      aria-live={isError ? 'assertive' : 'polite'}
      className={cn(
        'flex items-center gap-3 px-4 py-3 rounded-xl border shadow-lg backdrop-blur-sm max-w-md w-full pointer-events-auto',
        'transition-all duration-300 ease-out',
        item.exiting
          ? 'opacity-0 translate-x-8 scale-95'
          : 'opacity-100 translate-x-0 scale-100',
        colorMap[item.type],
      )}
    >
      <Icon />
      <p className="text-sm font-medium flex-1">{item.message}</p>
      <button
        type="button"
        onClick={() => onDismiss(item.id)}
        className="shrink-0 opacity-60 hover:opacity-100 transition-opacity"
        aria-label="Dismiss"
      >
        <CloseIcon />
      </button>
    </div>
  );
}

/* ─── Toaster Container ─── */

const TOAST_DURATION = 5000;
const EXIT_DURATION = 300;

let idCounter = 0;

export function Toaster() {
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  const addToast = useCallback((type: ToastType, message: string) => {
    const id = ++idCounter;
    setToasts((prev) => [...prev, { id, type, message }]);

    // Auto-dismiss
    setTimeout(() => dismissToast(id), TOAST_DURATION);
  }, []);

  const dismissToast = useCallback((id: number) => {
    // Start exit animation
    setToasts((prev) =>
      prev.map((t) => (t.id === id ? { ...t, exiting: true } : t)),
    );
    // Remove after animation
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, EXIT_DURATION);
  }, []);

  // Subscribe to global event bus
  useEffect(() => {
    const handler: ToastListener = (type, message) => addToast(type, message);
    listeners.add(handler);
    return () => {
      listeners.delete(handler);
    };
  }, [addToast]);

  return (
    <div
      className="fixed top-6 right-6 z-9999 flex flex-col gap-3 pointer-events-none"
      aria-label="Notifications"
      role="region"
    >
      {toasts.map((item) => (
        <ToastNotification key={item.id} item={item} onDismiss={dismissToast} />
      ))}
    </div>
  );
}
