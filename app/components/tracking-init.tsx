'use client';

import { useEffect } from 'react';
import { captureTrackingParams, pushGtmEvent } from '@/lib/tracking';

export const TrackingInit = () => {
  useEffect(() => {
    captureTrackingParams();

    const handleClick = (e: MouseEvent) => {
      const target = (e.target as Element).closest('[data-track-wha]');
      if (target) {
        const label = target.getAttribute('data-track-wha') ?? 'unknown';
        pushGtmEvent('whatsapp_click', label);
        return;
      }
      const phone = (e.target as Element).closest('[data-track-phone]');
      if (phone) {
        const label = phone.getAttribute('data-track-phone') ?? 'phone';
        pushGtmEvent('phone_click', label);
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return null;
};
