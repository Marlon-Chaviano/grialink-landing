/**
 * ContactForm — React form with Zod validation, react-hook-form,
 * honeypot anti-spam, toast notifications, and full i18n via translation props.
 *
 * Hydrated with client:visible for minimal JS.
 * Sends POST to /api/contact (Astro server endpoint).
 */
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod/v4';
import { useState } from 'react';

import { cn } from '@/lib/utils';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { Select } from '@/components/ui/Select';
import { FormField } from '@/components/ui/FormField';
import { Button } from '@/components/ui/Button';
import { Toaster, toast } from '@/components/ui/Toast';

/* ─── Types ─── */

interface ContactFormTranslations {
  form: {
    title: string;
    subtitle: string;
    fields: {
      name: { label: string; placeholder: string };
      email: { label: string; placeholder: string };
      company: { label: string; placeholder: string };
      subject: {
        label: string;
        placeholder: string;
        options: Record<string, string>;
      };
      message: { label: string; placeholder: string };
    };
    submit: string;
    sending: string;
    success: string;
    error: string;
    validation: {
      nameRequired: string;
      nameMin: string;
      emailRequired: string;
      emailInvalid: string;
      subjectRequired: string;
      messageRequired: string;
      messageMin: string;
    };
  };
}

interface ContactFormProps {
  translations: ContactFormTranslations;
}

/* ─── Schema builder (i18n messages) ─── */

function buildSchema(v: ContactFormTranslations['form']['validation']) {
  return z.object({
    name: z
      .string()
      .min(1, v.nameRequired)
      .min(2, v.nameMin),
    email: z
      .string()
      .min(1, v.emailRequired)
      .email(v.emailInvalid),
    company: z.string().optional(),
    subject: z
      .string()
      .min(1, v.subjectRequired),
    message: z
      .string()
      .min(1, v.messageRequired)
      .min(10, v.messageMin),
    // Honeypot field — bots will fill this, humans won't see it
    _hp: z.string().max(0).optional(),
  });
}

type FormData = z.infer<ReturnType<typeof buildSchema>>;

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

/* ─── Component ─── */

export default function ContactForm({ translations }: ContactFormProps) {
  const { form: t } = translations;
  const schema = buildSchema(t.validation);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: '',
      email: '',
      company: '',
      subject: '',
      message: '',
      _hp: '',
    },
  });

  const [status, setStatus] = useState<FormStatus>('idle');

  async function onSubmit(data: FormData) {
    // Honeypot check — silently ignore
    if (data._hp) return;

    setStatus('loading');

    try {
      const baseUrl = import.meta.env.PUBLIC_BACKEND_URL;
      const res = await fetch(`${baseUrl}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept-Language': document.documentElement.lang || 'en',
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          company: data.company,
          subject: data.subject,
          message: data.message,
        }),
      });

      const json = await res.json().catch(() => null);

      if (!res.ok) {
        // 429 — Rate limited
        if (res.status === 429) {
          toast.error(json?.message ?? t.error);
          setStatus('idle');
          return;
        }
        // 400 — Validation errors from server
        if (res.status === 400 && json?.fields) {
          const fieldMessages = Object.values(json.fields).join(' ');
          toast.error(fieldMessages || t.error);
          setStatus('idle');
          return;
        }
        // Other server errors (500, etc.)
        throw new Error(json?.message ?? 'Request failed');
      }

      setStatus('success');
      toast.success(json?.message ?? t.success);
      reset();
    } catch {
      setStatus('error');
      toast.error(t.error);
    }
  }

  const subjectOptions = Object.entries(t.fields.subject.options);

  return (
    <div className="bg-card rounded-2xl border border-border shadow-sm p-8 md:p-12">
      {/* Toast container */}
      <Toaster />

      {/* Header */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-foreground mb-3">{t.title}</h2>
        <p className="text-muted-foreground">{t.subtitle}</p>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        className="space-y-6"
      >
        {/* Honeypot — hidden from humans, bots will fill it */}
        <div className="absolute opacity-0 top-0 left-0 h-0 w-0 -z-10 overflow-hidden" aria-hidden="true">
          <label htmlFor="__hp_field">Do not fill this</label>
          <input
            type="text"
            id="__hp_field"
            autoComplete="off"
            tabIndex={-1}
            {...register('_hp')}
          />
        </div>

        {/* Name + Email row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            htmlFor="name"
            label={t.fields.name.label}
            error={errors.name?.message}
          >
            <Input
              id="name"
              type="text"
              placeholder={t.fields.name.placeholder}
              autoComplete="name"
              error={!!errors.name}
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? 'name-error' : undefined}
              {...register('name')}
            />
          </FormField>

          <FormField
            htmlFor="email"
            label={t.fields.email.label}
            error={errors.email?.message}
          >
            <Input
              id="email"
              type="email"
              placeholder={t.fields.email.placeholder}
              autoComplete="email"
              error={!!errors.email}
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? 'email-error' : undefined}
              {...register('email')}
            />
          </FormField>
        </div>

        {/* Company + Subject row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            htmlFor="company"
            label={t.fields.company.label}
          >
            <Input
              id="company"
              type="text"
              placeholder={t.fields.company.placeholder}
              autoComplete="organization"
              {...register('company')}
            />
          </FormField>

          <FormField
            htmlFor="subject"
            label={t.fields.subject.label}
            error={errors.subject?.message}
          >
            <Select
              id="subject"
              error={!!errors.subject}
              aria-invalid={!!errors.subject}
              aria-describedby={errors.subject ? 'subject-error' : undefined}
              {...register('subject')}
            >
              <option value="">{t.fields.subject.placeholder}</option>
              {subjectOptions.map(([value, label]) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </Select>
          </FormField>
        </div>

        {/* Message */}
        <FormField
          htmlFor="message"
          label={t.fields.message.label}
          error={errors.message?.message}
        >
          <Textarea
            id="message"
            placeholder={t.fields.message.placeholder}
            error={!!errors.message}
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? 'message-error' : undefined}
            {...register('message')}
          />
        </FormField>

        {/* Submit */}
        <div className="pt-2">
          <Button
            type="submit"
            variant="primary"
            size="lg"
            disabled={status === 'loading'}
            className={cn(
              'w-full rounded-lg gap-2',
              status === 'loading' && 'opacity-80',
            )}
          >
            {status === 'loading' ? (
              <>
                <svg
                  className="animate-spin w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                  />
                </svg>
                {t.sending}
              </>
            ) : (
              <>
                {t.submit}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
              </>
            )}
          </Button>
        </div>
      </form>
    </div>
  );
}
